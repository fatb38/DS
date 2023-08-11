
import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitIcon } from '@kit/General';
import {
    DownloadOutlined
} from "@ant-design/icons";

const App= ({}) => {
    return (
        <KitSpace>
            <KitIcon icon={<DownloadOutlined/>} onClick={() => console.log("click")}/>
            <KitIcon icon={<DownloadOutlined/>} hoverable onClick={() => console.log("click")}/>
        </KitSpace>
    );
};

export default App;