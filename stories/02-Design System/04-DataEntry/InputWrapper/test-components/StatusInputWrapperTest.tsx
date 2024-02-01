import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';

export const StatusInputWrapperTest: FC = () => (
    <>
        <div>
            <KitTypography.Title level="h3">Status component</KitTypography.Title>
            <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
                <KitInputWrapper label="label" helper="helper">
                    <KitTypography.Text>Wrapped Component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper status="error" label="label" helper="helper">
                    <KitTypography.Text>Wrapped Component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper status="warning" label="label" helper="helper">
                    <KitTypography.Text>Wrapped Component</KitTypography.Text>
                </KitInputWrapper>
            </div>
        </div>
        <div>
            <KitTypography.Title level="h3">Status component bordered</KitTypography.Title>
            <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
                <KitInputWrapper bordered label="label" helper="helper">
                    <KitTypography.Text>Bordered Wrapped Component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper bordered status="error" label="label" helper="helper">
                    <KitTypography.Text>Bordered Wrapped Component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper bordered status="warning" label="label" helper="helper">
                    <KitTypography.Text>Bordered Wrapped Component</KitTypography.Text>
                </KitInputWrapper>
            </div>
        </div>
    </>
);
