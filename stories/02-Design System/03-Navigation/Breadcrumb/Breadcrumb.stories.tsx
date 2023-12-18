import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {KitBreadcrumb} from '@kit/Navigation';
import {argTypes} from './data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {KitTypography} from '@kit/General';
import {Template} from './Template';

const meta: Meta<typeof KitBreadcrumb> = {
    component: KitBreadcrumb,
    title: 'Design System/Navigation/Breadcrumb',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitBreadcrumb>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const items = [
    {
        title: <FontAwesomeIcon icon={faHouse} />,
        href: ''
    },
    {
        title: 'Application Center',
        href: ''
    },
    {
        title: 'Application List',
        href: ''
    },
    {
        title: 'An Application'
    }
];

export const TextAndIcon: Story = {
    render: () => <KitBreadcrumb separator=">" items={items} />,
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const Dropdown: Story = {
    render: () => {
        const menuItems = [
            {
                key: '1',
                label: (
                    <KitTypography.Link target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                        General
                    </KitTypography.Link>
                )
            },
            {
                key: '2',
                label: (
                    <KitTypography.Link target="_blank" rel="noopener noreferrer" href="#">
                        Layout
                    </KitTypography.Link>
                )
            },
            {
                key: '3',
                label: (
                    <KitTypography.Link target="_blank" rel="noopener noreferrer" href="#">
                        Navigation
                    </KitTypography.Link>
                )
            }
        ];

        const items = [
            {
                title: 'Aristid Design'
            },
            {
                title: <a href="">Component</a>
            },
            {
                title: <a href="">General</a>,
                menu: {items: menuItems, open: true}
            },
            {
                title: 'Button'
            }
        ];
        return <KitBreadcrumb separator=">" items={items} />;
    },
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};
