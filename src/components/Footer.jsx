import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="glass-effect border-t border-white/10 pt-16 pb-8 px-4 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <GiCow className="text-4xl text-primary" />
                            <span className="text-3xl font-black text-white tracking-tighter">
                                Qurbani<span className="text-primary">Hat</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            The most trusted digital marketplace for healthy and premium livestock. Experience a seamless Qurbani journey with us.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Explore</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home Feed</Link></li>
                            <li><Link to="/animals" className="hover:text-primary transition-colors">All Animals</Link></li>
                            <li><Link to="/my-profile" className="hover:text-primary transition-colors">User Profile</Link></li>
                            <li><Link to="/register" className="hover:text-primary transition-colors">Join Marketplace</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Support</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <FaPhoneAlt className="text-primary" /> 
                                <span>+880 1708317655</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <FaEnvelope className="text-primary" /> 
                                <span>support@qurbanihat.com</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <FaMapMarkerAlt className="text-primary" /> 
                                <span>Rajshahi, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Follow Our Journey</h4>
                        <p className="text-gray-400 text-sm mb-4">Stay updated with our latest stock arrivals.</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 text-center">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} QurbaniHat - All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;