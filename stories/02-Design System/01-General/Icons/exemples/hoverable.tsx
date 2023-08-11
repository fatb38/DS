
import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitIcon } from '@kit/General';
import {
    DownloadOutlined
} from "@ant-design/icons";

const App= ({}) => {
    return (
        <KitSpace>
            <KitIcon icon={<DownloadOutlined/>} hoverable />
            <KitIcon icon={<DownloadOutlined/>} hoverable on />
        </KitSpace>
    );
};

export default App;