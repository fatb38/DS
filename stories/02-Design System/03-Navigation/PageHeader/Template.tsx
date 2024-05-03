import {ReactNode} from 'react';
import {KitButton, KitTypography} from '@kit/General/';
import {KitBreadcrumb, KitPageHeader} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpZA, faFilter, faSliders} from '@fortawesome/free-solid-svg-icons';
import {faObjectUngroup} from '@fortawesome/free-regular-svg-icons';
import {IKitHeader} from '@kit/DataDisplay/Collapse/types';

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

const items = [
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

const actions: ReactNode[] = [
    <KitButton icon={<FontAwesomeIcon icon={faFilter} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faObjectUngroup} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faArrowUpZA} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faSliders} />}>Vue</KitButton>
];

const breadcrumb = <KitBreadcrumb items={items} />;

const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

const handleOnPlusClick = () => console.log('click "plus" button');

interface ITemplate extends IKitHeader {
    actions: boolean;
    breadcrumb: boolean;
    onPlusClick: boolean;
    search: boolean;
}

export const Template = (args: IKitHeader) => {
    const {actions: showActions, breadcrumb: showBreadcrumb, onPlusClick, search, ...props} = args as ITemplate;
    return (
        <KitPageHeader
            actions={showActions ? actions : undefined}
            breadcrumb={showBreadcrumb ? breadcrumb : undefined}
            search={search ? searchProps : undefined}
            onPlusClick={onPlusClick ? handleOnPlusClick : undefined}
            {...props}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => (
        <KitPageHeader
            title="Campagne 1 - soldes rentrée"
            search={searchProps}
            breadcrumb={<KitBreadcrumb items={items} />}
            actions={actions}
            onPlusClick={() => console.log('click on plus')}
        />
    );
EditorTemplate.path = 'components.PageHeader';
EditorTemplate.title = 'PageHeader';
