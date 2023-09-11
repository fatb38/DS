import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitRate defaultValue={3} />
            <KitTypography.Text>allowClear: true</KitTypography.Text>
            <br />
            <KitRate defaultValue={3} allowClear={false} />
            <KitTypography.Text>allowClear: false</KitTypography.Text>
        </KitSpace>
    );
};

export default App;
