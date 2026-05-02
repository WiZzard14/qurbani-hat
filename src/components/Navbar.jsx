import { Link } from 'react-router-dom';
import { GiCow } from 'react-icons/gi';

const Navbar = () => {
    const user = null;

    return (
        <div className="navbar glass-effect sticky top-0 z-50 px-4 lg:px-8 border-b border-white/10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0D0D0D] border border-white/10 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/animals">All Animals</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold flex gap-2 items-center text-primary">
                    <GiCow className="text-2xl" /> QurbaniHat
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-300">
                    <li><Link className="hover:text-primary" to="/">Home</Link></li>
                    <li><Link className="hover:text-primary" to="/animals">All Animals</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-primary">
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar" src="https://i.pravatar.cc/150?img=3" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#0D0D0D] border border-white/10 rounded-box w-52">
                            <li><Link to="/my-profile">Profile</Link></li>
                            <li><button className="text-error font-bold hover:bg-error/20">Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-outline btn-primary btn-sm md:btn-md hidden sm:inline-flex">Login</Link>
                        <Link to="/register" className="btn btn-primary btn-sm md:btn-md text-white shadow-lg shadow-primary/30 border-none">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;