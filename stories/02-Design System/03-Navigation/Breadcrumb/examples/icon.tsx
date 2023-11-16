import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const items = [
    {
        href: '',
        title: <FontAwesomeIcon icon={faHouse} />
    },
    {
        href: '',
        title: (
            <>
                <FontAwesomeIcon icon={faUser} />
                <span style={{marginLeft: '6px'}}>Application List</span>
            </>
        )
    },
    {
        title: 'Application'
    }
];

const App = () => {
    return <KitBreadcrumb items={items} />;
};

export default App;
