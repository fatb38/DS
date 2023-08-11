import React from 'react';
import { KitTypography } from "@kit/General/";
import { KitSpace, KitDivider } from "@kit/Layout/";

const App= ({}) => {
    return (
        <KitSpace split={<KitDivider type="vertical" />}>
            <KitTypography.Link>Link</KitTypography.Link>
            <KitTypography.Link>Link</KitTypography.Link>
            <KitTypography.Link>Link</KitTypography.Link>
        </KitSpace>
    );
};

export default App;