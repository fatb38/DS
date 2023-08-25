import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {HomeOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <div style={{width: '350px'}}>
                <KitMenu.Item
                    title="Item menu"
                    icon={<HomeOutlined />}
                    onRafterClick={() => console.log('click rafter')}
                />
            </div>
        </div>
    );
};

export default App;
