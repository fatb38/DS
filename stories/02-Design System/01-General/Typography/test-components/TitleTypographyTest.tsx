import React, {FC} from 'react';
import {KitTypography} from '@kit/General';

export const TitleTypographyTest: FC = () => (
    <>
        <KitTypography.Title level="h3">Titles</KitTypography.Title>
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column'}}>
            <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
            <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
        </div>
    </>
);
