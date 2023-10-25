import React from 'react';
import {KitCollapse} from '@kit/DataDisplay/';

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
            children: (
                <KitCollapse
                    items={[
                        {
                            key: '1',
                            label: 'This is panel nest panel',
                            children: <p>{text}</p>
                        }
                    ]}
                />
            )
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>
        }
    ];

    return (
        <div style={{width: '100%'}}>
            <KitCollapse items={items} defaultActiveKey={1} />
        </div>
    );
};

export default App;
