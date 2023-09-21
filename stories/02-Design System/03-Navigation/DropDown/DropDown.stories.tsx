import type { Meta, StoryObj } from '@storybook/react';

import {KitDropDown} from '@kit/Navigation';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitDropDown> = {
  component: KitDropDown,
  title: "Design System/Navigation/DropDown",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitDropDown>;

export const Api: Story = {
  render: Template,
};