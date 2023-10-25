import React, {forwardRef} from 'react';
import {KitColorPickerProps} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {StyledAntdColorPicker} from './style';

export const KitColorPicker = forwardRef<React.RefAttributes<HTMLDivElement>, KitColorPickerProps>(
    ({label, helper, rootClassName, ...colorPickerProps}, ref) => {
        const {theme} = useKitTheme();

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={colorPickerProps.disabled}
                // status={colorPickerProps.status} //TODO: No status with Antd ??
            >
                <StyledAntdColorPicker
                    $theme={theme.components.ColorPicker}
                    {...colorPickerProps}
                    rootClassName={`kit-color-picker ${rootClassName}`}
                />
            </KitInputWrapper>
        );
    }
);

KitColorPicker.displayName = 'KitColorPicker';
