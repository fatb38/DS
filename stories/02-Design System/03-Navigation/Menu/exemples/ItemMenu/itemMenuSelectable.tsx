import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {HomeOutlined} from '@ant-design/icons';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '350px'}}>
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    onSelectChange={e => console.log('selected', e.target.checked)}
                />
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    isSelected
                />
            </KitSpace>
        </div>
    );
};

export default App;
