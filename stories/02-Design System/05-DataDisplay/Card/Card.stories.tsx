import type {Meta, StoryObj} from '@storybook/react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitCard} from '@kit/DataDisplay';
import React from 'react';
import {CompleteCardTest} from './test-components/CompleteCardTest';

const meta: Meta<typeof KitCard> = {
    component: KitCard,
    title: 'Design System/DataDisplay/Card',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => <CompleteCardTest />
};
