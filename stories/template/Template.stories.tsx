import type { Meta, StoryObj } from '@storybook/react';

import {KitTemplate} from './data';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitTemplate> = {
  component: KitTemplate,
  title: "Design System/DataEntry/Template",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTemplate>;

export const Api: Story = {
  render: Template,
};