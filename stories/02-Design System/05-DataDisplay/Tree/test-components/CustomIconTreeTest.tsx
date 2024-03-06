import React, {FunctionComponent} from 'react';
import {KitTree} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile, faFolder} from '@fortawesome/free-regular-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

export const CustomIconTreeTest: FunctionComponent = () => {
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            icon: <FontAwesomeIcon icon={faFolder} />,
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    icon: <FontAwesomeIcon icon={faFolder} />,
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-0-0',
                            icon: <FontAwesomeIcon icon={faFile} />
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-1',
                            icon: <FontAwesomeIcon icon={faFile} />
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div>
            <KitTypography.Title level="h3">Custom icon tree</KitTypography.Title>
            <KitTree
                checkable
                showIcon
                switcherIcon={<FontAwesomeIcon icon={faAngleDown} />}
                treeData={treeData}
                defaultExpandAll
            />
        </div>
    );
};
