import React from 'react';
import {AndroidOutlined, AppleOutlined} from '@ant-design/icons';
import {KitTabs} from '@kit/DataDisplay';

const App = () => (
    <KitTabs
        defaultActiveKey="2"
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);

            return {
                label: (
                    <span>
                        <Icon />
                        Tab {id}
                    </span>
                ),
                key: id,
                children: `Tab ${id}`
            };
        })}
    />
);

export default App;
