import React, {useState} from 'react';
import {KitSpace, KitButton, KitTypography} from '@kit/index';
import {Slider} from 'antd';

const App = () => {
    const [size, setSize] = useState(8);

    return (
        <>
            <Slider value={size} onChange={value => setSize(value)} />
            <br />
            <br />
            <KitSpace size={size}>
                <KitButton type="primary">Primary</KitButton>
                <KitButton>Default</KitButton>
                <KitTypography.Link>Link</KitTypography.Link>
            </KitSpace>
        </>
    );
};

export default App;
