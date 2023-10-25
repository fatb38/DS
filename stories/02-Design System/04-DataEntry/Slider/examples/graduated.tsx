import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';
import {KitSliderMarks} from '@kit/DataEntry/Slider/types';

const marks: KitSliderMarks = {
    0: '0',
    25: '25',
    50: '50',
    100: {
        style: {
            color: '#FF412D'
        },
        label: 100
    }
};

const App = () => {
    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitTypography.Text>included=true</KitTypography.Text>
            <KitSlider marks={marks} defaultValue={25} />
            <KitSlider range marks={marks} defaultValue={[22, 37]} />
            <KitTypography.Text>included=false</KitTypography.Text>
            <KitSlider included={false} marks={marks} defaultValue={25} />
            <KitTypography.Text>marks & step</KitTypography.Text>
            <KitSlider marks={marks} step={10} defaultValue={25} />
            <KitTypography.Text>step=null</KitTypography.Text>
            <KitSlider marks={marks} step={null} defaultValue={25} />
        </KitSpace>
    );
};

export default App;
