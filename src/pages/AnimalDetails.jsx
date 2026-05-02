import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";
import { HiUser, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';

const AnimalDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(a => a.id === parseInt(id));
                setAnimal(found);
            });
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        const phone = e.target.phone?.value || "N/A";
        const address = e.target.address?.value || "N/A";

        const orderData = {
            orderId: new Date().getTime().toString(), // ইউনিক আইডি
            animalId: animal.id,
            animalName: animal.name,
            price: animal.price,
            image: animal.image,
            buyerEmail: user?.email,
            phone: phone,
            address: address,
            date: new Date().toLocaleDateString()
        };

        const existingOrders = JSON.parse(localStorage.getItem('qurbaniOrders')) || [];
        
        existingOrders.push(orderData);
        localStorage.setItem('qurbaniOrders', JSON.stringify(existingOrders));

        toast.success("Animal Booked Successfully!");
        e.target.reset(); 
    };

    if (!animal) return <div className="text-center py-20"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="py-10 animate__animated animate__fadeIn px-4 lg:px-0">
            <Helmet>
                <title>QurbaniHat | {animal.name}</title>
            </Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 glass-effect p-8 rounded-[2rem] border border-white/10 shadow-2xl">
                
                <div className="space-y-6">
                    <div className="relative group">
                        <img src={animal.image} alt={animal.name} className="rounded-3xl w-full h-[450px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]" />
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white font-bold">
                            Available Now
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-5xl font-black text-white">{animal.name}</h2>
                        <p className="text-primary font-medium tracking-widest uppercase text-sm">Premium Selection</p>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">{animal.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Breed</p>
                            <p className="text-white font-bold">{animal.breed}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Age</p>
                            <p className="text-white font-bold">{animal.age} years</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Weight</p>
                            <p className="text-white font-bold">{animal.weight} kg</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Location</p>
                            <p className="text-white font-bold">{animal.location}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4">
                        <span className="text-5xl font-black text-primary">৳ {animal.price.toLocaleString()}</span>
                        <span className="text-gray-500 line-through text-xl">৳ {(animal.price + 5000).toLocaleString()}</span>
                    </div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-inner relative overflow-hidden">
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 blur-[60px] rounded-full"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-2">Booking Info</h3>
                        <p className="text-gray-500 mb-8 text-sm">Please fill out your details to confirm the animal.</p>
                        
                        <form onSubmit={handleBooking} className="space-y-5">
                            <div className="form-control">
                                <label className="label-text text-gray-400 mb-2 ml-1">Buyer Name</label>
                                <div className="relative">
                                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                    <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary text-white" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label-text text-gray-400 mb-2 ml-1">Email Address</label>
                                <div className="relative">
                                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                    <input type="email" defaultValue={user?.email} className="input input-bordered w-full pl-12 bg-white/10 border-white/10 text-gray-400 cursor-not-allowed" readOnly />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label-text text-gray-400 mb-2 ml-1">Phone Number</label>
                                <div className="relative">
                                    <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                    <input type="text" name="phone" placeholder="e.g. +880 1XXX-XXXXXX" className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary text-white" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label-text text-gray-400 mb-2 ml-1">Full Delivery Address</label>
                                <div className="relative">
                                    <HiLocationMarker className="absolute left-4 top-4 text-gray-500 text-xl" />
                                    <textarea name="address" placeholder="House, Road, Area..." className="textarea textarea-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary text-white h-24" required></textarea>
                                </div>
                            </div>

                            <button className="btn btn-primary w-full h-14 text-lg font-bold text-white border-none shadow-xl shadow-primary/30 mt-4 hover:scale-[1.02] active:scale-95 transition-all">
                                Confirm Your Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetails;