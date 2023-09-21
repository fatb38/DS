import type { Meta, StoryObj } from '@storybook/react';


import {argTypes, FakeNotification, Template} from './data';

const meta: Meta<typeof FakeNotification> = {
  component: FakeNotification,
  title: "Design System/Feedback/Notification",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof FakeNotification>;

export const Api: Story = {
  render: Template,
};