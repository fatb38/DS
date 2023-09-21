import type { Meta, StoryObj } from '@storybook/react';

import {KitAvatar} from '@kit/DataDisplay';
import {argTypes, Template} from './data';

const meta: Meta<typeof KitAvatar> = {
  component: KitAvatar,
  title: "Design System/DataDisplay/Avatar",
  argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAvatar>;

export const Api: Story = {
  render: Template,
};