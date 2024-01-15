import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitModal} from '@kit/Feedback';
import {Template} from './Template';
import {argTypes} from './data';
import {BasicModalTest} from './test-components/BasicModalTest.tsx';
import {FullConfirmModalTest} from './test-components/FullConfirmModal.tsx';
import {ConfirmTypesModalTest} from './test-components/ConfirmTypesModal.tsx';

const meta: Meta<typeof KitModal> = {
    component: KitModal,
    title: 'Design System/Feedback/Modal',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitModal>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <div style={{display: 'flex', gap: '50px'}}>
                <BasicModalTest />
                <FullConfirmModalTest />
            </div>
            <ConfirmTypesModalTest />
        </>
    )
};
