import type {Meta, StoryObj} from '@storybook/react';
import {KitTree} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile, faFolder} from '@fortawesome/free-regular-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {Template} from './Template';

const meta: Meta<typeof KitTree> = {
    component: KitTree,
    title: 'Design System/DataDisplay/Tree',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTree>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => {
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
            <KitTree
                draggable
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                treeData={treeData}
            />
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const CustomIcon: Story = {
    render: () => {
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
            <KitTree
                checkable
                showIcon
                switcherIcon={<FontAwesomeIcon icon={faAngleDown} />}
                treeData={treeData}
                defaultExpandAll
            />
        );
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Line: Story = {
    render: () => {
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
        return <KitTree showLine showIcon treeData={treeData} defaultExpandAll />;
    },

    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
