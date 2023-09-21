import type { Meta, StoryObj } from '@storybook/react';

import {KitHeader} from '@kit/Navigation';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitHeader> = {
  component: KitHeader,
  title: "Design System/Navigation/Header",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitHeader>;

export const Api: Story = {
  render: Template,
};