import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitIcon, KitTypography} from '@kit/General/';
import {argTypes, Template} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {useKitTheme} from '@theme/theme-context';
import {KitColorProp} from '@utils/functions/types';

const meta: Meta<typeof KitIcon> = {
    component: KitIcon,
    title: 'Design System/General/Icons',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitIcon>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const Basic: Story = {
    render: () => (
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} />
            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on />
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Colors: Story = {
    render: () => {
        const {theme} = useKitTheme();

        const secondaryColors = Object.keys(theme.general.colors.secondary);

        return (
            <div>
                <div>
                    <KitTypography.Text style={{fontWeight: 'bold'}}>Secondary Colors</KitTypography.Text>
                </div>
                <div style={{display: 'inline-flex', gap: '8px'}}>
                    {secondaryColors.map((color: string) => (
                        <div style={{display: 'inline-flex', gap: '8px', flexDirection: 'column'}} key={color}>
                            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color as KitColorProp} />
                            <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color as KitColorProp} />
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
