import type { Meta, StoryObj } from '@storybook/react';

import {KitInput} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitInput> = {
  component: KitInput,
  title: "Design System/DataEntry/Input",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitInput>;

export const Api: Story = {
  render: Template,
};