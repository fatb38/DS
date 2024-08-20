import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitButton} from '@kit/General/';
import {argTypes} from './data';
import {Template} from './Template';
import {PrimaryButtonTest} from './test-components/PrimaryButtonTest.tsx';
import {LinkButtonTest} from './test-components/LinkButtonTest.tsx';
import {RedirectButtonTest} from './test-components/RedirectButtonTest.tsx';
import {DefaultButtonTest} from './test-components/DefaultButtonTest.tsx';
import {TertiaryButtonTest} from './test-components/TertiaryButtonTest.tsx';
import {DangerButtonTest} from './test-components/DangerButtonTest.tsx';
import {TextButtonTest} from './test-components/TextButtonTest.tsx';
import {SegmentedButtonTest} from './test-components/SegmentedButtonTest.tsx';
import {IconButtonTest} from './test-components/IconButtonTest.tsx';
import {IconSizeButtonTest} from './test-components/IconSizeButtonTest.tsx';
import {ColoredButtonTest} from './test-components/ColoredButtonTest.tsx';

const meta: Meta<typeof KitButton> = {
    component: KitButton,
    title: 'Design System/General/Button',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitButton>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <>
            <PrimaryButtonTest />
            <DefaultButtonTest />
            <TertiaryButtonTest />
            <LinkButtonTest />
            <RedirectButtonTest />
            <DangerButtonTest />
            <TextButtonTest />
            <SegmentedButtonTest />
            <IconButtonTest />
            <IconSizeButtonTest />
            <ColoredButtonTest />
        </>
    ),
    parameters: {
        chromatic: {delay: 1_500},
        pseudo: {
            hover: '#hover',
            focus: '#focus',
            active: '#active'
        }
    }
};
