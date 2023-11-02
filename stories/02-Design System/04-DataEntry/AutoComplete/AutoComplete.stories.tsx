import type {Meta, StoryObj} from '@storybook/react';
import {KitAutoComplete} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';

const meta: Meta<typeof KitAutoComplete> = {
    component: KitAutoComplete,
    title: 'Design System/DataEntry/AutoComplete',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAutoComplete>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const LabelHelperStatus: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    allowClear={false}
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    disabled={true}
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    status="error"
                    style={{
                        width: 200
                    }}
                />
                <KitAutoComplete
                    label="Label"
                    helper="Helper"
                    status="warning"
                    style={{
                        width: 200
                    }}
                />
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
