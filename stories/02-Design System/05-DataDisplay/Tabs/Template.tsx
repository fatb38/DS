import React from 'react';
import {KitTabs} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitTabs} from '@kit/DataDisplay/Tabs/types';

export const Template = (args: IKitTabs) => {
    const items = [
        {
            key: '1',
            label: `Tab 1`,
            children: `Content of Tab Pane 1 (key 1)`
        },
        {
            key: '2',
            label: `Tab 2`,
            children: `Content of Tab Pane 2 (key 1)`
        },
        {
            key: '3',
            label: `Tab 3`,
            children: `Content of Tab Pane 3 (key 1)`
        }
    ];

    return <KitTabs {...args} items={items} />;
};

const items = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`
    },
    {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`
    }
];

export const EditorTemplate: IEditorTemplate = () => (
        <KitSpace direction="vertical">
            <KitTabs defaultActiveKey="1" items={items} />
            <KitTabs
                defaultActiveKey="1"
                items={[
                    {
                        label: 'Tab 1',
                        key: '1',
                        children: 'Tab 1'
                    },
                    {
                        label: 'Tab 2',
                        key: '2',
                        children: 'Tab 2',
                        disabled: true
                    },
                    {
                        label: 'Tab 3',
                        key: '3',
                        children: 'Tab 3'
                    }
                ]}
            />
            <KitTabs type="editable-card" activeKey="1" items={items} />
        </KitSpace>
    );
EditorTemplate.path = 'components.Tabs';
EditorTemplate.title = 'Tabs';
