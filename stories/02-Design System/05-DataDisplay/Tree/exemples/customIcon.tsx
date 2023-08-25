import React from 'react';
import {KitTree} from '@kit/DataDisplay';
import {FileOutlined, FolderOutlined} from '@ant-design/icons';

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <FolderOutlined />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <FolderOutlined />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <FileOutlined />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                        icon: <FileOutlined />
                    }
                ]
            }
        ]
    }
];

const App = () => {
    return (
        <div style={{width: '300px'}}>
            <KitTree checkable showIcon treeData={treeData} defaultExpandAll />
        </div>
    );
};

export default App;
