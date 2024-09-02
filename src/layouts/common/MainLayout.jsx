/* eslint-disable react/prop-types */

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <header className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark p-4">
                <h1>My App</h1>
            </header>
            <main className="flex-1 p-6">
                {children}
            </main>
            <footer className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark p-4 text-center">
                &copy; 2024 My Company
            </footer>
        </div>
    );
};

export default MainLayout;
