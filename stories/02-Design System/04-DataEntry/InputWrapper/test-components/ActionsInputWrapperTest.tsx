import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {KitInputWrapper} from '@kit/DataEntry/';

export const ActionsInputWrapperTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Component actions</KitTypography.Title>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <KitInputWrapper
                label="actions"
                actions={[
                    <KitButton type="tertiary">action</KitButton>,
                    <KitButton type="tertiary">action 2</KitButton>
                ]}
            >
                <KitTypography.Text>Component to wrap with actions</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper
                actions={[
                    <KitButton type="tertiary">action</KitButton>,
                    <KitButton type="tertiary">action 2</KitButton>
                ]}
            >
                <KitTypography.Text>Component to wrap with actions</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper
                disabled
                actions={[
                    <KitButton type="tertiary">action</KitButton>,
                    <KitButton type="tertiary">action 2</KitButton>
                ]}
            >
                <KitTypography.Text>Disabled Component to wrap with actions</KitTypography.Text>
            </KitInputWrapper>
        </div>
    </div>
);
