import React from 'react';
import {KitTypography, KitDivider} from '@kit/index';

const App = () => {
    return (
        <>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider color="default">Default</KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider color="lightGrey">Light grey</KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
        </>
    );
};

export default App;
