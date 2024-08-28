import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';

export const EllipsisTypographyTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Ellipsis</KitTypography.Title>
        <div style={{width: '250px'}}>
            <KitTypography.Paragraph size="fontSize5" weight="medium">
                Simple ellipsis
            </KitTypography.Paragraph>
            <KitTypography.Paragraph ellipsis={true}>
                Aristid Design, a design language for background applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is refined by Aristid UED Team. Aristid Design, a
                design language for background applications, is refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid UED Team. Aristid Design, a design language
                for background applications, is refined by Aristid UED Team. Aristid Design, a design language for
                background applications, is refined by Aristid UED Team.
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="fontSize5" weight="medium">
                Expandable ellipsis
            </KitTypography.Paragraph>
            <KitTypography.Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'more'}}>
                Aristid Design, a design language for background applications, is refined by Aristid UED Team. Aristid
                Design, a design language for background applications, is refined by Aristid UED Team. Aristid Design, a
                design language for background applications, is refined by Aristid UED Team. Aristid Design, a design
                language for background applications, is refined by Aristid UED Team. Aristid Design, a design language
                for background applications, is refined by Aristid UED Team. Aristid Design, a design language for
                background applications, is refined by Aristid UED Team.
            </KitTypography.Paragraph>
        </div>
    </>
);
