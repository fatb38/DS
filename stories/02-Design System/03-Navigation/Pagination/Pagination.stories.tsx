import type { Meta, StoryObj } from '@storybook/react';

import {KitPagination} from '@kit/Navigation';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitPagination> = {
  component: KitPagination,
  title: "Design System/Navigation/Pagination",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitPagination>;

export const Api: Story = {
  render: Template,
};