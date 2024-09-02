import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const isLoggedIn = await login(username, password);
            if (!isLoggedIn) {
                throw new Error("Noto'g'ri foydalanuvchi nomi yoki parol");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            switch(user.role) {
                case 'admin':
                    navigate('/admin');
                    break;
                case 'teacher':
                    navigate('/teacher');
                    break;
                case 'student':
                    navigate('/student');
                    break;
                default:
                    navigate('/dashboard');
            }
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <form onSubmit={handleSubmit} className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-2 p-2 border rounded bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-2 p-2 border rounded bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                />
                <button type="submit" className="w-full bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-light p-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
