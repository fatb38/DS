import React, { Fragment } from 'react';
import { KitTypography } from "@kit/General/";
import { KitDivider } from "@kit/Layout/";

const App= ({}) => {
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