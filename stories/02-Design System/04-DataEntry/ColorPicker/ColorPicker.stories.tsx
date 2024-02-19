import type {Meta, StoryObj} from '@storybook/react';
import {KitColorPicker} from '@kit/DataEntry';
import {argTypes, recentColors, recommendedColors} from './data';
import React from 'react';
import {Template} from './Template';
import {KitTypography} from '@kit/General';

const meta: Meta<typeof KitColorPicker> = {
    component: KitColorPicker,
    title: 'Design System/DataEntry/ColorPicker',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitColorPicker>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const defaultValue = '#1677ff';

export const ChromaticTest: Story = {
    render: () => (
        <>
            <KitTypography.Title level="h3">Colorpicker</KitTypography.Title>
            <div style={{display: 'flex', gap: '250px'}}>
                <KitColorPicker defaultValue={defaultValue} presets={[recommendedColors, recentColors]} open />
                <KitColorPicker defaultValue={defaultValue} open />
                <KitColorPicker defaultValue={defaultValue} showText open />
            </div>
            <div style={{marginTop: '480px', marginBottom: '24px'}}>
                <KitTypography.Title level="h3">Disabled</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitColorPicker defaultValue={defaultValue} disabled />
                    <KitColorPicker defaultValue={defaultValue} disabled showText />
                </div>
            </div>
            <KitTypography.Title level="h3">Labeled</KitTypography.Title>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitColorPicker label="Label" helper="Helper" defaultValue={defaultValue} showText />
                <KitColorPicker label="Label" helper="Helper" defaultValue={defaultValue} showText disabled />
            </div>
        </>
    )
};
