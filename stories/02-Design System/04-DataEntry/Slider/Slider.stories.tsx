import type {Meta, StoryObj} from '@storybook/react';
import {KitSlider} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicSliderTest} from './test-components/BasicSliderTest.tsx';
import {GraduatedSliderTest} from './test-components/GraduatedSliderTest.tsx';
import {IconsSliderTest} from './test-components/IconsSliderTest.tsx';

const meta: Meta<typeof KitSlider> = {
    component: KitSlider,
    title: 'Design System/DataEntry/Slider',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSlider>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <BasicSliderTest />
            <IconsSliderTest />
            <GraduatedSliderTest />
        </div>
    )
};
