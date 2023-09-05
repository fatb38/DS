import React from 'react';
import {KitInputWrapperProps} from './types';
import {KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/theme-context';

const KitInputWrapper: React.FunctionComponent<KitInputWrapperProps> = ({
    label,
    helper,
    disabled,
    status,
    children
}) => {
    const {theme: kitTheme} = useKitTheme();
    const {colors, gap} = kitTheme.components.InputWrapper;

    const getKitInputWrapperTextColor = () => {
        if (disabled) {
            return colors.typography.disabled;
        }

        switch (status) {
            case 'warning':
                return colors.typography.warning;
            case 'error':
                return colors.typography.error;
            default:
                return colors.typography.default;
        }
    };

    const textColor = getKitInputWrapperTextColor();

    return (
        <div className="kit-input-wrapper">
            {label && (
                <div className="kit-input-label" style={{marginBottom: gap.label}}>
                    <KitTypography.Text size="large" weight="medium" style={{color: textColor}}>
                        {label}
                    </KitTypography.Text>
                </div>
            )}
            {children}
            {helper && (
                <div className="kit-input-helper" style={{marginTop: gap.helper}}>
                    <KitTypography.Text size="small" weight="regular" style={{color: textColor}}>
                        * {helper}
                    </KitTypography.Text>
                </div>
            )}
        </div>
    );
};

export default KitInputWrapper;
