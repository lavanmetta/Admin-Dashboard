import { lazy } from 'react';
import withAuth from './Auth';
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
        
       
    ]
};

export default MainRoutes;