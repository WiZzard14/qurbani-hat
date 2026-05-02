import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import { GiCow } from 'react-icons/gi';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch(error => toast.error(error.message));
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary rounded-none" : "hover:text-primary transition-colors"}>Home</NavLink></li>
            <li><NavLink to="/animals" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary rounded-none" : "hover:text-primary transition-colors"}>All Animals</NavLink></li>
            {user && <li><NavLink to="/my-profile" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary rounded-none" : "hover:text-primary transition-colors"}>My Profile</NavLink></li>}
            {user && <li><NavLink to="/my-orders" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary rounded-none" : "hover:text-primary transition-colors"}>My Orders</NavLink></li>}
        </>
    );

    return (
        <div className="navbar glass-effect sticky top-0 z-50 px-4 lg:px-12 py-3 border-b border-white/10 backdrop-blur-md overflow-visible">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-[#121212] border border-white/10 rounded-2xl w-52 space-y-2">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 group transition-transform active:scale-95">
                    <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-colors">
                        <GiCow className="text-3xl text-primary" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">
                        Qurbani<span className="text-primary">Hat</span>
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-[15px] font-medium text-gray-400">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="relative group flex flex-col items-center">
                            <div className="avatar cursor-pointer online border-2 border-primary/30 p-0.5 rounded-full hover:border-primary transition-all">
                                <div className="w-10 md:w-11 rounded-full shadow-inner">
                                    <img 
                                        src={user?.photoURL || "https://i.ibb.co/5GzXnKy/user.png"} 
                                        alt="Profile" 
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-14 hidden group-hover:block z-[999] animate__animated animate__fadeIn">
                                <div className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap relative">
                                    {user?.displayName || "User Profile"}
                                    
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rotate-45"></div>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handleLogOut}
                            className="btn btn-outline btn-primary btn-sm md:btn-md rounded-xl hover:shadow-[0_0_15px_rgba(109,40,217,0.4)]"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-2 md:gap-4">
                        <Link to="/login" className="btn btn-ghost btn-sm md:btn-md text-white hover:bg-white/5 rounded-xl">Login</Link>
                        <Link to="/register" className="btn btn-primary btn-sm md:btn-md text-white shadow-lg shadow-primary/30 border-none rounded-xl">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;