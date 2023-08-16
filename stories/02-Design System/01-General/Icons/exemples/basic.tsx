import React from 'react';
import {KitIcon, KitSpace} from '@kit/index';
import {DownloadOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace>
            <KitIcon icon={<DownloadOutlined />} />
            <KitIcon icon={<DownloadOutlined />} on />
        </KitSpace>
    );
};

export default App;
