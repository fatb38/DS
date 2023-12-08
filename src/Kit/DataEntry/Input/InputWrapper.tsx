import React, {FunctionComponent} from 'react';
import {IKitInputWrapper} from './types';
import {KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/theme-context';
import {kitInputWrapperCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';

const KitInputWrapper: FunctionComponent<IKitInputWrapper> = ({
    label,
    helper,
    disabled,
    status,
    className,
    children
}) => {
    const {appId} = useKitTheme();

    const _getTextColor = () => {
        let customCssVariable = '';
        let defaultCssVariable = '';

        switch (status) {
            case 'warning':
                customCssVariable = kitInputWrapperCssTokens.colors.typography.warning;
                defaultCssVariable = kitColorsPaletteCssTokens.secondary.orange.orange400;
                break;
            case 'error':
                customCssVariable = kitInputWrapperCssTokens.colors.typography.error;
                defaultCssVariable = kitColorsPaletteCssTokens.secondary.red.red400;
                break;
            default:
                customCssVariable = kitInputWrapperCssTokens.colors.typography.default;
                defaultCssVariable = kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500;
                break;
        }

        if (disabled) {
            customCssVariable = kitInputWrapperCssTokens.colors.typography.disabled;
            defaultCssVariable = kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400;
        }

        return `var(${customCssVariable}, var(${defaultCssVariable}))`;
    };

    const _getLabelGap = () => {
        return `calc(var(${kitInputWrapperCssTokens.gap.label}, var(${spacingCssTokens.xs})) * 1px)`;
    };

    const _getHelperGap = () => {
        return `calc(var(${kitInputWrapperCssTokens.gap.helper}, var(${spacingCssTokens.xs})) * 1px)`;
    };

    return (
        <div className={`kit-input-wrapper ${appId} ${className ?? ''}`}>
            {label && (
                <div className="kit-input-label" style={{marginBottom: _getLabelGap()}}>
                    <KitTypography.Text size="large" weight="medium" style={{color: _getTextColor()}}>
                        {label}
                    </KitTypography.Text>
                </div>
            )}
            {children}
            {helper && (
                <div className="kit-input-helper" style={{marginTop: _getHelperGap()}}>
                    <KitTypography.Text size="small" weight="regular" style={{color: _getTextColor()}}>
                        * {helper}
                    </KitTypography.Text>
                </div>
            )}
        </div>
    );
};

export default KitInputWrapper;
