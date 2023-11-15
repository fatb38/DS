import type {Meta, StoryObj} from '@storybook/react';
import {KitRate} from '@kit/DataEntry';
import {argTypes, Template} from './data';
import React from 'react';
import {colorsPalette} from '@theme/aristid/general/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle as faCircleDefault} from '@fortawesome/free-regular-svg-icons';
import {faCircle as faCircleActive} from '@fortawesome/free-solid-svg-icons';
import {faCircleHalfStroke as faCircleHalf} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof KitRate> = {
    component: KitRate,
    title: 'Design System/DataEntry/Rate',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitRate>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const secondaryColors = Object.keys(colorsPalette.secondary);

export const Basic: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitRate defaultValue={2} />
            <KitRate allowHalf defaultValue={2.5} />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const OtherCharacters: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitRate
                allowHalf
                value={2.5}
                defaultIcon={<FontAwesomeIcon icon={faCircleDefault} />}
                halfIcon={<FontAwesomeIcon icon={faCircleHalf} />}
                activeIcon={<FontAwesomeIcon icon={faCircleActive} />}
            />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const ReadOnly: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitRate disabled defaultValue={2} />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Color: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <p style={{fontWeight: 'bold', margin: 0}}>Default color</p>
                <KitRate defaultValue={3} />
                <p style={{fontWeight: 'bold', margin: 0}}>Secondary Colors</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitRate key={color} defaultValue={3} color={color} />
                    ))}
                </div>
                <p style={{fontWeight: 'bold', margin: 0}}>RGB format</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <KitRate defaultValue={3} color="rgba(252, 186, 3)" />
                    <KitRate defaultValue={3} color="rgba(0, 29, 117)" />
                    <KitRate defaultValue={3} color="rgba(133, 0, 101)" />
                </div>
                <p style={{fontWeight: 'bold', margin: 0}}>HEX format</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <KitRate defaultValue={3} color="#fcba03" />
                    <KitRate defaultValue={3} color="#001d75" />
                    <KitRate defaultValue={3} color="#850065" />
                </div>

                <p style={{fontWeight: 'bold', margin: 0}}>HSL format</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <KitRate defaultValue={3} color="hsla(44, 97%, 50%, 1)" />
                    <KitRate defaultValue={3} color="hsla(225, 100%, 23%, 1)" />
                    <KitRate defaultValue={3} color="hsla(314, 100%, 26%, 1)" />
                </div>
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
