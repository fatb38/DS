import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {SliderMarks} from 'antd/es/slider';
import {ZoomInOutlined, ZoomOutOutlined} from '@ant-design/icons';
import {KitSpace} from '../../../../../src';

const App = () => {
    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitSlider endIcon={<ZoomInOutlined />} />
            <KitSlider startIcon={<ZoomOutOutlined />} />
            <KitSlider startIcon={<ZoomOutOutlined />} endIcon={<ZoomInOutlined />} />
        </KitSpace>
    );
};

export default App;
