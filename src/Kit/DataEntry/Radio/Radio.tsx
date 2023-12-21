import React, {forwardRef, useContext} from 'react';
import {Radio, RadioChangeEvent, RadioProps} from 'antd';
import styled from 'styled-components';
import {KitRadioProps} from './types';
import RadioGroupContext from './context';
import {useKitTheme} from '@theme/useKitTheme';
import {RadioRef} from 'antd/es/radio';
import {kitRadioCssTokens} from '@theme/aristid/components/DataEntry/Radio';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

const StyledKitRadio = styled(Radio)`
    font-weight: var(${kitRadioCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
    font-size: calc(var(${kitRadioCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px);
    line-height: var(${kitRadioCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight5}));
    // Unchecked
    .ant-radio {
        .ant-radio-inner {
            border: 1px solid
                var(${kitRadioCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}));
            background-color: var(
                ${kitRadioCssTokens.colors.background.default},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );
        }

        .ant-radio-inner:after {
            transform: scale(0.6);
            visibility: hidden;
            background-color: var(
                ${kitRadioCssTokens.colors.bullet.default},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }

    .ant-radio-checked::after {
        border-color: transparent;
    }

    &.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: 1px solid
            var(
                ${kitRadioCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        background-color: var(
            ${kitRadioCssTokens.colors.background.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
        );

        &:after {
            background-color: var(
                ${kitRadioCssTokens.colors.bullet.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }
    }

    &.ant-radio-wrapper-danger .ant-radio {
        .ant-radio-inner {
            border: 1px solid
                var(
                    ${kitRadioCssTokens.colors.border.danger.default},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            background-color: var(
                ${kitRadioCssTokens.colors.background.danger.default},
                var(${kitColorsPaletteCssTokens.secondary.red.red200})
            );

            &:after {
                background-color: var(
                    ${kitRadioCssTokens.colors.bullet.danger.default},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: var(
                ${kitRadioCssTokens.colors.border.danger.hover},
                var(${kitColorsPaletteCssTokens.secondary.red.red500})
            );
            background-color: var(
                ${kitRadioCssTokens.colors.background.danger.hover},
                var(${kitColorsPaletteCssTokens.secondary.red.red200})
            );

            &:after {
                background-color: var(
                    ${kitRadioCssTokens.colors.bullet.danger.hover},
                    var(${kitColorsPaletteCssTokens.secondary.red.red500})
                );
            }
        }
    }

    &.ant-radio-wrapper-danger.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: 1px solid
            var(
                ${kitRadioCssTokens.colors.border.danger.default},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        background-color: var(
            ${kitRadioCssTokens.colors.background.danger.default},
            var(${kitColorsPaletteCssTokens.secondary.red.red200})
        );

        &:after {
            background-color: var(
                ${kitRadioCssTokens.colors.bullet.danger.default},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }

    &:not(.ant-radio-wrapper-danger):not(.ant-radio-wrapper-disabled) {
        .ant-radio-checked .ant-radio-inner {
            border-color: var(
                ${kitRadioCssTokens.colors.border.checked},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            background-color: var(
                ${kitRadioCssTokens.colors.background.checked},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: var(
                ${kitRadioCssTokens.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary500})
            );
            background-color: var(
                ${kitRadioCssTokens.colors.background.hover},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );

            &:after {
                background-color: var(
                    ${kitRadioCssTokens.colors.bullet.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary500})
                );
            }
        }
    }

    .ant-radio-checked .ant-radio-inner:after {
        visibility: visible;
    }

    // Focus
    &:not(.ant-radio-wrapper-disabled) .ant-radio-input:focus + .ant-radio-inner {
        border-style: dashed;
    }

    &:not(.ant-radio-wrapper-disabled):not(.ant-radio-wrapper-danger) .ant-radio-input:focus + .ant-radio-inner {
        border-color: var(
            ${kitRadioCssTokens.colors.border.checked},
            var(${kitColorsPaletteCssTokens.primary.primary400})
        );
    }

    &:not(.ant-radio-wrapper-disabled) .ant-radio-input:focus-within + .ant-radio-inner::after {
        transform: scale(0.52);
    }

    // active
    &:not(.ant-radio-wrapper-danger) {
        .ant-radio-disabled + span {
            color: var(
                ${kitRadioCssTokens.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }
    }

    .ant-radio-disabled {
        color: var(
            ${kitRadioCssTokens.colors.typography.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
        );
    }

    &.ant-radio-wrapper-danger {
        .ant-radio {
            &.ant-radio-disabled + span {
                color: var(
                    ${kitRadioCssTokens.colors.typography.danger.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.red.red200})
                );
            }
        }
    }

    .ant-radio-checked + span {
        font-weight: var(${kitRadioCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
    }
`;

const KitRadio = forwardRef<RadioRef, KitRadioProps>((props, ref) => {
    const groupContext = useContext(RadioGroupContext);
    const {appId} = useKitTheme();
    const {className, danger, ...rest} = props;

    const _onChange = (e: RadioChangeEvent) => {
        props.onChange?.(e);
        groupContext?.onChange?.(e);
    };

    const radioProps: RadioProps = {...rest};
    if (groupContext) {
        radioProps.name = groupContext.name;
        radioProps.onChange = _onChange;
        radioProps.checked = props.value === groupContext.value;
        radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
    }

    return (
        <StyledKitRadio
            ref={ref}
            className={`${appId} ${className ?? ''} ${danger ? 'ant-radio-wrapper-danger' : ''}`}
            {...radioProps}
        />
    );
});

export default KitRadio;
