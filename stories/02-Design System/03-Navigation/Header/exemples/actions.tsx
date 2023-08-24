import React, {ReactNode} from 'react';
import {KitHeader} from '@kit/Navigation';
import {KitButton} from '@kit/General';
import {ControlOutlined, FilterOutlined, GroupOutlined, SortDescendingOutlined} from '@ant-design/icons';

const actions: ReactNode[] = [
    <KitButton icon={<FilterOutlined />}></KitButton>,
    <KitButton icon={<GroupOutlined />}></KitButton>,
    <KitButton icon={<SortDescendingOutlined />}></KitButton>,
    <KitButton icon={<ControlOutlined />}>Vue</KitButton>
];

const App = () => {
    return <KitHeader actions={actions} />;
};

export default App;
