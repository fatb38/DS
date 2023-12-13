/* eslint-disable react-refresh/only-export-components */
import React, {useState} from 'react';
import {KitSteps} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitSteps} from '@kit/Navigation/Steps/types';

const direction = ['horizontal', 'vertical'];

const status = ['process', 'wait', 'finish', 'error'];

export const argTypes = {
    current: {
        name: 'current',
        description:
            'To set the current step, counting from 0. You can overwrite this state by using `status` of `Step`',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 0
            },
            category: 'Steps'
        }
    },
    direction: {
        name: 'direction',
        description:
            'To set the current step, counting from 0. You can overwrite this state by using `status` of `Step`',
        options: direction,
        control: {
            type: 'select',
            defaultValue: 'horizontal'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'horizontal'
            },
            category: 'Steps'
        }
    },
    initial: {
        name: 'initial',
        description: 'Set the initial step, counting from 0',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 0
            },
            category: 'Steps'
        }
    },
    status: {
        name: 'status',
        description:
            'To specify the status of current step, can be set to one of the following values: `wait` `process` `finish` `error`',
        options: status,
        control: {
            type: 'select',
            defaultValue: 'process'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'process'
            },
            category: 'Steps'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Trigger when Step is changed',
        table: {
            type: {
                summary: '(current) => void'
            },
            category: 'Steps'
        }
    },
    items: {
        name: 'items',
        description: 'StepItem content',
        table: {
            type: {
                summary: 'StepItem'
            },
            defaultValue: {
                summary: '[]'
            },
            category: 'Steps'
        }
    },
    itemDescription: {
        name: 'description',
        description: 'Description of the step, optional property',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Steps',
            subcategory: 'StepItem'
        }
    },
    itemDisabled: {
        name: 'disabled',
        description: 'Disable click',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Steps',
            subcategory: 'StepItem'
        }
    },
    itemStatus: {
        name: 'status',
        description:
            'To specify the status. It will be automatically set by current of Steps if not configured. Optional values are: `wait` `process` `finish` `error`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'wait'
            },
            category: 'Steps',
            subcategory: 'StepItem'
        }
    },
    itemTitle: {
        name: 'title',
        description: 'Title of the step',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Steps',
            subcategory: 'StepItem'
        }
    }
};

export const Template = (args: IKitSteps) => {
    const {...props} = args;
    return (
        <KitSteps
            items={[
                {
                    title: 'Step 1',
                    description: 'This is a description'
                },
                {
                    title: 'Step 2',
                    description: 'This is a description'
                },
                {
                    title: 'Step 3',
                    description: 'This is a description'
                }
            ]}
            {...props}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => {
        setCurrent(value);
    };

    const items = [
        {
            title: 'Finished',
            description: 'This is a description'
        },
        {
            title: 'In Progress',
            description: 'This is a description'
        },
        {
            title: 'Waiting',
            description: 'This is a description'
        }
    ];

    return (
        <KitSpace direction="vertical" size="m">
            <KitSteps current={1} items={items} />
            <KitSteps current={current} onChange={onChange} items={items} />
            <KitSteps current={1} status="error" items={items} />
            <KitSteps current={1} direction="vertical" items={items} />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Steps';
EditorTemplate.title = 'Steps';
