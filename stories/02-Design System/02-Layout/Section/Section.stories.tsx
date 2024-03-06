import type {Meta, StoryObj} from '@storybook/react';
import {KitSection} from '@kit/Layout';
import {argTypes} from './data';
import {Template} from './Template';
import {SectionTest} from './test-components/SectionTest';
import React from 'react';

const meta: Meta<typeof KitSection> = {
    component: KitSection,
    title: 'Design System/Layout/Section',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSection>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => <SectionTest />
};
