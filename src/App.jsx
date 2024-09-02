import AppRoutes from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeProvider';
import { AuthProvider } from './context/AuthProvider';
import { AdminProvider } from './context/AdminProvider';
import { TeacherProvider } from './context/TeacherProvider';
import { StudentProvider } from './context/StudentProvider';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <AdminProvider>
                    <TeacherProvider>
                        <StudentProvider>
                            <main className="bg-white dark:bg-gray-900 min-h-screen">
                                <Toaster position="top-right" reverseOrder={false} />
                                <AppRoutes />
                            </main>
                        </StudentProvider>
                    </TeacherProvider>
                </AdminProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;