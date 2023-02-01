import { lazy } from 'react';
// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const Forgot3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Forgot3')));
const ForgotPasswordM = Loadable(lazy(() => import('views/utilities/ForgotPasswordM')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {

    

    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <AuthLogin3 />
        },
        {
            path: '/register',
            element: <AuthRegister3 />
        },
        {
            path: '/forgot-password',
            element: <Forgot3 />
        },
        {
            path: `/forgot`,
            element: <ForgotPasswordM/>
        }
    ]
};

export default AuthenticationRoutes;