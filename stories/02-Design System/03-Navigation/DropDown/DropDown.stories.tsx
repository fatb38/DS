import type {Meta, StoryObj} from '@storybook/react';
import {KitDropDown} from '@kit/Navigation';
import {argTypes, Template} from './data';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import React from 'react';
import {KitButton} from '@kit/General';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const meta: Meta<typeof KitDropDown> = {
    component: KitDropDown,
    title: 'Design System/Navigation/DropDown',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitDropDown>;

export const Api: Story = {
    render: Template
};

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

export const Basic: Story = {
    render: () => (
        <KitDropDown open menu={{items}}>
            <KitButton type="link" id="hover">
                Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
            </KitButton>
        </KitDropDown>
    ),
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};

export const ArrowAndPlacement: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <div style={{height: '180px', display: 'flex', alignItems: 'flex-start', gap: '150px'}}>
                <KitDropDown open menu={{items}} placement="bottomLeft" arrow>
                    <KitButton>bottomLeft</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items}} placement="bottom" arrow>
                    <KitButton>bottom</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items}} placement="bottomRight" arrow>
                    <KitButton>bottomRight</KitButton>
                </KitDropDown>
            </div>
            <div style={{height: '180px', display: 'flex', alignItems: 'flex-end', gap: '200px'}}>
                <KitDropDown open menu={{items}} placement="topLeft" arrow>
                    <KitButton>topLeft</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items}} placement="top" arrow>
                    <KitButton>top</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items}} placement="topRight" arrow>
                    <KitButton>topRight</KitButton>
                </KitDropDown>
            </div>
        </div>
    ),
    parameters: {
        chromatic: {disableSnapshot: false}
    }
};

export const GroupAndDisabled: Story = {
    render: () => {
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
        const customRender = (menu: React.ReactNode) => {
            return (
                <>
                    {menu}
                    <KitButton type="primary" block style={{marginTop: '15px'}}>
                        CTA Action
                    </KitButton>
                </>
            );
        };
        return (
            <div style={{display: 'flex', gap: '120px'}}>
                <KitDropDown
                    open
                    menu={{
                        items
                    }}
                >
                    <KitButton type="link">
                        Divider and disabled <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                    </KitButton>
                </KitDropDown>
                <KitDropDown
                    open
                    menu={{
                        items: itemsGroups
                    }}
                >
                    <KitButton type="link">
                        Groups <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                    </KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items}} dropdownRender={customRender}>
                    <a onClick={e => e.preventDefault()}>
                        <KitButton type="link">
                            Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                        </KitButton>
                    </a>
                </KitDropDown>
            </div>
        );
    },
    parameters: {
        chromatic: {disableSnapshot: false},
        pseudo: {
            hover: '#hover',
            focus: '#focus'
        }
    }
};
