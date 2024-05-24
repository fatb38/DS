import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {IKitBreadcrumbItem} from '@kit/Navigation/Breadcrumb/types';

const items: IKitBreadcrumbItem[] = [
    {
        title: 'Location'
    },
    {
        type: 'separator',
        separator: ':'
    },
    {
        href: '',
        title: 'Application Center'
    },
    {
        type: 'separator'
    },
    {
        href: '',
        title: 'Application List'
    },
    {
        type: 'separator'
    },
    {
        title: 'An Application'
    }
];

const App = () => <KitBreadcrumb separator="" items={items} />;

export default App;
