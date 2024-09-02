import { useState, useEffect } from 'react';

const useStudentAuth = () => {
    const [isStudent, setIsStudent] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setIsStudent(role === 'student');
    }, []);

    return isStudent;
};

export default useStudentAuth;