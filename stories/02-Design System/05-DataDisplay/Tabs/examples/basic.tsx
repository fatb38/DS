import React from 'react';
import {KitTabs} from '@kit/DataDisplay';

const onChange = (key: string) => {
    console.log('Tab:', key);
};

const items = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`
    },
    {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`
    }
];

const App = () => <KitTabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
