import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { user, isLoading } = useAuth();
    const { children } = props;
    const location = useLocation();
    if (isLoading) {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return user?.email ? children : <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;