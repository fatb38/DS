import React from 'react';
import {KitTabs} from '@kit/DataDisplay';

const App = () => (
    <KitTabs
        defaultActiveKey="1"
        items={[
            {
                label: 'Tab 1',
                key: '1',
                children: 'Tab 1'
            },
            {
                label: 'Tab 2',
                key: '2',
                children: 'Tab 2',
                disabled: true
            },
            {
                label: 'Tab 3',
                key: '3',
                children: 'Tab 3'
            }
        ]}
    />
);

export default App;
