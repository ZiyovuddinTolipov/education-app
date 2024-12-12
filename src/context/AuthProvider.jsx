/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        const token = localStorage.getItem('token');
        
        if (storedRole && token) {
            setUser({ 
                role: storedRole,
                token: token 
            });
        }
    }, []); 

    const login = async (username, password) => {
        // This method is now mostly handled by ApiService in Login component
        // We'll keep it for potential future use or consistency
        const storedRole = localStorage.getItem('userRole');
        const token = localStorage.getItem('token');

        if (storedRole && token) {
            setUser({ 
                role: storedRole,
                token: token 
            });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userRole');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
