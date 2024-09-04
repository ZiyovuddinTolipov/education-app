import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeProvider';
import { AuthProvider } from './context/AuthProvider';
import AppRoutes from './routes/Routes';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <main className="bg-white dark:bg-gray-900 min-h-screen">
                    <Toaster position="top-right" reverseOrder={false} />
                    <AppRoutes />
                </main>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;