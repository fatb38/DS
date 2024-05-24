import React from 'react';
import {KitTooltip} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace>
            <KitTooltip title="prompt text">
                <KitTypography.Paragraph size="medium" weight="regular">
                    Tooltip will show on mouse enter.
                </KitTypography.Paragraph>
            </KitTooltip>
        </KitSpace>
    );

export default App;
