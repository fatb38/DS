import React from 'react';
import {KitIcon, KitSpace} from '@kit/index';
import {DownloadOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace>
            <KitIcon icon={<DownloadOutlined />} onClick={() => console.log('click')} />
            <KitIcon icon={<DownloadOutlined />} hoverable onClick={() => console.log('click')} />
        </KitSpace>
    );
};

export default App;
