import React, {ReactNode} from 'react';
import {KitButton, KitTypography} from '@kit/General/';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpZA, faFilter, faSliders} from '@fortawesome/free-solid-svg-icons';
import {faObjectUngroup} from '@fortawesome/free-regular-svg-icons';

const menuItems = [
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

export const items = [
    {
        title: 'Aristid Design'
    },
    {
        title: <KitTypography.Link href="">Component</KitTypography.Link>
    },
    {
        title: <KitTypography.Link href="">General</KitTypography.Link>,
        menu: {items: menuItems}
    },
    {
        title: 'Button'
    }
];

export const handleButtonClick = e => {
    console.log('click left button', e);
};

export const handleMenuClick = e => {
    console.log('click', e);
};

export const menuProps = {
    items,
    onClick: handleMenuClick
};

export const options = [
    {
        value: 'view',
        icon: <FontAwesomeIcon icon={faSliders} />,
        label: 'Vue'
    },
    {
        value: 'save',
        icon: <FontAwesomeIcon icon={faSliders} />,
        label: 'Enregistrer la vue',
        highlight: true
    }
];

export const actions: ReactNode[] = [
    <KitButton icon={<FontAwesomeIcon icon={faFilter} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faObjectUngroup} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faArrowUpZA} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faSliders} />}>Vue</KitButton>
];

export const breadcrumb = <KitBreadcrumb items={items} />;

export const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

export const title = 'Campagne 1 - soldes rentrée';

export const argTypes = {
    title: {
        name: 'title',
        control: {type: 'text'},
        description: 'Title to display',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        }
    },
    search: {
        name: 'search',
        control: {type: 'boolean'},
        description: 'If set, show a search input. Accepts [Input] porps',
        table: {
            type: {
                summary: 'IKitInput'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        }
    },
    breadcrumb: {
        name: 'breadcrumb',
        control: {type: 'boolean'},
        description: 'Display a breadcrumb. [Breadcrumb]',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        },
        defaultValue: '-'
    },
    actions: {
        name: 'actions',
        control: {type: 'boolean'},
        description: 'Display Actions buttons and / of Selects. (KitButton|KitSelect)[]',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        },
        defaultValue: '-'
    },
    onPlusClick: {
        name: 'onPlusClick',
        description: "When set, show a '+' button on the right, and set the handler to handle `click` event",
        control: {type: 'boolean'},
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: '-'
    }
};

const handleOnPlusClick = () => console.log('click "plus" button');

export const Template = args => {
    const {actions: showActions, breadcrumb: showBreadcrumb, onPlusClick, search, ...props} = args;
    return (
        <KitHeader
            actions={showActions ? actions : undefined}
            breadcrumb={showBreadcrumb ? breadcrumb : undefined}
            search={search ? searchProps : undefined}
            onPlusClick={onPlusClick ? handleOnPlusClick : undefined}
            {...props}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitHeader
            title="Campagne 1 - soldes rentrée"
            search={searchProps}
            breadcrumb={<KitBreadcrumb items={items} />}
            actions={actions}
            onPlusClick={() => console.log('click on plus')}
        />
    );
};
EditorTemplate.path = 'components.Header';
EditorTemplate.title = 'Header';
