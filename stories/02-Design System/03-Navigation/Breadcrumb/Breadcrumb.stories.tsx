import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitBreadcrumb} from '@kit/Navigation';
import {argTypes} from './data';
import {Template} from './Template';
import {BreadcrumbTest} from './test-components/BreadcrumbTest.tsx';
import {userEvent, within} from '@storybook/testing-library';

const meta: Meta<typeof KitBreadcrumb> = {
    component: KitBreadcrumb,
    title: 'Design System/Navigation/Breadcrumb',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitBreadcrumb>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => <BreadcrumbTest />,
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.hover(canvas.getByText('General'));
    },
    parameters: {
        chromatic: {delay: 1_500}
    }
};
