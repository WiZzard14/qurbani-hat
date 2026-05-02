import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState(''); // 'asc' বা 'desc' স্টোর করার জন্য

    useEffect(() => {
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => {
                setAnimals(data);
                setLoading(false);
            })
            .catch(err => console.error("Error fetching data: ", err));
    }, []);

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
    });

    return (
        <div className="py-8 animate__animated animate__fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <h2 className="text-4xl font-bold text-white border-b-2 border-primary pb-2">
                    All Available Animals
                </h2>
                
                <select 
                    className="select select-primary w-full md:w-xs bg-[#0D0D0D] text-white focus:outline-none"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort by Price (Default)</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedAnimals.map(animal => (
                        <div key={animal.id} className="card glass-effect border border-white/5 shadow-xl hover:shadow-primary/20 transition-all duration-300">
                            <figure className="px-4 pt-4 relative">
                                <img src={animal.image} alt={animal.name} className="rounded-xl h-56 w-full object-cover" />
                                <div className="absolute top-6 right-6 badge badge-primary">{animal.category}</div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-white">{animal.name}</h2>
                                <div className="text-gray-400 space-y-1 mt-2 mb-4">
                                    <p><span className="font-semibold text-gray-300">Breed:</span> {animal.breed}</p>
                                    <p><span className="font-semibold text-gray-300">Location:</span> {animal.location}</p>
                                    <p><span className="font-semibold text-gray-300">Weight:</span> {animal.weight} kg</p>
                                </div>
                                <p className="text-3xl font-bold text-primary mb-4">৳ {animal.price.toLocaleString()}</p>
                                <div className="card-actions w-full mt-auto">
                                    <Link to={`/details-page/${animal.id}`} className="btn btn-primary w-full text-white shadow-lg shadow-primary/30 border-none">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllAnimals;