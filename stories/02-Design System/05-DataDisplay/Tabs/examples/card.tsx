import React from 'react';
import {KitTabs} from '@kit/DataDisplay';

const onChange = (key: string) => {
    console.log('Tab:', key);
};

const App = () => (
    <KitTabs
        onChange={onChange}
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab Pane ${id}`
            };
        })}
    />
);

export default App;
