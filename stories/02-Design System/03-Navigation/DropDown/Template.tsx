import React from 'react';
import {KitButton} from '@kit/General/';
import {KitDropDown} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitDropdown, IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const items = [
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

export const Template = (args: IKitDropdown) => {
    return (
        <KitDropDown {...args} menu={{items}}>
            <KitButton>Label</KitButton>
        </KitDropDown>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const items: IKitDropdownMenu['items'] = [
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

    const itemsDivider: IKitDropdownMenu['items'] = [
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

    const itemsGroups: IKitDropdownMenu['items'] = [
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

    return (
        <KitSpace size="m">
            <KitDropDown menu={{items}}>
                <KitButton type="link">
                    Basic <FontAwesomeIcon icon={faAngleDown} />
                </KitButton>
            </KitDropDown>
            <KitDropDown menu={{items, selectable: true}}>
                <KitButton type="link">
                    Selectable <FontAwesomeIcon icon={faAngleDown} />
                </KitButton>
            </KitDropDown>
            <KitDropDown menu={{items: itemsDivider}}>
                <KitButton type="link">
                    With divider <FontAwesomeIcon icon={faAngleDown} />
                </KitButton>
            </KitDropDown>
            <KitDropDown menu={{items: itemsGroups}}>
                <KitButton type="link">
                    With groups <FontAwesomeIcon icon={faAngleDown} />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.DropDown';
EditorTemplate.title = 'DropDown';
