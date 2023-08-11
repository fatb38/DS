import React, { Fragment, useState } from 'react';
import { KitTypography } from "@kit/General/";
import { KitSwitch } from "@kit/DataEntry";

const App= ({}) => {
    const [ellipsis, setEllipsis] = useState(true);

    const paragraphEllipsis = ellipsis
        ? { rows: 2, expandable: true, symbol: "more" }
        : false;

    const textEllipsis = ellipsis
        ? { tooltip: "I am ellipsis now!" }
        : false;

    const textStyle = ellipsis ? { width: 100 } : undefined;

    return (
        <Fragment>
            <KitSwitch
                checked={ellipsis}
                onChange={() => {
                    setEllipsis(!ellipsis);
                }}
            />
            <KitTypography.Paragraph ellipsis={ellipsis}>
                Aristid Design, a design language for background
                applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is
                refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid
                UED Team. Aristid Design, a design language for background
                applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is
                refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid
                UED Team.
            </KitTypography.Paragraph>
            <KitTypography.Paragraph ellipsis={paragraphEllipsis}>
                Aristid Design, a design language for background
                applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is
                refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid
                UED Team. Aristid Design, a design language for background
                applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is
                refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid
                UED Team.
            </KitTypography.Paragraph>
            <KitTypography.Text style={textStyle} ellipsis={textEllipsis}>
                Aristid Design, a design language for background
                applications, is refined by Aristid UED Team.
            </KitTypography.Text>
        </Fragment>
    );
};

export default App;