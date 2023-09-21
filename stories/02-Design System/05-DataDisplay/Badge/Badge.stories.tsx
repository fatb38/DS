import type { Meta, StoryObj } from '@storybook/react';

import {KitBadge} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitBadge> = {
  component: KitBadge,
  title: "Design System/DataDisplay/Badge",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitBadge>;

export const Api: Story = {
  render: Template,
};