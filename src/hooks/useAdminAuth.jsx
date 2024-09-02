import { useState, useEffect } from 'react';

const useAdminAuth = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setIsAdmin(role === 'admin');
    }, []);

    return isAdmin;
};

export default useAdminAuth;