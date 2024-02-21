import type {Meta, StoryObj} from '@storybook/react';
import {KitMenu} from '@kit/Navigation';
import {argTypes} from './data';
import React from 'react';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faFilter,
    faFloppyDisk,
    faHouse,
    faMagnifyingGlass,
    faObjectUngroup,
    faRotateLeft,
    faTableColumns,
    faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import {KitInput} from '@kit/DataEntry';
import {KitDivider} from '@kit/Layout';
import {Template} from './Template';

const meta: Meta<typeof KitMenu> = {
    component: KitMenu,
    title: 'Design System/Navigation/Menu',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitMenu>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{width: '400px'}}>
                <KitMenu
                    title="View options"
                    onCloseClick={() => console.log('on click close')}
                    segmentedButton={
                        <KitButton type="segmented" color="green" active icon={<FontAwesomeIcon icon={faHouse} />} />
                    }
                    primaryInput={<KitInput placeholder="Opération #1" />}
                    secondaryInput={<KitInput placeholder="Description" />}
                >
                    <KitDivider noMargin color="lightGrey" />
                    <KitMenu.Item
                        title="Layout"
                        icon={<FontAwesomeIcon icon={faTableColumns} />}
                        value="List"
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '8px 0 2px 0'}}
                    />
                    <KitMenu.Item
                        title="Search"
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Quick Filters"
                        icon={<FontAwesomeIcon icon={faFilter} />}
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Filters"
                        icon={<FontAwesomeIcon icon={faFilter} />}
                        value="0"
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Group by"
                        icon={<FontAwesomeIcon icon={faObjectUngroup} />}
                        onRafterClick={() => console.log('click rafter')}
                        style={{margin: '2px 0 8px 0'}}
                    />
                    <KitDivider noMargin color="lightGrey" />
                    <KitMenu.Item
                        title="Save view"
                        icon={<FontAwesomeIcon icon={faFloppyDisk} />}
                        onClick={() => console.log('on click itemMenu')}
                        type="cta"
                        style={{margin: '16px 0 2px 0'}}
                    />
                    <KitMenu.Item
                        title="Duplicate"
                        icon={<FontAwesomeIcon icon={faCopy} />}
                        onClick={() => console.log('on click itemMenu')}
                        type="cta"
                        style={{margin: '2px 0'}}
                    />
                    <KitMenu.Item
                        title="Restore view"
                        icon={<FontAwesomeIcon icon={faRotateLeft} />}
                        onClick={() => console.log('on click itemMenu')}
                        type="cta"
                        style={{margin: '2px 0 0 0'}}
                    />
                    <KitMenu.Item
                        style={{marginTop: '16px'}}
                        title="Delete view"
                        icon={<FontAwesomeIcon icon={faTrashCan} />}
                        onClick={() => console.log('on click itemMenu')}
                        type="ctaDanger"
                    />
                </KitMenu>
            </div>
        </div>
    )
};
