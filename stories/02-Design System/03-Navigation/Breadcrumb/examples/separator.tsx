import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {IKitBreadcrumbItem} from '@kit/Navigation/Breadcrumb/types';

const items: IKitBreadcrumbItem[] = [
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

const App = () => <KitBreadcrumb separator=">" items={items} />;

export default App;
