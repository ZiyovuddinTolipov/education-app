/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        if (storedRole) {
            setUser({ role: storedRole });
        }
    }, []); // Bo'sh dependency array

    const login = async (username, password) => {
        console.log(username,password)
        let role = 'admin';
        if (username === import.meta.env.VITE_ADMIN_USERNAME && password === import.meta.env.VITE_ADMIN_PASSWORD) {
            console.log("admin")
            role = 'admin';
        } else if (username === import.meta.env.VITE_TEACHER_USERNAME && password === import.meta.env.VITE_TEACHER_PASSWORD) {
            console.log("teacher")
            role = 'teacher';
        } else if (username === import.meta.env.VITE_STUDENT_USERNAME && password === import.meta.env.VITE_STUDENT_PASSWORD) {
            role = 'student';
        }
        console.log(username,password)
        if (role) {
            setUser({ role });
            localStorage.setItem('userRole', role);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userRole');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
