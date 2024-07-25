import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';

const App = () => (
    <>
        <KitDivider orientation="left">Read only</KitDivider>
        <KitSpace align="start" size="xl">
            <KitSelect placeholder="Select a status" label="Label" readonly />
            <KitSelect placeholder="Select a file" defaultValue="file-2" label="Label" readonly />
        </KitSpace>
        <KitDivider orientation="left">Read only error</KitDivider>
        <KitSpace align="start" size="xl">
            <KitSelect placeholder="Select a status" label="Label" readonly status="error" />
            <KitSelect placeholder="Select a file" defaultValue="file-2" label="Label" readonly status="error" />
        </KitSpace>
    </>
);

export default App;
