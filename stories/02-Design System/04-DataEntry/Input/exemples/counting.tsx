import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Input</KitDivider>
            <KitSpace align="start">
                <KitInput placeholder="Input" showCount maxLength={20} />
                <KitInput placeholder="Input" showCount maxLength={20} disabled={true} />
            </KitSpace>
            <KitDivider orientation="left">TextArea</KitDivider>
            <KitSpace align="start">
                <KitInput.TextArea placeholder="TextArea" showCount maxLength={120} />
                <KitInput.TextArea placeholder="TextArea" showCount maxLength={120} disabled={true} />
            </KitSpace>
            <KitDivider orientation="left">Password</KitDivider>
            <KitSpace align="start">
                <KitInput.Password showCount maxLength={10} />
                <KitInput.Password showCount maxLength={10} disabled={true} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
