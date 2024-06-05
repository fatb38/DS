import type {Meta, StoryObj} from '@storybook/react';
import {KitSideMenu} from '@kit/Navigation';
import {argTypes, items} from './data';
import {Template} from './Template';
import {KitTypography} from '@kit/General';

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
            </div>
        </div>
    )
};
