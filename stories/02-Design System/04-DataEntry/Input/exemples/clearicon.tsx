import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Input</KitDivider>
            <KitSpace align="start">
                <KitInput placeholder="Input" />
                <KitInput placeholder="Input" allowClear={false} />
            </KitSpace>
            <KitDivider orientation="left">TextArea</KitDivider>
            <KitSpace align="start">
                <KitInput.TextArea placeholder="TextArea" />
                <KitInput.TextArea placeholder="TextArea" allowClear={false} />
            </KitSpace>
            <KitDivider orientation="left">Password</KitDivider>
            <KitSpace align="start">
                <KitInput.Password />
                <KitInput.Password allowClear={false} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
