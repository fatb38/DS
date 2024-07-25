import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';

const App = () => (
    <>
        <KitDivider orientation="left">Read only</KitDivider>
        <KitSpace align="start" size="xl">
            <KitInput placeholder="placeholder" label="Label" readonly helper="helper" />
            <KitInput value="input value" label="Label" readonly />
            <div style={{width: '200px'}}>
                <KitInput.TextArea
                    label="Text area"
                    value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    readonly
                />
            </div>
        </KitSpace>
        <KitDivider orientation="left">Read only error</KitDivider>
        <KitSpace align="start" size="xl">
            <KitInput placeholder="placeholder" label="Label" readonly status="error" helper="error" />
            <KitInput value="input value error" placeholder="Readonly" label="Label" readonly status="error" />
            <div style={{width: '200px'}}>
                <KitInput.TextArea
                    label="Text area"
                    value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    readonly
                    status="error"
                />
            </div>
        </KitSpace>
    </>
);

export default App;
