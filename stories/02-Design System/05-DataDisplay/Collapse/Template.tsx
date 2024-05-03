import {KitCollapse} from '@kit/DataDisplay/';
import {IKitCollapse} from '@kit/DataDisplay/Collapse/types';
import React from 'react';
import {IEditorTemplate} from 'stories/types';

export const Template = (args: IKitCollapse) => (
        <KitCollapse
            {...args}
            items={[
                {
                    key: '1',
                    label: 'This is panel header 1',
                    children:
                        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'
                },
                {
                    key: '2',
                    label: 'This is panel header 2',
                    children:
                        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'
                },
                {
                    key: '3',
                    label: 'This is panel header 3',
                    children:
                        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'
                }
            ]}
        />
    );

const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>
    }
];

export const EditorTemplate: IEditorTemplate = () => (
        <div style={{width: '100%'}}>
            <KitCollapse items={items} defaultActiveKey={1} />
        </div>
    );
EditorTemplate.path = 'components.Collapse';
EditorTemplate.title = 'Collapse';
