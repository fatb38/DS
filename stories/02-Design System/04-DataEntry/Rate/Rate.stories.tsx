import type {Meta, StoryObj} from '@storybook/react';
import {KitRate} from '@kit/DataEntry';
import {argTypes} from './data';
import React from 'react';
import {colorsPalette} from '@theme/aristid/general/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle as faCircleDefault} from '@fortawesome/free-regular-svg-icons';
import {faCircle as faCircleActive} from '@fortawesome/free-solid-svg-icons';
import {faCircleHalfStroke as faCircleHalf} from '@fortawesome/free-solid-svg-icons';
import {Template} from './Template';
import {KitTypography} from '@kit/General';

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

export const ChromaticTest: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '100px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div>
                    <KitTypography.Title level="h4">Basic rate</KitTypography.Title>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <KitRate defaultValue={2} />
                        <KitRate allowHalf defaultValue={2.5} />
                    </div>
                </div>
                <div>
                    <KitTypography.Title level="h4">Readonly</KitTypography.Title>
                    <KitRate disabled defaultValue={2} />
                </div>
                <div>
                    <KitTypography.Title level="h4">Other icon</KitTypography.Title>
                    <KitRate
                        allowHalf
                        value={2.5}
                        defaultIcon={<FontAwesomeIcon icon={faCircleDefault} />}
                        halfIcon={<FontAwesomeIcon icon={faCircleHalf} />}
                        activeIcon={<FontAwesomeIcon icon={faCircleActive} />}
                    />
                </div>
                <div>
                    <KitTypography.Title level="h4">Secondary colors</KitTypography.Title>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        {secondaryColors.map((color: string) => (
                            <KitRate key={color} defaultValue={3} color={color} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <KitTypography.Title level="h4">RGB format</KitTypography.Title>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <KitRate defaultValue={3} color="rgb(252, 186, 3)" />
                        <KitRate defaultValue={3} color="rgb(0, 29, 117)" />
                        <KitRate defaultValue={3} color="rgb(133, 0, 101)" />
                    </div>
                </div>
                <div>
                    <KitTypography.Title level="h4">HEX format</KitTypography.Title>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <KitRate defaultValue={3} color="#FunctionComponentba03" />
                        <KitRate defaultValue={3} color="#001d75" />
                        <KitRate defaultValue={3} color="#850065" />
                    </div>
                </div>
                <div>
                    <KitTypography.Title level="h4">HSM format</KitTypography.Title>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <KitRate defaultValue={3} color="hsla(44, 97%, 50%, 1)" />
                        <KitRate defaultValue={3} color="hsla(225, 100%, 23%, 1)" />
                        <KitRate defaultValue={3} color="hsla(314, 100%, 26%, 1)" />
                    </div>
                </div>
            </div>
        </div>
    )
};
