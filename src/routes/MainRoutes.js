import { lazy } from 'react';
import withAuth from './Auth';
import withAdminAuth from './AdminAuth';
// project imports

import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = withAuth(Loadable(lazy(() => import('views/dashboard/Default'))));
const MainLayout = withAuth(Loadable(lazy(() => import('../layout/MainLayout/index'))));

// utilities routing
const AddLocation = withAuth(Loadable(lazy(() => import('views/utilities/AddLocation'))));
const Locations = withAuth(Loadable(lazy(() => import('views/utilities/Locations'))));
const Users = withAuth(Loadable(lazy(() => import('views/utilities/Users'))));
const ProfileAcc = withAuth(Loadable(lazy(() => import('views/utilities/ProfileAcc'))));
const Admin = withAdminAuth(Loadable(lazy(() => import('views/utilities/Admin.js'))));
// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    

    path: '',
    element: <MainLayout />,
    children: [
       
        {
            path: '',
            children: [
                {
                    path: 'dashboard',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'add-location',
                    element: <AddLocation />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'locations',
                    element: <Locations />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'users',
                    element: <Users />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'profile-manage',
                    element: <ProfileAcc />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'admin',
                    element: <Admin />
                }
            ]
        },
        
       
    ]
};

export default MainRoutes;