import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {SliderMarks} from 'antd/es/slider';
import {ZoomInOutlined, ZoomOutOutlined} from '@ant-design/icons';

const App = () => {
    const marks: SliderMarks = {
        0: '0',
        25: '25',
        50: '50',
        100: {
            style: {
                color: '#f50'
            },
            label: <strong>100</strong>
        }
    };

    return (
        <KitSlider
            range
            defaultValue={[20, 50]}
            marks={marks}
            startIcon={<ZoomOutOutlined />}
            endIcon={<ZoomInOutlined />}
        />
    );
};

export default App;
