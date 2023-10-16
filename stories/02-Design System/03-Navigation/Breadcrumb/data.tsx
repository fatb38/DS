import React from 'react';
import {KitTypography} from '@kit/General/';
import {KitBreadcrumb} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';

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

export const argTypes = {
    items: {
        name: 'items',
        control: {type: 'object', value: items},
        description: 'The routing stack information of router',
        table: {
            type: {
                summary: '[items[]](#ItemType)'
            },
            defaultValue: {summary: ''},
            category: 'Breadcrumb'
        }
    },
    separator: {
        name: 'separator',
        control: {type: 'object', value: '/'},
        description: 'Custom separator',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '/'},
            category: 'Breadcrumb'
        }
    }
};

export const Template = args => {
    const {items, separator} = args;
    return (
        <KitBreadcrumb
            items={items || argTypes.items.control.value}
            separator={separator || argTypes.separator.control.value}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return <KitBreadcrumb items={items} />;
};
EditorTemplate.path = 'components.Breadcrumb';
EditorTemplate.title = 'Breadcrumb';
