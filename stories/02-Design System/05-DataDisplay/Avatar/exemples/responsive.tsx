import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {AntDesignOutlined} from '@ant-design/icons';

const App = () => {
    return <KitAvatar size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}} icon={<AntDesignOutlined />} />;
};

export default App;
