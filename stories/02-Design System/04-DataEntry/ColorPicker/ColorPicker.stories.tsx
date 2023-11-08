import type {Meta, StoryObj} from '@storybook/react';
import {KitColorPicker} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';

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

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '250px'}}>
            <KitColorPicker open />
            <KitColorPicker showText open />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Disabled: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <KitColorPicker disabled />
            <KitColorPicker disabled showText />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Preset: Story = {
    render: () => {
        const recommendedColors = {
            label: 'Recommended',
            colors: [
                '#000000',
                '#000000E0',
                '#000000A6',
                '#00000073',
                '#00000040',
                '#00000026',
                '#0000001A',
                '#00000012',
                '#0000000A',
                '#00000005',
                '#F5222D',
                '#FA8C16',
                '#FADB14',
                '#8BBB11',
                '#52C41A',
                '#13A8A8',
                '#1677FF',
                '#2F54EB',
                '#722ED1',
                '#EB2F96',
                '#F5222D4D',
                '#FA8C164D',
                '#FADB144D',
                '#8BBB114D',
                '#52C41A4D',
                '#13A8A84D',
                '#1677FF4D',
                '#2F54EB4D',
                '#722ED14D',
                '#EB2F964D'
            ]
        };

        const recentColors = {
            label: 'Recent',
            colors: []
        };
        return <KitColorPicker presets={[recommendedColors, recentColors]} open />;
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const LabelHelper: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <KitColorPicker label="Label" helper="Helper" showText />
            <KitColorPicker label="Label" helper="Helper" showText disabled />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
