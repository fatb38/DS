import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {argTypes} from './data';
import {FakeNotification, Template} from './Template';
import {BasicNotificationTest} from './test-components/basicNotificationTest';
import {SubtitleNotificationTest} from './test-components/subtitleNotificationTest';
import {ClosableNotificationTest} from './test-components/closableNotificationTest';
import {ButtonsNotificationTest} from './test-components/buttonsNotificationTest';
import {FullNotificationTest} from './test-components/fullNotificationTest';

const meta: Meta<typeof FakeNotification> = {
    component: FakeNotification,
    title: 'Design System/Feedback/Notification',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof FakeNotification>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <BasicNotificationTest />
            <ClosableNotificationTest />
            <SubtitleNotificationTest />
            <ButtonsNotificationTest />
            <FullNotificationTest />
        </div>
    )
};
