import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {HomeOutlined} from '@ant-design/icons';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', backgroundColor: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '350px'}}>
                <KitMenu.Item title="Item menu" />
                <KitMenu.Item icon={<HomeOutlined />} />
                <KitMenu.Item title="Item menu" icon={<HomeOutlined />} />
            </KitSpace>
        </div>
    );
};

export default App;
