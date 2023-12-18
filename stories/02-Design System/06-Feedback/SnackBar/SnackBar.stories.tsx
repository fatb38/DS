import type {Meta, StoryObj} from '@storybook/react';
import {Template} from './Template';
import {FakeSnackbar, argTypes} from './data';

const meta: Meta<typeof FakeSnackbar> = {
    component: FakeSnackbar,
    title: 'Design System/Feedback/SnackBar',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof FakeSnackbar>;

export const Api: Story = {
    render: Template
};
