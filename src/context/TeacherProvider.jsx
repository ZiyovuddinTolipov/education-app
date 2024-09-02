import { createContext, useState, useContext } from 'react';

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null);

    const login = (username, password) => {
        // Teacher login logic
    };

    const logout = () => {
        setTeacher(null);
    };

    return (
        <TeacherContext.Provider value={{ teacher, login, logout }}>
            {children}
        </TeacherContext.Provider>
    );
};

export const useTeacher = () => useContext(TeacherContext);