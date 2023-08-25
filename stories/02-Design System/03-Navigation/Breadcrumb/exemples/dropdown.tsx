import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {KitTypography} from '@kit/General';

const menuItems = [
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

const items = [
    {
        title: 'Aristid Design'
    },
    {
        title: <a href="">Component</a>
    },
    {
        title: <a href="">General</a>,
        menu: {items: menuItems, open: true}
    },
    {
        title: 'Button'
    }
];

const App = () => {
    return <KitBreadcrumb items={items} />;
};

export default App;
