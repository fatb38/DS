import React, {Fragment} from 'react';
import {KitTypography, KitDivider} from '@kit/index';

const App = ({}) => {
    return (
        <Fragment>
            <KitTypography.Text>Lorem</KitTypography.Text>
            <KitDivider type="vertical" />
            <KitTypography.Text>ipsum</KitTypography.Text>
            <KitDivider type="vertical" />
            <KitTypography.Text>dolor</KitTypography.Text>
        </Fragment>
    );
};

export default App;
