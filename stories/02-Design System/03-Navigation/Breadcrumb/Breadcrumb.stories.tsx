import type { Meta, StoryObj } from '@storybook/react';

import {KitBreadcrumb} from '@kit/Navigation';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitBreadcrumb> = {
  component: KitBreadcrumb,
  title: "Design System/Navigation/Breadcrumb",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitBreadcrumb>;

export const Api: Story = {
  render: Template,
};