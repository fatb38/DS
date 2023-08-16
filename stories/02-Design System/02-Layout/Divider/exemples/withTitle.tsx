import React, {Fragment} from 'react';
import {KitTypography, KitDivider} from '@kit/index';

const App = ({}) => {
    return (
        <Fragment>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider>Center</KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider orientation="left">Left</KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider orientation="right">Right</KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider orientation="right" orientationMargin="0">
                Right margin 0
            </KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider orientation="right" orientationMargin="50px">
                Right margin 50
            </KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                quae sunt a te dicta? Refert tamen, quo modo.
            </KitTypography.Paragraph>
        </Fragment>
    );
};

export default App;
