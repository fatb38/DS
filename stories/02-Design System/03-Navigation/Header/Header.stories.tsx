import type {Meta, StoryObj} from '@storybook/react';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation';
import {argTypes, Template} from './data';
import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitButton, KitTypography} from '@kit/General';
import {faArrowUpZA, faFilter, faObjectUngroup, faSliders} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof KitHeader> = {
    component: KitHeader,
    title: 'Design System/Navigation/Header',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitHeader>;

export const Api: Story = {
    render: Template
};

const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

const actions: ReactNode[] = [
    <KitButton icon={<FontAwesomeIcon icon={faFilter} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faObjectUngroup} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faArrowUpZA} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faSliders} />}>Vue</KitButton>
];

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
        title: <KitTypography.Link href="">Component</KitTypography.Link>
    },
    {
        title: <KitTypography.Link href="">General</KitTypography.Link>,
        menu: {items: menuItems}
    },
    {
        title: 'Button'
    }
];

export const FullHeader: Story = {
    render: () => (
        <KitHeader
            title="Campagne 1 - soldes rentrée"
            search={searchProps}
            breadcrumb={<KitBreadcrumb items={items} />}
            actions={actions}
            onPlusClick={() => console.log('click on plus')}
        />
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};
