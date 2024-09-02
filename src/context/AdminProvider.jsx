import { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);

    const login = (username, password) => {
        // Admin login logic
    };

    const logout = () => {
        setAdmin(null);
    };

    return (
        <AdminContext.Provider value={{ admin, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);