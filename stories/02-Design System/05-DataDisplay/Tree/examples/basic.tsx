import React from 'react';
import {KitTree} from '@kit/DataDisplay';

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1'
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0'
                    },
                    {
                        title: 'leaf',
                        key: '0-0-1-1'
                    }
                ]
            }
        ]
    }
];

const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
};

const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
};

const App = () => {
    return (
        <div style={{width: '300px'}}>
            <KitTree
                draggable
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={treeData}
            />
        </div>
    );
};

export default App;
