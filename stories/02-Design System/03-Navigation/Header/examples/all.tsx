import React, {ReactNode} from 'react';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpZA, faFilter, faSliders} from '@fortawesome/free-solid-svg-icons';
import {faObjectUngroup} from '@fortawesome/free-regular-svg-icons';

const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

const actions: ReactNode[] = [
    <KitButton icon={<FontAwesomeIcon icon={faFilter} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faObjectUngroup} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faArrowUpZA} />}></KitButton>,
    <KitButton icon={<FontAwesomeIcon icon={faSliders} />}>Vue</KitButton>
];

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

const App = () => {
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

export default App;
