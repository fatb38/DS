import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitTypography} from '@kit/General/';
import {argTypes} from './data';
import {Template} from './Template';

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

export const Title: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px', flexDirection: 'column'}}>
            <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Ellipsis: Story = {
    render: () => (
        <div style={{width: '250px'}}>
            <KitTypography.Paragraph size="large" weight="medium">
                Simple ellipsis
            </KitTypography.Paragraph>
            <KitTypography.Paragraph ellipsis={true}>
                Aristid Design, a design language for background applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is refined by Aristid UED Team. Aristid Design, a
                design language for background applications, is refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid UED Team. Aristid Design, a design language
                for background applications, is refined by Aristid UED Team. Aristid Design, a design language for
                background applications, is refined by Aristid UED Team.
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="large" weight="medium">
                Expandable ellipsis
            </KitTypography.Paragraph>
            <KitTypography.Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'more'}}>
                Aristid Design, a design language for background applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is refined by Aristid UED Team. Aristid Design, a
                design language for background applications, is refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid UED Team. Aristid Design, a design language
                for background applications, is refined by Aristid UED Team. Aristid Design, a design language for
                background applications, is refined by Aristid UED Team.
            </KitTypography.Paragraph>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
