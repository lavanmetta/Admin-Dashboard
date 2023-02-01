// assets
import { IconTypography, IconPalette, IconUsers, IconLocation } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconUsers,
    IconLocation
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'icons',
            title: 'Location',
            type: 'collapse',
            icon: icons.IconLocation,
            children: [
                {
                    id: 'locations',
                    title: 'Locations',
                    type: 'item',
                    url: '/locations',
                    breadcrumbs: false
                },
                {
                    id: 'add-location',
                    title: 'Add Location',
                    url: '/add-location',
                    type: 'item',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'users',
            title: 'Users',
            url: '/users',
            type: 'item',
            
            icon: icons.IconUsers,
            breadcrumbs: false
        },
    ]
};

export default utilities;
