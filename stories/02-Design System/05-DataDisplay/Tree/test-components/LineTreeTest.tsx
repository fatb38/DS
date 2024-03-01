import React, {FunctionComponent} from 'react';
import {KitTree} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile, faFolder} from '@fortawesome/free-regular-svg-icons';

export const LineTreeTest: FunctionComponent = () => {
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
            <KitTypography.Title level="h3">Line tree</KitTypography.Title>
            <KitTree showLine showIcon treeData={treeData} defaultExpandAll />
        </div>
    );
};
