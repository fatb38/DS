import type { Meta, StoryObj } from '@storybook/react';

import {KitModal} from '@kit/Feedback';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitModal> = {
  component: KitModal,
  title: "Design System/Feedback/Modal",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitModal>;

export const Api: Story = {
  render: Template,
};