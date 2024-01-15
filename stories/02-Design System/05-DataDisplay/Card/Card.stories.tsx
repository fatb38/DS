import type {Meta, StoryObj} from '@storybook/react';
import {argTypes} from './data';
import {KitCard} from '@kit/DataDisplay';
import React from 'react';
import {Template} from './Template';
import {CompleteCardTest} from './test-components/CompleteCardTest.tsx';
import {DisabledCardTest} from './test-components/DisabledCardTest.tsx';
import {NoImageCardTest} from './test-components/NoImageCardTest.tsx';

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
    render: () => (
        <div>
            <div style={{display: 'flex', gap: '50px'}}>
                <CompleteCardTest />
                <DisabledCardTest />
            </div>
            <NoImageCardTest />
        </div>
    )
};
