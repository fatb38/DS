import type { Meta, StoryObj } from '@storybook/react';

import {KitCheckbox} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitCheckbox> = {
  component: KitCheckbox,
  title: "Design System/DataEntry/Checkbox",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitCheckbox>;

export const Api: Story = {
  render: Template,
};