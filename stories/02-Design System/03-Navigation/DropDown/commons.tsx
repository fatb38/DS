import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import React from 'react';
import {KitIdCard} from '@kit/DataDisplay/IdCard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

export const genericDropdownItems: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                1st menu item link
            </a>
        )
    },
    {
        key: '2',
        label: '2nd menu item'
    },
    {
        key: '3',
        label: '3rd menu item'
    }
];

export const customDropdownItems: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: <KitIdCard avatarProps={{src: 'public/images/portrait.png'}} title="title" description="description" />
    },
    {
        key: '2',
        label: (
            <KitIdCard avatarProps={{src: 'public/images/catalog.png'}} title="Other title" description="description" />
        )
    },
    {
        type: 'divider'
    },
    {
        key: '3',
        label: 'Edit',
        icon: <FontAwesomeIcon icon={faEdit} />
    },
    {
        key: '4',
        label: 'Delete',
        icon: <FontAwesomeIcon icon={faTrash} />
    }
];

export const disabledAndDividerDropdownItems: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                1st menu item link
            </a>
        )
    },
    {
        key: '2',
        label: '2nd menu item'
    },
    {
        type: 'divider'
    },
    {
        key: '3',
        label: '3rd menu item',
        disabled: true
    }
];

export const groupDropdownItems: IKitDropdownMenu['items'] = [
    {
        key: 'Group-1',
        type: 'group',
        label: 'Group title',
        children: [
            {
                key: 'Group-1-1',
                label: '1st menu item'
            },
            {
                key: 'Group-1-2',
                label: '2nd menu item'
            }
        ]
    },
    {
        key: 'Group-2',
        type: 'group',
        label: 'Group title 2',
        children: [
            {
                key: 'Group-2-1',
                label: '1st menu item'
            },
            {
                key: 'Group-2-2',
                label: '2nd menu item'
            }
        ]
    }
];
