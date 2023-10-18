import React from 'react';
import {
    HomeOutlined,
    PlusOutlined,
    MinusOutlined,
    PercentageOutlined,
    SaveOutlined,
    FilterOutlined,
    LayoutOutlined,
    SearchOutlined,
    GroupOutlined,
    CopyOutlined,
    UndoOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import {KitButton} from '@kit/General/';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider} from '@kit/Layout/';
import {KitMenu} from '@kit/Navigation';
import {IEditorTemplate} from '../../../types';

export const mockData = {
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
            home: <HomeOutlined />,
            save: <SaveOutlined />,
            filters: <FilterOutlined />,
            layout: <LayoutOutlined />,
            search: <SearchOutlined />,
            group: <GroupOutlined />,
            duplicate: <CopyOutlined />,
            undo: <UndoOutlined />,
            delete: <DeleteOutlined />
        },
        actionsOne: [
            {
                icon: <PlusOutlined />,
                label: 'Add',
                onClick: () => console.log('on click add')
            }
        ],
        actionsTwo: [
            {
                icon: <PlusOutlined />,
                label: 'Add',
                onClick: () => console.log('on click add')
            },
            {
                icon: <MinusOutlined />,
                label: 'Subtract',
                onClick: () => console.log('on click subtract')
            }
        ],
        actionsMore: [
            {
                icon: <PlusOutlined />,
                label: 'Add',
                onClick: () => console.log('on click add')
            },
            {
                icon: <MinusOutlined />,
                label: 'Subtract',
                onClick: () => console.log('on click subtract')
            },
            {
                icon: <PercentageOutlined />,
                label: 'Percent',
                onClick: () => console.log('on click percent')
            }
        ],
        value: {default: 'Valeur', layout: 'List', filters: '0'},
        onSelectChange: e => console.log('selected', e.target.checked),
        onRafterClick: () => console.log('click rafter'),
        onClick: () => console.log('on click itemMenu')
    },
    menu: {
        title: 'View options',
        segmentedButton: <KitButton type="segmented" segmentedActived segmentedColor="green" icon={<HomeOutlined />} />,
        primaryInput: <KitInput placeholder="Opération #1" />,
        secondaryInput: <KitInput placeholder="Description" />,
        onCloseClick: () => console.log('on click close')
    }
};

export const argTypes = {
    showCloseButton: {
        name: 'showCloseButton',
        description: 'Show Menu close button',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showSegmentedButton: {
        name: 'showSegmentedButton',
        description: 'Show Menu segmented button',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showPrimaryInput: {
        name: 'showPrimaryInput',
        description: 'Show Menu primary input',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showSecondaryInput: {
        name: 'showSecondaryInput',
        description: 'Show Menu secondary input',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuIcon: {
        name: 'showItemMenuIcon',
        description: 'Show ItemMenu icon',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuActions: {
        name: 'showItemMenuActions',
        description: 'Show ItemMenu actions',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuCheckbox: {
        name: 'showItemMenuCheckbox',
        description: 'Show ItemMenu checkbox',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuRafter: {
        name: 'showItemMenuRafter',
        description: 'Show ItemMenu rafter',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    title: {
        name: 'title',
        description: 'Title to display on one line',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Menu'
        }
    },
    onCloseClick: {
        name: 'onCloseClick',
        description: 'Display a close button and set the handler to handle click event',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'Function'
            },
            category: 'Menu'
        }
    },
    segmentedButton: {
        name: 'segmentedButton',
        description: 'Display a segmented button',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'ReactElement<IKitButton>'
            },
            category: 'Menu'
        }
    },
    primaryInput: {
        name: 'primaryInput',
        description: 'Display an input filed',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'ReactElement<IKitInput>'
            },
            category: 'Menu'
        }
    },
    secondaryInput: {
        name: 'secondaryInput',
        description: 'Display an second input field',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'ReactElement<IKitInput>'
            },
            category: 'Menu'
        }
    },
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Disable double click security of the item menu',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemMenu',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    itemMenuTitle: {
        name: 'title',
        description: 'Title to display on one line',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuIcon: {
        name: 'icon',
        description: 'Icon to display',
        table: {
            type: {
                summary: 'IconDefinition'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuValue: {
        name: 'value',
        description: 'Value to display at the end of the item',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuActions: {
        name: 'actions',
        description: 'Actions list to display at the end of the item',
        table: {
            type: {
                summary: 'IKitItemMenuActions'
            },
            category: 'ItemMenu'
        }
    },
    isSelected: {
        name: 'isSelected',
        description: 'Selected state of the item menu',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuOnSelectChange: {
        name: 'onSelectChange',
        description: 'The callback function that is triggered when the state changes',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuOnRafterClick: {
        name: 'onRafterClick',
        description: 'Set the handler to handle `click` event on the rafter',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuOnClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event on the itemMenu',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemMenu'
        }
    }
};

export const Template = args => {
    const menuProps = {
        title: args.title,
        onCloseClick: args.showCloseButton ? mockData.menu.onCloseClick : undefined,
        segmentedButton: args.showSegmentedButton ? mockData.menu.segmentedButton : undefined,
        primaryInput: args.showPrimaryInput ? mockData.menu.secondaryInput : undefined,
        secondaryInput: args.showSecondaryInput ? mockData.menu.secondaryInput : undefined
    };

    const itemMenuProps = {
        title: args.itemMenuTitle,
        icon: args.showItemMenuIcon ? mockData.itemMenu.icon.home : undefined,
        value: args.itemMenuValue,
        actions: args.showItemMenuActions ? mockData.itemMenu.actionsMore : undefined,
        isSelected: args.isSelected,
        onSelectChange: args.showItemMenuCheckbox ? mockData.itemMenu.onSelectChange : undefined,
        onRafterClick: args.showItemMenuRafter ? mockData.itemMenu.onRafterClick : undefined
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

export const EditorTemplate: IEditorTemplate = () => {
    return (
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
};
EditorTemplate.path = 'components.Menu';
EditorTemplate.title = 'Menu';
