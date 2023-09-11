import React from 'react';
import {KitTypography, KitDivider} from '@kit/index';

const App = () => {
    return (
        <>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider noMargin />
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider orientation="left" noMargin>
                No margin
            </KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
        </>
    );
};

export default App;
