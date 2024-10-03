import {IKitSideMenuItemProps} from '@kit/Navigation/SideMenu/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faChartLine,
    faCube,
    faFlag,
    faHome,
    faIndustry,
    faLayerGroup,
    faListCheck,
    faPenToSquare,
    faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import {KitTag} from '@kit/DataDisplay';

export const items: IKitSideMenuItemProps[] = [
    {
        key: 'applications',
        title: 'Accueil',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        key: 'gammes',
        title: 'Gammes',
        icon: <FontAwesomeIcon icon={faLayerGroup} />
    },
    {
        key: 'activeItem',
        title: 'Agenda',
        icon: <FontAwesomeIcon icon={faCalendar} />
    },
    {
        key: 'entreprises',
        title: 'Entreprises',
        icon: <FontAwesomeIcon icon={faIndustry} />
    },
    {
        key: 'disabledItem',
        title: 'Users (disabled)',
        disabled: true,
        icon: <FontAwesomeIcon icon={faUserGroup} />
    },
    {
        type: 'separator'
    },
    {
        key: 'statistics',
        title: 'Statisitques',
        complement: <KitTag type="primary" idCardProps={{description: 'A venir'}} />,
        icon: <FontAwesomeIcon icon={faChartLine} />
    },
    {
        key: 'models',
        title: 'Titre vraiment très long pour voir comment ça se comporte',
        icon: <FontAwesomeIcon icon={faCube} />
    },
    {
        key: 'models_with_tag',
        title: 'Titre vraiment très long pour voir comment ça se comporte',
        complement: <KitTag type="primary" idCardProps={{description: 'A venir'}} />,
        icon: <FontAwesomeIcon icon={faCube} />
    },
    {
        key: 'categories',
        title: 'Catégories',
        icon: <FontAwesomeIcon icon={faPenToSquare} />
    },
    {
        key: 'tasks',
        title: 'Listes de tâches',
        icon: <FontAwesomeIcon icon={faListCheck} />
    },
    {
        key: 'brands',
        title: 'Marques',
        icon: <FontAwesomeIcon icon={faFlag} />
    }
];

export const argTypes = {
    open: {
        name: 'open',
        description: 'Whether the menu is open or not',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'SideMenu'
        }
    },
    showSearch: {
        name: 'showSearch',
        description: 'Whether to show the search input or not',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'SideMenu'
        }
    },
    customContent: {
        name: 'customContent',
        description: 'Custom content to display inside the menu',
        table: {
            type: {
                summary: '(open: boolean) => ReactNode'
            },
            category: 'SideMenu'
        }
    },
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Shortcut to disable double click security on all menu items',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'SideMenu',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    defaultActiveItemKey: {
        name: 'defaultActiveItemKey',
        description: 'Define which item is active by default',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'SideMenu'
        }
    },
    items: {
        name: 'items',
        description: 'List of items to display in the menu',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'IKitSideMenuItem[]'
            },
            category: 'SideMenu'
        }
    },
    autoCompleteOptions: {
        name: 'autoCompleteOptions',
        description: 'options for the search input',
        control: {type: 'object'},
        table: {
            type: {
                summary: 'IKitAutoComplete'
            },
            category: 'SideMenu'
        }
    },
    onMenuClick: {
        name: 'onMenuClick',
        description: 'handler to handle the click on a menu item',
        control: {type: 'none'},
        table: {
            type: {
                summary: '(itemKey: string) => void'
            },
            category: 'SideMenu'
        }
    },
    onOpenChanged: {
        name: 'onOpenChanged',
        description: 'handler triggered when the menu closes or opens',
        table: {
            type: {
                summary: '(open: boolean) => void'
            },
            category: 'SideMenu'
        }
    }
};
