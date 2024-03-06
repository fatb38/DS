import React, {FunctionComponent} from 'react';
import {KitTree} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';

export const BasicTreeTest: FunctionComponent = () => {
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

    return (
        <div>
            <KitTypography.Title level="h3">Basic tree</KitTypography.Title>
            <KitTree
                draggable
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                treeData={treeData}
            />
        </div>
    );
};
