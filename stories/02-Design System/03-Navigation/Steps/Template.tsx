import React, {useState} from 'react';
import {KitSteps} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitSteps} from '@kit/Navigation/Steps/types';

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
