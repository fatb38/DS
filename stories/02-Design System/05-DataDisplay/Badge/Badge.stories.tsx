import type {Meta, StoryObj} from '@storybook/react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {argTypes, Template} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {KitIcon} from '@kit/General';
import {KitColorProp} from '@utils/functions/types';
import {colorsPalette} from '@theme/aristid/general/colors';

const meta: Meta<typeof KitBadge> = {
    component: KitBadge,
    title: 'Design System/DataDisplay/Badge',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitBadge>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={0} showZero>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={<KitIcon icon={<FontAwesomeIcon icon={faClock} />} color="red" />}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={99}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={100}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={99} overflowCount={10}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={1000} overflowCount={999}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
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
            <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                <KitBadge count={5}>
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>Secondary Colors</p>
            <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                {secondaryColors.map((color: string) => (
                    <KitBadge key={color} count={5} color={color as KitColorProp}>
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                ))}
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>Inverted Secondary Colors</p>
            <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                {secondaryColors.map((color: string) => (
                    <KitBadge key={color} count={5} color={color as KitColorProp} secondaryColorInvert>
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                ))}
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>RGB format</p>
            <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                <KitBadge count={5} color="rgba(252, 186, 3)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="rgba(0, 29, 117)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="rgba(133, 0, 101)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>HEX format</p>
            <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                <KitBadge count={5} color="#fcba03">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="#001d75">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="#850065">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>HSL format</p>
            <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                <KitBadge count={5} color="hsla(44, 97%, 50%, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="hsla(225, 100%, 23%, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="hsla(314, 100%, 26%, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>Status</p>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitBadge dot status="success">
                    Success
                </KitBadge>
                <KitBadge dot status="error">
                    Error
                </KitBadge>
                <KitBadge dot status="default">
                    Default
                </KitBadge>
                <KitBadge dot status="processing">
                    Processing
                </KitBadge>
                <KitBadge dot status="warning">
                    Warning
                </KitBadge>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
