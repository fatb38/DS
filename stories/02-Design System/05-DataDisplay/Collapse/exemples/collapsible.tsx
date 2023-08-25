import React from 'react';
import {KitCollapse} from '@kit/DataDisplay/';
import {KitDivider} from '@kit/Layout';

const App = () => {
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>
        }
    ];

    return (
        <div style={{width: '100%'}}>
            <KitDivider orientation="left">Header</KitDivider>
            <KitCollapse collapsible="header" items={items} />
            <br />
            <KitDivider orientation="left">Icon</KitDivider>
            <KitCollapse collapsible="icon" items={items} />
            <br />
            <KitDivider orientation="left">Disabled</KitDivider>
            <KitCollapse collapsible="disabled" items={items} />
            <br />
        </div>
    );
};

export default App;
