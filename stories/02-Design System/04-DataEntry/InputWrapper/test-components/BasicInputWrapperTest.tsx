import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';

export const BasicInputWrapperTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Basic component</KitTypography.Title>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <KitInputWrapper label="label" helper="helper">
                <KitTypography.Text>Wrapped Component</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper>
                <KitTypography.Text>Wrapped Component with no helper, no label</KitTypography.Text>
            </KitInputWrapper>
        </div>
    </div>
);
