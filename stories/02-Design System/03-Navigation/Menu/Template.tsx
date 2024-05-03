import React from 'react';
import {KitButton} from '@kit/General/';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider} from '@kit/Layout/';
import {KitMenu} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFilter,
    faHouse,
    faMagnifyingGlass,
    faMinus,
    faPercent,
    faPlus,
    faRotateLeft,
    faTableColumns
} from '@fortawesome/free-solid-svg-icons';
import {faCopy, faFloppyDisk, faObjectUngroup, faTrashCan} from '@fortawesome/free-regular-svg-icons';
import {IEditorTemplate} from '../../../types';
import {IKitItemMenu} from '@kit/Navigation/Menu/types';
import {CheckboxChangeEvent} from '@kit/DataEntry/Checkbox';

const mockData = {
    itemMenu: {
        title: {
            default: 'Item menu',
            save: 'Save view',
            filters: 'Filters',
            quickFilters: 'Quick Filters',
            layout: 'Layout',
            search: 'Search',
            group: 'Group by',
            duplicate: 'Duplicate',
            undo: 'Restore view',
            delete: 'Delete view'
        },
        icon: {
            home: <FontAwesomeIcon icon={faHouse} />,
            save: <FontAwesomeIcon icon={faFloppyDisk} />,
            filters: <FontAwesomeIcon icon={faFilter} />,
            layout: <FontAwesomeIcon icon={faTableColumns} />,
            search: <FontAwesomeIcon icon={faMagnifyingGlass} />,
            group: <FontAwesomeIcon icon={faObjectUngroup} />,
            duplicate: <FontAwesomeIcon icon={faCopy} />,
            undo: <FontAwesomeIcon icon={faRotateLeft} />,
            delete: <FontAwesomeIcon icon={faTrashCan} />
        },
        actionsOne: [
            {
                icon: <FontAwesomeIcon icon={faPlus} />,
                label: 'Add',
                onClick: () => console.log('on click add')
            }
        ],
        actionsTwo: [
            {
                icon: <FontAwesomeIcon icon={faPlus} />,
                label: 'Add',
                onClick: () => console.log('on click add')
            },
            {
                icon: <FontAwesomeIcon icon={faMinus} />,
                label: 'Subtract',
                onClick: () => console.log('on click subtract')
            }
        ],
        actionsMore: [
            {
                icon: <FontAwesomeIcon icon={faPlus} />,
                label: 'Add',
                onClick: () => console.log('on click add')
            },
            {
                icon: <FontAwesomeIcon icon={faMinus} />,
                label: 'Subtract',
                onClick: () => console.log('on click subtract')
            },
            {
                icon: <FontAwesomeIcon icon={faPercent} />,
                label: 'Percent',
                onClick: () => console.log('on click percent')
            }
        ],
        value: {default: 'Valeur', layout: 'List', filters: '0'},
        onSelectChange: (e: CheckboxChangeEvent) => console.log('selected', e.target.checked),
        onRafterClick: () => console.log('click rafter'),
        onClick: () => console.log('on click itemMenu')
    },
    menu: {
        title: 'View options',
        segmentedButton: <KitButton type="primary" icon={<FontAwesomeIcon icon={faHouse} />} color="green" active />,
        primaryInput: <KitInput placeholder="Opération #1" />,
        secondaryInput: <KitInput placeholder="Description" />,
        onCloseClick: () => console.log('on click close')
    }
};

interface ITemplate extends IKitItemMenu {
    showCloseButton: boolean;
    showSegmentedButton: boolean;
    ShowPrimaryInput: boolean;
    showPrimaryInput: boolean;
    showSecondaryInput: boolean;
    itemMenuTitle: string;
    showItemMenuIcon: boolean;
    itemMenuValue: string;
    showItemMenuActions: boolean;
    showItemMenuCheckbox: boolean;
    showItemMenuRafter: boolean;
}

export const Template = (args: IKitItemMenu) => {
    const props = args as ITemplate;

    const menuProps = {
        title: props.title,
        onCloseClick: props.showCloseButton ? mockData.menu.onCloseClick : undefined,
        segmentedButton: props.showSegmentedButton ? mockData.menu.segmentedButton : undefined,
        primaryInput: props.showPrimaryInput ? mockData.menu.secondaryInput : undefined,
        secondaryInput: props.showSecondaryInput ? mockData.menu.secondaryInput : undefined
    };

    const itemMenuProps: IKitItemMenu = {
        title: props.itemMenuTitle,
        icon: props.showItemMenuIcon ? mockData.itemMenu.icon.home : undefined,
        value: props.itemMenuValue,
        actions: props.showItemMenuActions ? mockData.itemMenu.actionsMore : undefined,
        isSelected: props.isSelected,
        onSelectChange: props.showItemMenuCheckbox ? mockData.itemMenu.onSelectChange : undefined,
        onRafterClick: props.showItemMenuRafter ? mockData.itemMenu.onRafterClick : undefined
    };

    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{width: '400px'}}>
                <KitMenu {...menuProps}>
                    <KitDivider noMargin color="lightGrey" />
                    <KitMenu.Item {...itemMenuProps} />
                </KitMenu>
            </div>
        </div>
    );
};

export const EditorTemplate: IEditorTemplate = () => (
        <KitMenu
            style={{width: '400px'}}
            title={mockData.menu.title}
            onCloseClick={mockData.menu.onCloseClick}
            segmentedButton={mockData.menu.segmentedButton}
            primaryInput={mockData.menu.primaryInput}
            secondaryInput={mockData.menu.secondaryInput}
        >
            <KitDivider noMargin color="lightGrey" />
            <KitMenu.Item
                style={{margin: '8px 0 2px 0'}}
                title={mockData.itemMenu.title.layout}
                icon={mockData.itemMenu.icon.layout}
                value={mockData.itemMenu.value.layout}
                onRafterClick={mockData.itemMenu.onRafterClick}
            />
            <KitMenu.Item
                style={{margin: '2px 0'}}
                title={mockData.itemMenu.title.search}
                icon={mockData.itemMenu.icon.search}
            />
            <KitMenu.Item
                style={{margin: '2px 0'}}
                title={mockData.itemMenu.title.quickFilters}
                actions={mockData.itemMenu.actionsMore}
                onSelectChange={mockData.itemMenu.onSelectChange}
                onRafterClick={mockData.itemMenu.onRafterClick}
            />
            <KitMenu.Item
                style={{margin: '2px 0'}}
                title={mockData.itemMenu.title.filters}
                actions={mockData.itemMenu.actionsMore}
                onSelectChange={mockData.itemMenu.onSelectChange}
                onRafterClick={mockData.itemMenu.onRafterClick}
            />
            <KitDivider noMargin color="lightGrey" />
            <KitMenu.Item
                style={{margin: '16px 0 2px 0'}}
                type="cta"
                title={mockData.itemMenu.title.save}
                icon={mockData.itemMenu.icon.save}
                onClick={mockData.itemMenu.onClick}
            />
            <KitMenu.Item
                style={{marginTop: '16px'}}
                type="ctaDanger"
                title={mockData.itemMenu.title.delete}
                icon={mockData.itemMenu.icon.delete}
                onClick={mockData.itemMenu.onClick}
            />
        </KitMenu>
    );
EditorTemplate.path = 'components.Menu';
EditorTemplate.title = 'Menu';
