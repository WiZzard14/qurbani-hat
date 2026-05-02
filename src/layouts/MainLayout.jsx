import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {}
            <nav className="p-4 text-center bg-default-50 border-b border-divider sticky top-0 z-50">Navbar Placeholder</nav>
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>

            {}
            <footer className="p-4 text-center bg-default-50 border-t border-divider">Footer Placeholder</footer>
        </div>
    );
};

export default MainLayout;