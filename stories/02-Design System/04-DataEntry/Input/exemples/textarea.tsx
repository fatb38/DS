import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitInput.TextArea placeholder="Default" />
                <KitInput.TextArea placeholder="Disabled" disabled={true} />
            </KitSpace>
            <KitDivider />
            <KitSpace align="start">
                <KitInput.TextArea placeholder="Rows is 1" rows={1} />
                <KitInput.TextArea placeholder="Rows is 5" rows={5} />
                <KitInput.TextArea placeholder="MaxLength is 6" maxLength={6} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
