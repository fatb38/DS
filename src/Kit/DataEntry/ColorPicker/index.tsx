import React, {RefAttributes, forwardRef} from 'react';
import {KitColorPickerProps} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {StyledAntdColorPicker} from './style';

// Note: ref is not supported by Antd for this component right now. Hopefuly it will change in a near futur
export const KitColorPicker = forwardRef<RefAttributes<HTMLDivElement>, KitColorPickerProps>(
    ({label, className, helper, rootClassName, ...colorPickerProps}, _ref) => {
        const {appId} = useKitTheme();

        return (
            <KitInputWrapper label={label} helper={helper} disabled={colorPickerProps.disabled}>
                <StyledAntdColorPicker
                    {...colorPickerProps}
                    rootClassName={`${appId} kit-color-picker ${rootClassName ?? ''}`}
                    className={`${appId} ${className ?? ''}`}
                />
            </KitInputWrapper>
        );
    }
);

KitColorPicker.displayName = 'KitColorPicker';
