import { useState, useEffect } from 'react';

const useTeacherAuth = () => {
    const [isTeacher, setIsTeacher] = useState(false);

    useEffect(() => {
        localStorage.setItem('userRole',"teacher")
        const role = localStorage.getItem('userRole');
        setIsTeacher(role === 'teacher');
    }, []);

    return isTeacher;
};

export default useTeacherAuth;