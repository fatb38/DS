import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {IKitBreadcrumbItem} from '@kit/Navigation/Breadcrumb/types';

const items: IKitBreadcrumbItem[] = [
    {
        href: '',
        icon: <FontAwesomeIcon icon={faHouse} />
    },
    {
        href: '',
        title: 'Application List',
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        title: 'Application'
    }
];

const App = () => {
    return <KitBreadcrumb items={items} />;
};

export default App;
