import type { Meta, StoryObj } from '@storybook/react';

import {KitTypography} from '@kit/General/';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitTypography.Text> = {
  component: KitTypography.Text,
  title: "Design System/General/Typography",
  argTypes: argTypes,
  args: {
    content: "Aristid Design"
  }
};

export default meta;
type Story = StoryObj<typeof KitTypography.Text>;

export const Api: Story = {
  render: Template,
};