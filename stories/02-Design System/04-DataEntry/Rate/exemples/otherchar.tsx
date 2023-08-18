import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {HeartOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitRate character={<HeartOutlined />} allowHalf />
            <KitRate character="A" allowHalf style={{fontSize: 36}} />
            <KitRate character="好" allowHalf />
        </KitSpace>
    );
};

export default App;
