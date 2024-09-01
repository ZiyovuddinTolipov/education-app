import AppRoutes from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeProvider';
import { AuthProvider } from './context/AuthProvider';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <main className="bg-white dark:bg-gray-900 min-h-screen">
                    <Toaster position="top-right" reverseOrder={false} />
                    <AppRoutes />
                </main>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;