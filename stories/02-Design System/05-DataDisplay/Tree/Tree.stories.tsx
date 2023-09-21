import type { Meta, StoryObj } from '@storybook/react';

import {KitTree} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitTree> = {
  component: KitTree,
  title: "Design System/DataDisplay/Tree",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTree>;

export const Api: Story = {
  render: Template,
};