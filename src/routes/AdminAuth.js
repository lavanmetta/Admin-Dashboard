import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const withAdminAuth = (Component) => {
    return (props) => {
        const role = Cookies.get('role');
        if (role !== 'admin') {
            return <Navigate to="/login" />;
        }
        return <Component {...props} />;
    };
};

export default withAdminAuth;
