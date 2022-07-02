import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const {user} = useAuth();
    const {children} = props;
    const location = useLocation();
    return user?.email? children : <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;