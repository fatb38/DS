import React from 'react';
import {KitBreadcrumb} from '@kit/Navigation';
import {HomeOutlined, UserOutlined} from '@ant-design/icons';

const items = [
    {
        href: '',
        title: <HomeOutlined />
    },
    {
        href: '',
        title: (
            <>
                <UserOutlined />
                <span>Application List</span>
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
