import type {Meta, StoryObj} from '@storybook/react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {colorsPalette} from '@theme/aristid/general/colors';
import {Template} from './Template';

const meta: Meta<typeof KitAvatar> = {
    component: KitAvatar,
    title: 'Design System/DataDisplay/Avatar',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitAvatar>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <KitAvatar size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar size="large" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar size={64} icon={<FontAwesomeIcon icon={faUser} />} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <KitAvatar shape="square" size="small" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar shape="square" size="large" icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar shape="square" size={64} icon={<FontAwesomeIcon icon={faUser} />} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <KitAvatar size="small">U</KitAvatar>
                <KitAvatar>U</KitAvatar>
                <KitAvatar size="large">U</KitAvatar>
                <KitAvatar size={64}>U</KitAvatar>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <KitAvatar size="small">User</KitAvatar>
                <KitAvatar>User</KitAvatar>
                <KitAvatar size="large">User</KitAvatar>
                <KitAvatar size={64}>User</KitAvatar>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <KitAvatar size="small" src={url} />
                <KitAvatar src={url} />
                <KitAvatar size="large" src={url} />
                <KitAvatar size={64} src={url} />
            </div>
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
            <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            <p style={{fontWeight: 'bold', margin: 0}}>Secondary Colors</p>
            <div style={{display: 'flex', gap: '10px'}}>
                {secondaryColors.map((color: string) => (
                    <KitAvatar key={color} icon={<FontAwesomeIcon icon={faUser} />} color={color} />
                ))}
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                {secondaryColors.map((color: string) => (
                    <KitAvatar
                        key={color}
                        icon={<FontAwesomeIcon icon={faUser} />}
                        color={color}
                        secondaryColorInvert
                    />
                ))}
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>RGB format</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitAvatar color="rgba(252, 186, 3)">Y</KitAvatar>
                <KitAvatar color="rgba(0, 29, 117)">D</KitAvatar>
                <KitAvatar color="rgba(133, 0, 101)">P</KitAvatar>
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>HEX format</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitAvatar color="#fcba03">Y</KitAvatar>
                <KitAvatar color="#001d75">D</KitAvatar>
                <KitAvatar color="#850065">P</KitAvatar>
            </div>
            <p style={{fontWeight: 'bold', margin: 0}}>HSL format</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <KitAvatar color="hsla(44, 97%, 50%, 1)">Y</KitAvatar>
                <KitAvatar color="hsla(225, 100%, 23%, 1)">D</KitAvatar>
                <KitAvatar color="hsla(314, 100%, 26%, 1)">P</KitAvatar>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Group: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '60px'}}>
            <span>
                <p style={{fontWeight: 'bold', margin: 0}}>Default KitAvatar.Group</p>
                <KitAvatar.Group>
                    <KitAvatar src={url} />
                    <KitAvatar>K</KitAvatar>
                    <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                </KitAvatar.Group>
            </span>
            <span>
                <p style={{fontWeight: 'bold', margin: 0}}>KitAvatar.Group with limit</p>
                <KitAvatar.Group maxCount={2}>
                    <KitAvatar src={url} />
                    <KitAvatar>K</KitAvatar>
                    <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                    <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                </KitAvatar.Group>
            </span>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Badge: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '20px'}}>
            <KitBadge count={1}>
                <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
            </KitBadge>
            <KitBadge dot>
                <KitAvatar shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
            </KitBadge>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
