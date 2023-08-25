import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {SaveOutlined} from '@ant-design/icons';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '350px'}}>
                <KitMenu.Item title="Save view" icon={<SaveOutlined />} type="default" />
                <KitMenu.Item title="Save view" icon={<SaveOutlined />} type="cta" />
                <KitMenu.Item title="Save view" icon={<SaveOutlined />} type="ctaDanger" />
            </KitSpace>
        </div>
    );
};

export default App;
