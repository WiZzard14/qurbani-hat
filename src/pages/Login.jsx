import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { HiMail, HiLockClosed } from 'react-icons/hi';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("Welcome Back!");
                navigate(from, { replace: true });
            })
            .catch(() => toast.error("Invalid credentials. Please try again."));
    };

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 animate__animated animate__fadeIn">
            <div className="w-full max-w-md glass-effect p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full"></div>
                
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl font-black text-white mb-2">Login <span className="text-primary">Now</span></h2>
                    <p className="text-gray-400 mb-8">Access the premium livestock marketplace</p>

                    <form onSubmit={handleLogin} className="space-y-5 text-left">
                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 ml-1">Email Address</label>
                            <div className="relative">
                                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="your@email.com" 
                                    className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary focus:outline-none transition-all duration-300" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 ml-1">Password</label>
                            <div className="relative">
                                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="••••••••" 
                                    className="input input-bordered w-full pl-12 bg-white/5 border-white/10 focus:border-primary focus:outline-none transition-all duration-300" 
                                    required 
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary w-full text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/40 border-none hover:scale-[1.02] active:scale-95 transition-all">
                            Sign In
                        </button>
                    </form>

                    <div className="divider text-gray-600 my-8 text-sm">OR CONTINUE WITH</div>

                    <button 
                        onClick={() => googleSignIn().then(() => navigate(from))} 
                        className="btn btn-outline border-white/10 text-white w-full rounded-xl hover:bg-white/10 hover:border-white/20 gap-3 normal-case font-medium"
                    >
                        <FcGoogle className="text-2xl" /> Login with Google
                    </button>

                    <p className="mt-8 text-gray-400">
                        New here? <Link to="/register" className="text-primary font-bold hover:underline">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;