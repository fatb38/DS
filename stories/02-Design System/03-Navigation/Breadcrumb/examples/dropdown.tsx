import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {KitTypography} from '@kit/General';
import {IKitBreadcrumbItem, IKitBreadcrumbMenuItem} from '@kit/Navigation/Breadcrumb/types';

const menuItems: IKitBreadcrumbMenuItem[] = [
    {
        key: '1',
        label: (
            <KitTypography.Link target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                General
            </KitTypography.Link>
        )
    },
    {
        key: '2',
        label: (
            <KitTypography.Link target="_blank" rel="noopener noreferrer" href="#">
                Layout
            </KitTypography.Link>
        )
    },
    {
        key: '3',
        label: (
            <KitTypography.Link target="_blank" rel="noopener noreferrer" href="#">
                Navigation
            </KitTypography.Link>
        )
    }
];

const items: IKitBreadcrumbItem[] = [
    {
        title: 'Aristid Design'
    },
    {
        title: <a href="">Component</a>
    },
    {
        title: <a href="">General</a>,
        menu: {items: menuItems}
    },
    {
        title: 'Button'
    }
];

const App = () => <KitBreadcrumb items={items} />;

export default App;
