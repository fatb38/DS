import React from 'react';
import {KitTypography} from '@kit/General/';
import {KitBreadcrumb} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {IKitBreadcrumb, IKitBreadcrumbItem, IKitBreadcrumbMenuItem} from '@kit/Navigation/Breadcrumb/types';
import {argTypes} from './data';

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
        title: 'Component'
    },
    {
        title: 'General',
        menu: {items: menuItems}
    },
    {
        title: 'Button'
    }
];

export const Template = (args: IKitBreadcrumb) => {
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
