/* eslint-disable react/prop-types */

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-500 text-white p-4">
                <h1>My App</h1>
            </header>
            <main className="flex-1 p-6">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; 2024 My Company
            </footer>
        </div>
    );
};

export default MainLayout;
