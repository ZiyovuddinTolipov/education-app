import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import ApiService from '@/services/ApiService'; // Import ApiService
import toast from 'react-hot-toast';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use ApiService to handle login
            const res = await ApiService.signin(username, password); // Call the signin method
            console.log(res)
            !res.token && toast.error('Login yoki parol xato.Qaytadan urining!')
            res.token && toast.success('Hisobga kirildi!')
            await login(username, password);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            const from = location.state?.from?.pathname || `/${user.role}`;
            navigate(from, { replace: true });
        }
    }, [user, navigate, location]);

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
