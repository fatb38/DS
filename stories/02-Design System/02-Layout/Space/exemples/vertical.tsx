import React from 'react';
import {KitSpace, KitButton} from '@kit/index';

const App = ({}) => {
    return (
        <KitSpace direction="vertical" size="middle" style={{display: 'flex'}}>
            <KitButton type="primary">Button</KitButton>
            <KitButton type="primary">Button 2</KitButton>
            <KitButton type="primary">Button 3</KitButton>
        </KitSpace>
    );
};

export default App;
