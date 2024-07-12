import type {Meta, StoryObj} from '@storybook/react';

import {argTypes} from './data';
import React from 'react';
import {colorsPalette} from '@theme/aristid/general/colors';
import {Template} from './Template';
import {KitTypography} from '@kit/General';
import {KitTag} from '@kit/DataDisplay';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';

const meta: Meta<typeof KitTag> = {
    component: KitTag,
    title: 'Design System/DataDisplay/Tag',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitTag>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const secondaryColors = Object.keys(colorsPalette.secondary);
const tertiaryColors = Object.keys(colorsPalette.tertiary);

const tags: IKitTagConfig[] = [
    {wording: 'Multimédia'},
    {wording: 'Promo 2021'},
    {wording: 'Alimentation'},
    {wording: 'Fromage'}
];

export const ChromaticTest: Story = {
    render: () => (
        <>
            <KitTypography.Title level="h3">Basic tag</KitTypography.Title>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag>Tag 1</KitTag>
                <KitTag onClose={() => console.log()}>Tag 2</KitTag>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitTypography.Title level="h3">Secondary Colors</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitTag color="primary">primary</KitTag>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitTag color="primary" secondaryColorInvert>
                        primary
                    </KitTag>
                </div>

                <KitTypography.Title level="h3">Secondary Colors</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitTag key={color} color={color}>
                            {color}
                        </KitTag>
                    ))}
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitTag key={color} color={color} secondaryColorInvert>
                            {color}
                        </KitTag>
                    ))}
                </div>

                <KitTypography.Title level="h3">Tertiary Colors</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    {tertiaryColors.map((color: string) => (
                        <KitTag key={color} color={color}>
                            {color}
                        </KitTag>
                    ))}
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    {tertiaryColors.map((color: string) => (
                        <KitTag key={color} color={color} secondaryColorInvert>
                            {color}
                        </KitTag>
                    ))}
                </div>

                <KitTypography.Title level="h3">RGB format</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitTag color="rgba(252, 186, 3)">Yellow</KitTag>
                    <KitTag color="rgba(0, 29, 117)">Dark blue</KitTag>
                    <KitTag color="rgba(133, 0, 101)">Purple</KitTag>
                </div>

                <KitTypography.Title level="h3">HEX format</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitTag color="#fcba03">Yellow</KitTag>
                    <KitTag color="#001d75">Dark blue</KitTag>
                    <KitTag color="#850065">Purple</KitTag>
                </div>

                <KitTypography.Title level="h3">HSL format</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitTag color="hsla(44, 97%, 50%, 1)">Yellow</KitTag>
                    <KitTag color="hsla(225, 100%, 23%, 1)">Dark blue</KitTag>
                    <KitTag color="hsla(314, 100%, 26%, 1)">Purple</KitTag>
                </div>
                <KitTypography.Title level="h3">Group Tag</KitTypography.Title>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <KitTag.Group tags={tags} style={{width: '500px'}} />
                    <KitTag.Group tags={tags} style={{width: '200px'}} />
                </div>
            </div>
        </>
    )
};
