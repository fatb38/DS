import React from 'react';
import {KitTypography} from '@kit/General';
import {IKitBreadcrumbItem, IKitBreadcrumbMenuItem} from '@kit/Navigation/Breadcrumb/types';

const menuItems: IKitBreadcrumbMenuItem[] = [
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

const items: IKitBreadcrumbItem[] = [
    {
        title: 'Aristid Design'
    },
    {
        title: 'Component',
        href: ''
    },
    {
        title: 'General',
        menu: {items: menuItems}
    },
    {
        title: 'Button'
    }
];

export const argTypes = {
    items: {
        name: 'items',
        control: {type: 'object', value: items},
        description: 'The routing stack information of router',
        table: {
            type: {
                summary: '[items[]](#IKitBreadcrumbItem[])'
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
