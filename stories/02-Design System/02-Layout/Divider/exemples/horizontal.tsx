import React, { Fragment } from 'react';
import { KitTypography } from "@kit/General/";
import { KitDivider } from "@kit/Layout/";

const App= ({}) => {
    return (
        <Fragment>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
                merninisti licere mihi ista probare, quae sunt a te dicta? Refert
                tamen, quo modo.
            </KitTypography.Paragraph>
            <KitDivider>Label</KitDivider>
            <KitTypography.Paragraph size="medium" weight="regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
                merninisti licere mihi ista probare, quae sunt a te dicta? Refert
                tamen, quo modo.
            </KitTypography.Paragraph>
        </Fragment>
    );
};

export default App;