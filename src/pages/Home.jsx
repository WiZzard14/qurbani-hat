import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Home = () => {
    const [featuredAnimals, setFeaturedAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // public ফোল্ডার থেকে animals.json ডেটা ফেচ করা
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => {
                // Featured সেকশনের জন্য প্রথম ৪টা পশু নেওয়া হচ্ছে
                setFeaturedAnimals(data.slice(0, 4));
                setLoading(false);
            })
            .catch(err => console.error("Error fetching data: ", err));
    }, []);

    return (
        <div className="space-y-20 py-8">
            
            {/* ১. Hero Section */}
            <div className="hero min-h-[60vh] rounded-3xl overflow-hidden glass-effect border border-white/10 animate__animated animate__fadeIn">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-primary animate__animated animate__bounceInDown">
                            Find Your Perfect Qurbani Animal
                        </h1>
                        <p className="py-6 text-gray-300 text-lg animate__animated animate__fadeInUp animate__delay-1s">
                            Explore a wide range of healthy, premium livestock for your Qurbani. Browse details, verify quality, and book your animal easily with QurbaniHat.
                        </p>
                        <Link to="/animals" className="btn btn-primary btn-lg text-white shadow-[0_0_20px_rgba(109,40,217,0.5)] border-none animate__animated animate__zoomIn animate__delay-2s">
                            Browse Animals
                        </Link>
                    </div>
                </div>
            </div>

            {/* ২. Featured Animals Section */}
            <section>
                <h2 className="text-4xl font-bold text-center mb-10 text-white border-b-2 border-primary pb-2 inline-block mx-auto flex justify-center w-max">
                    Featured Animals
                </h2>
                
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredAnimals.map(animal => (
                            <div key={animal.id} className="card glass-effect border border-white/5 shadow-xl hover:scale-105 transition-transform duration-300">
                                <figure className="px-4 pt-4">
                                    <img src={animal.image} alt={animal.name} className="rounded-xl h-48 w-full object-cover" />
                                </figure>
                                <div className="card-body items-center text-center p-5">
                                    <h2 className="card-title text-white">{animal.name}</h2>
                                    <p className="text-gray-400 text-sm">Breed: {animal.breed}</p>
                                    <p className="text-2xl font-bold text-primary my-2">৳ {animal.price.toLocaleString()}</p>
                                    <div className="card-actions w-full mt-2">
                                        <Link to={`/animals`} className="btn btn-outline btn-primary w-full border-primary/50 hover:shadow-[0_0_15px_rgba(109,40,217,0.4)]">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* ৩. Extra Section 1: Qurbani Tips */}
            <section className="glass-effect rounded-3xl p-10 border border-white/10">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Essential Qurbani Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">1</div>
                        <h3 className="text-xl font-bold text-white mb-2">Check Health</h3>
                        <p className="text-gray-400 text-sm">Ensure the animal is active, eats well, and has no visible injuries or diseases.</p>
                    </div>
                    <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">2</div>
                        <h3 className="text-xl font-bold text-white mb-2">Verify Age</h3>
                        <p className="text-gray-400 text-sm">Cows must be at least 2 years old, and goats at least 1 year old for a valid Qurbani.</p>
                    </div>
                    <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">3</div>
                        <h3 className="text-xl font-bold text-white mb-2">Proper Feed</h3>
                        <p className="text-gray-400 text-sm">Feed the animal fresh grass and natural food instead of artificial fattening items.</p>
                    </div>
                </div>
            </section>

            {/* ৪. Extra Section 2: Top Breeds */}
            <section className="mb-10 text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Popular Breeds You'll Find</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="badge badge-outline border-primary text-primary badge-lg p-5 text-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">Deshi Shahi</span>
                    <span className="badge badge-outline border-primary text-primary badge-lg p-5 text-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">Brahman Cross</span>
                    <span className="badge badge-outline border-primary text-primary badge-lg p-5 text-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">Black Bengal Goat</span>
                    <span className="badge badge-outline border-primary text-primary badge-lg p-5 text-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">MirKadim White</span>
                </div>
            </section>
            
        </div>
    );
};

export default Home;