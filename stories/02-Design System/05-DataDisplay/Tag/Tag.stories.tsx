import type {Meta, StoryObj} from '@storybook/react';
import {KitTag} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {colorsPalette} from '@theme/aristid/general/colors';
import {Template} from './Template';

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

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '10px'}}>
            <KitTag>Tag 1</KitTag>
            <KitTag onClose={() => console.log()}>Tag 2</KitTag>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

const secondaryColors = Object.keys(colorsPalette.secondary);

export const Color: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <p style={{fontWeight: 'bold', margin: 0}}>Default color</p>
            <div>
                <KitTag>Default</KitTag>
            </div>

            <p style={{fontWeight: 'bold', margin: 0}}>Secondary Colors</p>
            <div style={{display: 'flex', gap: '10px'}}>
                {secondaryColors.map((color: string) => (
                    <KitTag key={color} color={color}>
                        {color}
                    </KitTag>
                ))}
            </div>

            <p style={{fontWeight: 'bold', margin: 0}}>Inverted Secondary Colors</p>
            <div style={{display: 'flex', gap: '10px'}}>
                {secondaryColors.map((color: string) => (
                    <KitTag key={color} color={color} secondaryColorInvert>
                        {color}
                    </KitTag>
                ))}
            </div>

            <p style={{fontWeight: 'bold', margin: 0}}>RGB format</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag color="rgba(252, 186, 3)">Yellow</KitTag>
                <KitTag color="rgba(0, 29, 117)">Dark blue</KitTag>
                <KitTag color="rgba(133, 0, 101)">Purple</KitTag>
            </div>

            <p style={{fontWeight: 'bold', margin: 0}}>HEX format</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag color="#fcba03">Yellow</KitTag>
                <KitTag color="#001d75">Dark blue</KitTag>
                <KitTag color="#850065">Purple</KitTag>
            </div>

            <p style={{fontWeight: 'bold', margin: 0}}>HSL format</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitTag color="hsla(44, 97%, 50%, 1)">Yellow</KitTag>
                <KitTag color="hsla(225, 100%, 23%, 1)">Dark blue</KitTag>
                <KitTag color="hsla(314, 100%, 26%, 1)">Purple</KitTag>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
