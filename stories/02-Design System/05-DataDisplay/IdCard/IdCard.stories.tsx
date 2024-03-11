import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Template} from './Template';
import {argTypes} from './data';
import {KitIdCard} from '@kit/DataDisplay';
import {BasicIdCardTest} from './test-components/BasicIdCard';
import {LargeIdCardTest} from './test-components/LargeIdCard';

const meta: Meta<typeof KitIdCard> = {
    component: KitIdCard,
    title: 'Design System/DataDisplay/IdCard',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitIdCard>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <BasicIdCardTest />
            <LargeIdCardTest />
        </>
    )
};
