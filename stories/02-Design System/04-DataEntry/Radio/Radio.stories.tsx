import type {Meta, StoryObj} from '@storybook/react';
import {KitRadio} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {KitTypography} from '@kit/General';

const meta: Meta<typeof KitRadio> = {
    component: KitRadio,
    title: 'Design System/DataEntry/Radio',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRadio>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div>
                <KitTypography.Title level="h3">Basic radio</KitTypography.Title>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitRadio defaultChecked>Checked</KitRadio>
                    <KitRadio defaultChecked autoFocus>
                        Checked with focus
                    </KitRadio>
                    <KitRadio>Unchecked</KitRadio>
                    <KitRadio defaultChecked disabled>
                        Disabled checked
                    </KitRadio>
                    <KitRadio disabled>Disabled unchecked</KitRadio>
                </div>
            </div>
            <div>
                <KitTypography.Title level="h3">Group radio</KitTypography.Title>
                <KitRadio.Group value={2}>
                    <KitRadio value={1}>A</KitRadio>
                    <KitRadio value={2}>B</KitRadio>
                    <KitRadio value={3}>C</KitRadio>
                    <KitRadio value={4}>D</KitRadio>
                </KitRadio.Group>
            </div>
        </div>
    )
};

export const ChromaticTestDanger: Story = {
    render: () => (
        <>
            <KitTypography.Title level="h3">Danger radio</KitTypography.Title>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitRadio danger defaultChecked>
                    Checked
                </KitRadio>
                <KitRadio danger defaultChecked autoFocus>
                    Checked with focus
                </KitRadio>
                <KitRadio danger>Unchecked</KitRadio>
                <KitRadio danger defaultChecked disabled>
                    Disabled checked
                </KitRadio>
                <KitRadio danger disabled>
                    Disabled unchecked
                </KitRadio>
            </div>
        </>
    )
};
