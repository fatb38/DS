import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';

const items = [
    {
        title: 'Home'
    },
    {
        title: 'Application Center',
        href: ''
    },
    {
        title: 'Application List',
        href: ''
    },
    {
        title: 'An Application'
    }
];

const App = () => {
    return <KitBreadcrumb separator=">" items={items} />;
};

export default App;
