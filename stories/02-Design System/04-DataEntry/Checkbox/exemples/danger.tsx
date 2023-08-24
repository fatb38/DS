import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitCheckbox defaultChecked={false} danger>
                Unchecked
            </KitCheckbox>
            <KitCheckbox indeterminate danger>
                Indeterminate
            </KitCheckbox>
            <KitCheckbox defaultChecked danger>
                Checked
            </KitCheckbox>
            <KitCheckbox defaultChecked disabled danger>
                Disabled
            </KitCheckbox>
        </KitSpace>
    );
};

export default App;
