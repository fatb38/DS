import React from 'react';
import {KitSpace, KitButton} from '@kit/index';

const App = ({}) => {
    return (
        <KitSpace>
            <KitSpace.Compact direction="vertical">
                <KitButton>Button 1</KitButton>
                <KitButton>Button 2</KitButton>
                <KitButton>Button 3</KitButton>
            </KitSpace.Compact>
            <KitSpace.Compact direction="vertical">
                <KitButton type="segmented">Button 1</KitButton>
                <KitButton type="segmented">Button 2</KitButton>
                <KitButton type="segmented">Button 3</KitButton>
            </KitSpace.Compact>
            <KitSpace.Compact direction="vertical">
                <KitButton type="primary">Button 1</KitButton>
                <KitButton type="primary">Button 2</KitButton>
                <KitButton type="primary">Button 3</KitButton>
            </KitSpace.Compact>
        </KitSpace>
    );
};

export default App;
