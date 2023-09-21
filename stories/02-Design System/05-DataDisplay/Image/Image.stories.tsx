import type { Meta, StoryObj } from '@storybook/react';

import {KitImage} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitImage> = {
  component: KitImage,
  title: "Design System/DataDisplay/Image",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitImage>;

export const Api: Story = {
  render: Template,
};