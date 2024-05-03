import {KitTree} from '@kit/DataDisplay';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarCheck, faFile, faFolder, faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import {IEditorTemplate} from '../../../types';
import {IKitTree} from '@kit/DataDisplay/Tree/types';

const basicData = [
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

const iconData = [
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

const lineData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: (
                            <>
                                <div>multiple line title</div>
                                <div>multiple line title</div>
                            </>
                        ),
                        key: '0-0-0-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-2',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-2-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                        switcherIcon: <FontAwesomeIcon icon={faPenToSquare} />
                    }
                ]
            }
        ]
    },
    {
        title: 'parent 2',
        key: '0-1',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-1-0-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-1-0-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            }
        ]
    }
];

const lineSelectData = [
    {
        value: 'true',
        label: 'True'
    },
    {
        value: 'false',
        label: 'False'
    },
    {
        value: 'custom',
        label: 'Custom icon'
    }
];

const mockData = {
    data: {
        basic: basicData,
        basicDefaultKeys: ['0-0-0', '0-0-1'],
        icon: iconData,
        line: lineData,
        lineSelect: lineSelectData
    }
};

export const Template = (args: IKitTree) => <KitTree {...args} treeData={mockData.data.line} />;

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: (
                            <>
                                <div>multiple line title</div>
                                <div>multiple line title</div>
                            </>
                        ),
                        key: '0-0-0-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-2',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-2-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                        switcherIcon: <FontAwesomeIcon icon={faPenToSquare} />
                    }
                ]
            }
        ]
    },
    {
        title: 'parent 2',
        key: '0-1',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-1-0-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-1-0-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            }
        ]
    }
];

export const EditorTemplate: IEditorTemplate = () => (
        <div style={{width: '300px'}}>
            <KitTree showLine={true} defaultExpandAll treeData={treeData} />
        </div>
    );
EditorTemplate.path = 'components.Tree';
EditorTemplate.title = 'Tree';
