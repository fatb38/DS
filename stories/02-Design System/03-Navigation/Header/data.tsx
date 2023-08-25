import React, {ReactNode} from 'react';
import {FilterOutlined, SortDescendingOutlined, GroupOutlined, ControlOutlined} from '@ant-design/icons';
import {KitButton, KitTypography} from '@kit/General/';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation/';

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

export const items = [
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

export const handleButtonClick = e => {
    console.log('click left button', e);
};

export const handleMenuClick = e => {
    console.log('click', e);
};

export const menuProps = {
    items,
    onClick: handleMenuClick
};

export const options = [
    {
        value: 'view',
        icon: <ControlOutlined />,
        label: 'Vue'
    },
    {
        value: 'save',
        icon: <ControlOutlined />,
        label: 'Enregistrer la vue',
        highlight: true
    }
];

export const actions: ReactNode[] = [
    <KitButton icon={<FilterOutlined />}></KitButton>,
    <KitButton icon={<GroupOutlined />}></KitButton>,
    <KitButton icon={<SortDescendingOutlined />}></KitButton>,
    <KitButton icon={<ControlOutlined />}>Vue</KitButton>
];

export const breadcrumb = <KitBreadcrumb items={items} />;

export const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

export const title = 'Campagne 1 - soldes rentrée';

export const argTypes = {
    title: {
        name: 'title',
        control: {type: 'text'},
        description: 'Title to display',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        }
    },
    search: {
        name: 'search',
        control: {type: 'boolean'},
        description: 'If set, show a search input. Accepts [Input] porps',
        table: {
            type: {
                summary: 'KitInputProps'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        }
    },
    breadcrumb: {
        name: 'breadcrumb',
        control: {type: 'boolean'},
        description: 'Display a breadcrumb. [Breadcrumb]',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        },
        defaultValue: '-'
    },
    actions: {
        name: 'actions',
        control: {type: 'boolean'},
        description: 'Display Actions buttons and / of Selects. (KitButton|KitSelect)[]',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        },
        defaultValue: '-'
    },
    onPlusClick: {
        name: 'onPlusClick',
        description: "When set, show a '+' button on the right, and set the handler to handle `click` event",
        control: {type: 'boolean'},
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: '-'
    }
};

const handleOnPlusClick = () => console.log('click "plus" button');

export const Template = ({actions: showActions, breadcrumb: showBreadcrumb, onPlusClick, search, ...args}) => {
    return (
        <KitHeader
            actions={showActions ? actions : undefined}
            breadcrumb={showBreadcrumb ? breadcrumb : undefined}
            search={search ? searchProps : undefined}
            onPlusClick={onPlusClick ? handleOnPlusClick : undefined}
            {...args}
        />
    );
};
