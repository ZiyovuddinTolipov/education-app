import AppRoutes from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <main className="bg-white dark:bg-gray-900 min-h-screen">
                <Toaster position="top-right" reverseOrder={false} />
                <AppRoutes />
            </main>
        </ThemeProvider>
    );
}

export default App;