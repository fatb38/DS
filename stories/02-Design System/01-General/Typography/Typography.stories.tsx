import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitTypography} from '@kit/General/';
import {argTypes} from './data';
import {Template} from './Template';
import {TitleTypographyTest} from './test-components/TitleTypographyTest.tsx';
import {EllipsisTypographyTest} from './test-components/EllipsisTypographyTest.tsx';
import {KitDivider} from '@kit/Layout';
import {TextAndLinkTypographyTest} from './test-components/TextAndLinkTypographyTest.tsx';

const meta: Meta<typeof KitTypography.Text> = {
    component: KitTypography.Text,
    title: 'Design System/General/Typography',
    argTypes: argTypes,
    args: {
        content: 'Aristid Design'
    }
};

export default meta;
type Story = StoryObj<typeof KitTypography.Text>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <TitleTypographyTest />
            <KitDivider />
            <TextAndLinkTypographyTest />
            <KitDivider />
            <EllipsisTypographyTest />
        </>
    )
}
