import React from 'react';
import {KitInputWrapperProps} from './types';
import theme from '@theme/index';
import {KitTypography} from '@kit/General/';

const KitInputWrapper: React.FunctionComponent<KitInputWrapperProps> = ({
    label,
    helper,
    disabled,
    status,
    children
}) => {
    const getKitInputWrapperTextColor = () => {
        if (disabled) {
            return theme.color.secondary.mediumGrey.mediumGrey400;
        }

        switch (status) {
            case 'warning':
                return theme.color.secondary.orange.orange400;
            case 'error':
                return theme.color.secondary.red.red400;
            default:
                return theme.color.secondary.mediumGrey.mediumGrey500;
        }
    };

    const textColor = getKitInputWrapperTextColor();

    return (
        <div className="kit-input-wrapper">
            {label && (
                <div className="kit-input-label" style={{paddingBottom: '4px'}}>
                    <KitTypography.Text size="large" weight="medium" style={{color: textColor}}>
                        {label}
                    </KitTypography.Text>
                </div>
            )}
            {children}
            {helper && (
                <div className="kit-input-helper" style={{paddingTop: '4px'}}>
                    <KitTypography.Text size="small" weight="regular" style={{color: textColor}}>
                        * {helper}
                    </KitTypography.Text>
                </div>
            )}
        </div>
    );
};

export default KitInputWrapper;
