import type { Meta, StoryObj } from '@storybook/react';

import {KitMenu} from '@kit/Navigation';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitMenu> = {
  component: KitMenu,
  title: "Design System/Navigation/Menu",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitMenu>;

export const Api: Story = {
  render: Template,
};