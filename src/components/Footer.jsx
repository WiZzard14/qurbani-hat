import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 glass-effect text-neutral-content border-t border-white/10 mt-10">
            <aside>
                <h2 className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                    QurbaniHat
                </h2>
                <p className="max-w-xs text-gray-400">
                    A modern livestock marketplace.<br/>
                    Explore, book, and buy healthy animals for your Qurbani easily.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-white">Contact Info</h6>
                <p className="text-gray-400">Phone: +880 1700 000000</p>
                <p className="text-gray-400">Email: support@qurbanihat.com</p>
                <p className="text-gray-400">Location: Dhaka, Bangladesh</p>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Social Links</h6>
                <div className="flex gap-4 text-2xl">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors cursor-pointer"><FaFacebook /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors cursor-pointer"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors cursor-pointer"><FaInstagram /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;