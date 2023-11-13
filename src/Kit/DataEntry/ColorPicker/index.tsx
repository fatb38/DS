import React, {RefAttributes, forwardRef} from 'react';
import {KitColorPickerProps} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {StyledAntdColorPicker} from './style';

// Note: ref is not supported by Antd for this component right now. Hopefuly it will change in a near futur
export const KitColorPicker = forwardRef<RefAttributes<HTMLDivElement>, KitColorPickerProps>(
    ({label, helper, rootClassName, ...colorPickerProps}, _ref) => {
        const {theme} = useKitTheme();

        return (
            <KitInputWrapper label={label} helper={helper} disabled={colorPickerProps.disabled}>
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
