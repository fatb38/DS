import React, {FunctionComponent} from 'react';
import {IKitInputWrapper} from './types';
import {KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/useKitTheme';
import {kitInputWrapperCssTokens} from '@theme/aristid/components/DataEntry/InputWrapper';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {convertToPixel} from '@theme/utils/convert';
import styled from 'styled-components';
import {borderCssTokens} from '@theme/aristid/general/border';
import classNames from 'classnames';

const StyledInputWrapper = styled.div`
    .kit-input-wrapper-label {
        margin-bottom: ${convertToPixel(kitInputWrapperCssTokens.gap.label, spacingCssTokens.xs)};
    }

    .kit-input-wrapper-helper {
        margin-top: ${convertToPixel(kitInputWrapperCssTokens.gap.helper, spacingCssTokens.xs)};
    }

    .kit-input-wrapper-label,
    .kit-input-wrapper-helper {
        &,
        .ant-typography {
            color: var(
                ${kitInputWrapperCssTokens.colors.typography.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        }
    }

    &.bordered .kit-input-wrapper-content {
        border: 1px solid
            var(
                ${kitInputWrapperCssTokens.colors.border.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        border-radius: ${convertToPixel(kitInputWrapperCssTokens.border.radius, borderCssTokens.radius.s)};
        padding: 10px;
    }

    &.error {
        .kit-input-wrapper-label,
        .kit-input-wrapper-helper {
            &,
            .ant-typography {
                color: var(
                    ${kitInputWrapperCssTokens.colors.typography.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }
        .kit-input-wrapper-content {
            border-color: var(
                ${kitInputWrapperCssTokens.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }
    &.warning {
        .kit-input-wrapper-label,
        .kit-input-wrapper-helper {
            &,
            .ant-typography {
                color: var(
                    ${kitInputWrapperCssTokens.colors.typography.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }
        }
        .kit-input-wrapper-content {
            border-color: var(
                ${kitInputWrapperCssTokens.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );
        }
    }

    &.disabled {
        .kit-input-wrapper-label,
        .kit-input-wrapper-helper {
            &,
            .ant-typography {
                color: var(
                    ${kitInputWrapperCssTokens.colors.typography.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }
        .kit-input-wrapper-content {
            border-color: var(
                ${kitInputWrapperCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }
    }
`;

const KitInputWrapper: FunctionComponent<IKitInputWrapper> = ({
    label,
    helper,
    disabled,
    status,
    bordered,
    className,
    children
}) => {
    const {appId} = useKitTheme();

    const _wrapperClassName = classNames('kit-input-wrapper', appId, className ?? '', {
        disabled: disabled,
        bordered: bordered,
        error: status === 'error',
        warning: status === 'warning'
    });

    return (
        <StyledInputWrapper className={_wrapperClassName}>
            {label && (
                <div className="kit-input-wrapper-label">
                    <KitTypography.Text size="large" weight="medium">
                        {label}
                    </KitTypography.Text>
                </div>
            )}
            <div className="kit-input-wrapper-content">{children}</div>
            {helper && (
                <div className="kit-input-wrapper-helper">
                    <KitTypography.Text size="small" weight="regular">
                        * {helper}
                    </KitTypography.Text>
                </div>
            )}
        </StyledInputWrapper>
    );
};

export default KitInputWrapper;
