import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { HiUser, HiMail, HiLockClosed, HiPhotograph } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        toast.success("Account Created Successfully!");
                        navigate("/");
                    });
            })
            .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                toast.error("This email is already registered. Please login.");
            } else {
                toast.error(error.message);
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20 animate__animated animate__fadeIn">
            <Helmet>
                <title>QurbaniHat | Register</title>
            </Helmet>
            <div className="w-full max-w-md glass-effect p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>
                
                <div className="relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-black text-white mb-2">Create <span className="text-primary">Account</span></h2>
                        <p className="text-gray-400">Join the QurbaniHat community today</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 ml-1">Full Name</label>
                            <div className="relative">
                                <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                <input type="text" name="name" placeholder="WiZzard PH" className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary focus:outline-none" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 ml-1">Email Address</label>
                            <div className="relative">
                                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                <input type="email" name="email" placeholder="email@example.com" className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary focus:outline-none" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 ml-1">Photo URL</label>
                            <div className="relative">
                                <HiPhotograph className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                <input type="text" name="photo" placeholder="https://..." className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary focus:outline-none" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 ml-1">Password</label>
                            <div className="relative">
                                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                <input type="password" name="password" placeholder="••••••••" className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary focus:outline-none" required />
                            </div>
                        </div>

                        <button className="btn btn-primary w-full text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/40 border-none mt-4">
                            Register Now
                        </button>
                    </form>

                    <div className="divider text-gray-600 my-8 text-sm">OR SIGN UP WITH</div>

                    <button 
                        onClick={() => googleSignIn().then(() => navigate("/"))} 
                        className="btn btn-outline border-white/10 text-white w-full rounded-xl hover:bg-white/10 gap-3"
                    >
                        <FcGoogle className="text-2xl" /> Continue with Google
                    </button>

                    <p className="mt-8 text-center text-gray-400">
                        Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;