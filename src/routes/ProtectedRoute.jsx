import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';

const ProtectedRoute = ({ children, roles = ['admin', 'teacher', 'student'] }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (roles?.length && !roles.includes(user?.role)) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string)
};

export default ProtectedRoute;
