import type {Meta, StoryObj} from '@storybook/react';
import {KitSideMenu} from '@kit/Navigation';
import {argTypes, items} from './data';
import {Template} from './Template';
import {KitTypography} from '@kit/General';
import {KitIdCard} from '@kit/DataDisplay';

const meta: Meta<typeof KitSideMenu> = {
    component: KitSideMenu,
    title: 'Design System/Navigation/SideMenu',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitSideMenu>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const _displayCustomContent = (open: boolean) => (
    <KitIdCard
        avatarProps={{
            src: 'public/images/portrait.png'
        }}
        title={open ? 'Nina' : undefined}
        description={open ? 'Responsable Marketing' : undefined}
    />
);
export const ChromaticTest: Story = {
    render: () => (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{padding: '8px'}}>
                <KitTypography.Title level="h4">
                    Play with component in storybook to view item hover state
                </KitTypography.Title>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KitSideMenu items={items} defaultActiveItemKey="activeItem" style={{height: 'auto'}} />
                <KitSideMenu items={items} open defaultActiveItemKey="activeItem" style={{height: 'auto'}} />
                <KitSideMenu
                    items={items}
                    defaultActiveItemKey="activeItem"
                    showSearch
                    autoCompleteOptions={{placeholder: 'Rechercher'}}
                />
                <KitSideMenu
                    items={items}
                    open
                    defaultActiveItemKey="activeItem"
                    showSearch
                    autoCompleteOptions={{placeholder: 'Rechercher'}}
                />
                <KitSideMenu
                    items={items}
                    defaultActiveItemKey="activeItem"
                    customContent={_displayCustomContent}
                    showSearch
                    autoCompleteOptions={{placeholder: 'Rechercher'}}
                />
                <KitSideMenu
                    items={items}
                    open
                    defaultActiveItemKey="activeItem"
                    customContent={_displayCustomContent}
                    showSearch
                    autoCompleteOptions={{placeholder: 'Rechercher'}}
                />
            </div>
        </div>
    )
};
