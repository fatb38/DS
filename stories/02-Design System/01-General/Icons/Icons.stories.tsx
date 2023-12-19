import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitIcon, KitTypography} from '@kit/General/';
import {argTypes} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {useKitTheme} from '@theme/useKitTheme';
import {Template} from './Template';

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

const IconWithHooks = () => {
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
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color} />
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Colors: Story = {
    render: () => {
        return <IconWithHooks />;
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
