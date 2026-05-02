import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const AllAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [category, setCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("Default");

    useEffect(() => {
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => {
                setAnimals(data);
                setLoading(false);
            });
    }, []);

    let filteredAnimals = [...animals];

    if (category !== "All") {
        filteredAnimals = filteredAnimals.filter(animal => animal.category === category);
    }

    if (sortOrder === "LowToHigh") {
        filteredAnimals.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "HighToLow") {
        filteredAnimals.sort((a, b) => b.price - a.price);
    }

    if (loading) return <div className="text-center py-20"><span className="loading loading-spinner text-primary loading-lg"></span></div>;

    return (
        <div className="py-10 px-4 max-w-7xl mx-auto animate__animated animate__fadeIn">
            <Helmet>
                <title>QurbaniHat | All Animals</title>
            </Helmet>
            <h2 className="text-4xl font-black text-center text-white mb-10">Explore <span className="text-primary">All Animals</span></h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 glass-effect p-4 rounded-2xl border border-white/10">
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <span className="text-gray-400 font-medium">Category:</span>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="select select-bordered bg-white/5 border-white/10 text-white focus:border-primary w-full md:w-48"
                    >
                        <option value="All" className="bg-[#121212]">All Categories</option>
                        <option value="Large Animal" className="bg-[#121212]">Large Animals (Cow/Bull)</option>
                        <option value="Small Animal" className="bg-[#121212]">Small Animals (Goat/Sheep)</option>
                    </select>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <span className="text-gray-400 font-medium">Sort By:</span>
                    <select 
                        value={sortOrder} 
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="select select-bordered bg-white/5 border-white/10 text-white focus:border-primary w-full md:w-48"
                    >
                        <option value="Default" className="bg-[#121212]">Default</option>
                        <option value="LowToHigh" className="bg-[#121212]">Price: Low to High</option>
                        <option value="HighToLow" className="bg-[#121212]">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {filteredAnimals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAnimals.map(animal => (
                        <div key={animal.id} className="card glass-effect border border-white/10 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                            <figure className="relative h-60 overflow-hidden">
                                <img src={animal.image} alt={animal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    {animal.category}
                                </div>
                            </figure>
                            <div className="card-body p-6">
                                <h2 className="card-title text-2xl font-bold text-white mb-2">{animal.name}</h2>
                                <div className="flex justify-between text-gray-400 text-sm mb-4">
                                    <p>Breed: <span className="text-white">{animal.breed}</span></p>
                                    <p>Weight: <span className="text-white">{animal.weight}kg</span></p>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                    <span className="text-2xl font-black text-primary">৳ {animal.price.toLocaleString()}</span>
                                    <Link to={`/details-page/${animal.id}`} className="btn btn-primary btn-sm rounded-lg text-white">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-400 text-xl">No animals found in this category.</div>
            )}
        </div>
    );
};

export default AllAnimals;