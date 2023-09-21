import type { Meta, StoryObj } from '@storybook/react';

import {KitSelect} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitSelect> = {
  component: KitSelect,
  title: "Design System/DataEntry/Select",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSelect>;

export const Api: Story = {
  render: Template,
};