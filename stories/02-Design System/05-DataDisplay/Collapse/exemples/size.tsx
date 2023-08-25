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
            <KitDivider orientation="left">Small</KitDivider>
            <KitCollapse size="small" items={items} />
            <br />
            <KitDivider orientation="left">Default</KitDivider>
            <KitCollapse items={items} />
            <br />
            <KitDivider orientation="left">Large</KitDivider>
            <KitCollapse size="large" items={items} />
        </div>
    );
};

export default App;
