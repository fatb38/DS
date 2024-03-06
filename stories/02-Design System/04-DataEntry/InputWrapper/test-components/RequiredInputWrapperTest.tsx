import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';

export const RequiredInputWrapperTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Required component</KitTypography.Title>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <KitInputWrapper bordered label="required" helper="helper" required>
                <KitTypography.Text>Required Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered disabled label="required" helper="helper" required>
                <KitTypography.Text>Diabled Required Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered helper="helper" required>
                <KitTypography.Text>Required Component to wrap without label</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered helper="helper" required disabled>
                <KitTypography.Text>Required Component to wrap withour label</KitTypography.Text>
            </KitInputWrapper>
        </div>
    </div>
);
