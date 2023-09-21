import type { Meta, StoryObj } from '@storybook/react';

import {KitGrid} from '@kit/Layout';
import {argTypes, FakeGrid, Template} from './data';


const meta: Meta<typeof FakeGrid> = {
  component: FakeGrid,
  title: "Design System/Layout/Grid",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitGrid>;

export const Api: Story = {
  render: Template,
};