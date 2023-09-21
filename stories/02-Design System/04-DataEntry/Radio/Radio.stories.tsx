import type { Meta, StoryObj } from '@storybook/react';

import {KitRadio} from '@kit/DataEntry';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitRadio> = {
  component: KitRadio,
  title: "Design System/DataEntry/Radio",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRadio>;

export const Api: Story = {
  render: Template,
};