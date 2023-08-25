import React, {ReactNode} from 'react';
import {KitBreadcrumb, KitHeader} from '@kit/Navigation';
import {KitButton, KitTypography} from '@kit/General';
import {ControlOutlined, FilterOutlined, GroupOutlined, SortDescendingOutlined} from '@ant-design/icons';

const searchProps = {
    allowClear: true,
    placeholder: 'Rechercher un PAC, une opération, un livrable'
};

const actions: ReactNode[] = [
    <KitButton icon={<FilterOutlined />}></KitButton>,
    <KitButton icon={<GroupOutlined />}></KitButton>,
    <KitButton icon={<SortDescendingOutlined />}></KitButton>,
    <KitButton icon={<ControlOutlined />}>Vue</KitButton>
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
