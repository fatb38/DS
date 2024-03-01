import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';

export const BorderInputWrapperTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Bordered component</KitTypography.Title>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <KitInputWrapper bordered label="label" helper="helper">
                <KitTypography.Text>Bordered Wrapped Component</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered>
                <KitTypography.Text>Wrapped Component with no helper, no label</KitTypography.Text>
            </KitInputWrapper>
        </div>
    </div>
);
