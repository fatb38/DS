import type {Meta, StoryObj} from '@storybook/react';
import {KitItemCard} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {Template} from './Template';
import {BasicItemCardTest} from './test-components/BasicItemCardTest.tsx';
import {DisabledItemCardTest} from './test-components/DisabledItemCardTest.tsx';

const meta: Meta<typeof KitItemCard> = {
    component: KitItemCard,
    //title: 'Design System/DataDisplay/ItemCard',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitItemCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div>
            <BasicItemCardTest />
            <DisabledItemCardTest />
        </div>
    )
};
