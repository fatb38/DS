import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const onChange = (value: number | number[]) => {
    console.log('onChange: ', value);
};

const onAfterChange = (value: number | number[]) => {
    console.log('onAfterChange: ', value);
};

const App = () => {
    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitSlider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
            <KitSlider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
        </KitSpace>
    );
};

export default App;
