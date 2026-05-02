import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
            <Helmet>
                <title>QurbaniHat | Error</title>
            </Helmet>
            <div className="glass-effect p-10 md:p-16 rounded-[2rem] border border-white/10 text-center shadow-2xl max-w-lg w-full relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
                
                <div className="relative z-10">
                    <h1 className="text-9xl font-black text-primary mb-2 drop-shadow-[0_0_15px_rgba(109,40,217,0.5)]">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-400 mb-8 text-sm md:text-base">
                        Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
                    </p>
                    <Link 
                        to="/" 
                        className="btn btn-primary text-white border-none shadow-lg shadow-primary/30 rounded-xl px-8 hover:scale-105 transition-transform"
                    >
                        Go back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;