import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="font-sans text-white min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 min-h-[calc(100vh-250px)]">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;