import { createContext, useState, useContext } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [student, setStudent] = useState(null);

    const login = (username, password) => {
        // Student login logic
    };

    const logout = () => {
        setStudent(null);
    };

    return (
        <StudentContext.Provider value={{ student, login, logout }}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudent = () => useContext(StudentContext);