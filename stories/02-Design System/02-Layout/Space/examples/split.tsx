import React from 'react';
import {KitTypography, KitSpace, KitDivider} from '@kit/index';

const App = () => (
        <KitSpace split={<KitDivider type="vertical" />}>
            <KitTypography.Link>Link</KitTypography.Link>
            <KitTypography.Link>Link</KitTypography.Link>
            <KitTypography.Link>Link</KitTypography.Link>
        </KitSpace>
    );

export default App;
