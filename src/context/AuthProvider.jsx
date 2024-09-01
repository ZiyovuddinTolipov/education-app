/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log('Environment variables:', {
        adminUsername: import.meta.env.VITE_ADMIN_USERNAME,
        adminPassword: import.meta.env.VITE_ADMIN_PASSWORD,
        teacherUsername: import.meta.env.VITE_TEACHER_USERNAME,
        teacherPassword: import.meta.env.VITE_TEACHER_PASSWORD,
        studentUsername: import.meta.env.VITE_STUDENT_USERNAME,
        studentPassword: import.meta.env.VITE_STUDENT_PASSWORD,
    });

    const login = (username, password) => {
        try {
            if (username === import.meta.env.VITE_ADMIN_USERNAME && password === import.meta.env.VITE_ADMIN_PASSWORD) {
                setUser({ username, role: 'admin' });
                console.log('User set as admin:', { username, role: 'admin' });
            } else if (username === import.meta.env.VITE_TEACHER_USERNAME && password === import.meta.env.VITE_TEACHER_PASSWORD) {
                setUser({ username, role: 'teacher' });
                console.log('User set as teacher:', { username, role: 'teacher' });
            } else if (username === import.meta.env.VITE_STUDENT_USERNAME && password === import.meta.env.VITE_STUDENT_PASSWORD) {
                setUser({ username, role: 'student' });
                console.log('User set as student:', { username, role: 'student' });
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error.message);
            throw error; // Re-throw the error to be caught in the Login component
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
