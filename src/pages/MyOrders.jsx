import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState(() => {
        const allOrders = JSON.parse(localStorage.getItem('qurbaniOrders')) || [];
        return allOrders.filter(order => order.buyerEmail === user?.email).reverse();
    });

    const handleCancel = (orderId) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            
            const remainingOrders = orders.filter(order => order.orderId !== orderId);
            setOrders(remainingOrders);

            const allOrders = JSON.parse(localStorage.getItem('qurbaniOrders')) || [];
            const updatedAllOrders = allOrders.filter(order => order.orderId !== orderId);
            localStorage.setItem('qurbaniOrders', JSON.stringify(updatedAllOrders));

            toast.success("Booking has been canceled successfully!");
        }
    };

    return (
        <div className="py-10 px-4 max-w-7xl mx-auto min-h-[60vh] animate__animated animate__fadeIn">
            <h2 className="text-4xl font-black text-white mb-8 border-b border-white/10 pb-4">
                My <span className="text-primary">Orders</span>
            </h2>

            {orders.length > 0 ? (
                <div className="overflow-x-auto glass-effect rounded-2xl border border-white/10">
                    <table className="table w-full text-left">
                        <thead className="bg-primary/20 text-white">
                            <tr>
                                <th>Animal</th>
                                <th>Booking Date</th>
                                <th>Delivery Address</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.orderId} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.image} alt={order.animalName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{order.animalName}</div>
                                                <div className="text-sm opacity-50 text-gray-400">ID: #{order.orderId.slice(-5)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-gray-300">{order.date}</td>
                                    <td className="text-gray-300 max-w-[200px] truncate" title={order.address}>
                                        {order.address}
                                        <div className="text-xs text-gray-500 mt-1">{order.phone}</div>
                                    </td>
                                    <td className="text-primary font-bold">৳ {order.price.toLocaleString()}</td>
                                    <td>
                                        <span className="badge badge-success badge-sm text-white bg-green-600 border-none">Confirmed</span>
                                    </td>
                                    <td className="text-center">
                                        <button 
                                            onClick={() => handleCancel(order.orderId)}
                                            className="px-4 py-2 rounded-xl text-sm font-bold bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] active:scale-95"
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-20 glass-effect rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-bold text-gray-400 mb-4">You haven't booked any animals yet.</h3>
                    <Link to="/animals" className="btn btn-primary text-white shadow-lg shadow-primary/30 border-none">Explore Animals</Link>
                </div>
            )}
        </div>
    );
};

export default MyOrders;