import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';

export const DisabledInputWrapperTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Disabled component</KitTypography.Title>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <KitInputWrapper bordered label="label" helper="helper" disabled>
                <KitTypography.Text>Bordered Wrapped Component</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper label="label" helper="helper" disabled>
                <KitTypography.Text>Wrapped Component</KitTypography.Text>
            </KitInputWrapper>
        </div>
    </div>
);
