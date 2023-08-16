import React, {useState} from 'react';
import {KitSpace, KitButton} from '@kit/index';
import {Slider} from 'antd';

const App = ({}) => {
    const [size, setSize] = useState(8);

    return (
        <>
            <Slider value={size} onChange={value => setSize(value)} />
            <br />
            <br />
            <KitSpace size={size}>
                <KitButton type="primary">Primary</KitButton>
                <KitButton>Default</KitButton>
                <KitButton type="link">Link</KitButton>
            </KitSpace>
        </>
    );
};

export default App;
