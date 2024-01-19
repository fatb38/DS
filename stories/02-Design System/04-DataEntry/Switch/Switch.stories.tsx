import type {Meta, StoryObj} from '@storybook/react';
import {KitSwitch} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {KitTypography} from '@kit/General';

const meta: Meta<typeof KitSwitch> = {
    component: KitSwitch,
    title: 'Design System/DataEntry/Switch',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSwitch>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <KitTypography.Title level="h3">Switch</KitTypography.Title>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSwitch autoFocus />
                    <KitSwitch />
                    <KitSwitch defaultChecked />
                </div>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSwitch loading />
                    <KitSwitch defaultChecked loading />
                </div>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitSwitch disabled />
                    <KitSwitch defaultChecked disabled />
                </div>
            </div>
        </>
    )
};
