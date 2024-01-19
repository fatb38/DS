import React, {FC} from 'react';
import {KitColorPickerProps} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {StyledAntdColorPicker} from './style';

export const KitColorPicker: FC<KitColorPickerProps> = ({
    label,
    className,
    helper,
    rootClassName,
    ...colorPickerProps
}) => {
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
};

KitColorPicker.displayName = 'KitColorPicker';
