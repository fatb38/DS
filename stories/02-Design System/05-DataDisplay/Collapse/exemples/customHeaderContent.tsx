import React from 'react';
import {KitCollapse} from '@kit/DataDisplay/';
import {ClockCircleOutlined} from '@ant-design/icons';

const App = () => {
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

    const items = [
        {
            key: '1',
            label: (
                <KitCollapse.Header
                    icon={<ClockCircleOutlined />}
                    imageSrc="/public/images/catalog.jpg"
                    title="Title 1"
                    description="This is a description 1"
                    tagContent={'sprint #5'}
                />
            ),
            children: <p>{text}</p>
        },
        {
            key: '2',
            label: (
                <KitCollapse.Header
                    icon={<ClockCircleOutlined />}
                    imageSrc="/public/images/catalog.jpg"
                    title="Title 2"
                    description="This is a description 2"
                    tagContent={'sprint #6'}
                />
            ),
            children: <p>{text}</p>
        },
        {
            key: '3',
            label: (
                <KitCollapse.Header
                    icon={<ClockCircleOutlined />}
                    imageSrc="/public/images/catalog.jpg"
                    title="Title 3"
                    description="This is a description 3"
                    tagContent={'sprint #7'}
                />
            ),
            children: <p>{text}</p>
        }
    ];

    return (
        <div style={{width: '100%'}}>
            <KitCollapse items={items} />
        </div>
    );
};

export default App;
