/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {forwardRef, useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Checkbox, CheckboxRef} from 'antd';
import {IKitCheckbox} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {GroupContext} from './Group';
import {kitCheckboxCssTokens} from '@theme/aristid/components/DataEntry/Checkbox';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import classNames from 'classnames';
import {borderCssTokens} from '@theme/aristid/general/border';
import {convertToPixel} from '@theme/utils/convert';

const StyledKitCheckbox = styled(Checkbox)`
    font-weight: var(${kitCheckboxCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
    font-size: ${convertToPixel(kitCheckboxCssTokens.typography.fontSize, typographyCssTokens.fontSize5)};
    line-height: var(${kitCheckboxCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight5}));
    border-radius: ${convertToPixel(kitCheckboxCssTokens.border.radius, borderCssTokens.radius.xs)};

    .ant-checkbox-inner {
        border-width: ${convertToPixel(kitCheckboxCssTokens.typography.lineWidth, 1)};
    }

    &:not(.ant-checkbox-wrapper-danger) {
        .ant-checkbox-disabled + span {
            color: var(
                ${kitCheckboxCssTokens.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }
    }

    .ant-checkbox-disabled {
        color: var(
            ${kitCheckboxCssTokens.colors.typography.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
        );

        .ant-checkbox-inner {
            background-color: var(
                ${kitCheckboxCssTokens.colors.background.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );
            border: 1px solid
                var(
                    ${kitCheckboxCssTokens.colors.border.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
                );
        }

        .ant-checkbox-inner:after {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }
    }

    .ant-checkbox-indeterminate {
        &:not(.ant-checkbox-disabled) .ant-checkbox-inner {
            background-color: var(
                ${kitCheckboxCssTokens.colors.background.check},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.check},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }

        .ant-checkbox-inner:after {
            width: 8px;
            height: 0;
            border: 1px solid white;
        }

        &.ant-checkbox-disabled .ant-checkbox-inner:after {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }
    }

    &.ant-checkbox-wrapper-danger {
        .ant-checkbox {
            &.ant-checkbox-disabled + span {
                color: var(
                    ${kitCheckboxCssTokens.colors.typography.danger.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.red.red200})
                );
            }

            .ant-checkbox-inner {
                background-color: var(
                    ${kitCheckboxCssTokens.colors.background.danger.default},
                    var(${kitColorsPaletteCssTokens.secondary.red.red200})
                );
                border: 1px solid
                    var(
                        ${kitCheckboxCssTokens.colors.border.danger.default},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
            }
        }

        .ant-checkbox-disabled .ant-checkbox-inner:after {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.danger.default},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }

    .ant-checkbox-checked + span {
        font-weight: var(${kitCheckboxCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
    }

    .ant-checkbox-checked:after {
        border: none;
    }

    &.ant-checkbox-wrapper-danger .ant-checkbox-checked:after {
        border: none;
    }

    // Hover

    &:not(.ant-checkbox-wrapper-disabled):hover,
    &:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:hover {
        .ant-checkbox-inner {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }

    &:not(.ant-checkbox-wrapper-disabled) .ant-checkbox-indeterminate:hover {
        .ant-checkbox-inner {
            background-color: var(
                ${kitCheckboxCssTokens.colors.background.hover},
                var(${kitColorsPaletteCssTokens.primary.primary500})
            );
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }

    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:hover {
        .ant-checkbox-inner {
            background-color: var(
                ${kitCheckboxCssTokens.colors.background.danger.hover},
                var(${kitColorsPaletteCssTokens.secondary.red.red500})
            );
        }
    }

    &.ant-checkbox-wrapper .ant-checkbox-input:focus + .ant-checkbox-inner {
        // TODO change to cards-border-stroke when available
        box-shadow: 0 0 0 3px
            var(${kitCheckboxCssTokens.colors.border.focus}, var(${kitColorsPaletteCssTokens.primary.primary200}));
        border-color: transparent;
    }

    &.ant-checkbox-wrapper-danger .ant-checkbox-input:focus + .ant-checkbox-inner {
        // TODO change to cards-border-stroke when available
        box-shadow: 0 0 0 3px
            var(
                ${kitCheckboxCssTokens.colors.border.danger.focus},
                var(${kitColorsPaletteCssTokens.secondary.red.red200})
            );
    }

    // Focus

    &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):not(.ant-checkbox-wrapper-danger):hover
        .ant-checkbox:focus-within
        .ant-checkbox-inner {
        // TODO change to cards-border-stroke when available
        box-shadow: 0 0 0 3px
            var(${kitCheckboxCssTokens.colors.border.focus}, var(${kitColorsPaletteCssTokens.primary.primary200}));
        border-color: transparent;
        background-color: var(
            ${kitCheckboxCssTokens.colors.background.focus},
            var(${kitColorsPaletteCssTokens.neutral.white})
        );

        &:after {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.focus},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            border-top: 0;
            border-inline-start: 0;
        }
    }

    &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):not(.ant-checkbox-wrapper-danger)
        .ant-checkbox:focus-within
        .ant-checkbox-inner {
        background-color: var(
            ${kitCheckboxCssTokens.colors.background.focus},
            var(${kitColorsPaletteCssTokens.primary.primary400})
        );

        &:after {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.focus},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            border-top: 0;
            border-inline-start: 0;
        }
    }

    &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):not(.ant-checkbox-wrapper-danger)
        .ant-checkbox:focus-within
        .ant-checkbox-inner {
        background-color: var(
            ${kitCheckboxCssTokens.colors.background.focus},
            var(${kitColorsPaletteCssTokens.neutral.white})
        );

        &:after {
            border-color: var(
                ${kitCheckboxCssTokens.colors.border.focus},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            border-inline-start: 0;
            border-width: 2px;
        }
    }

    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:focus-within {
        .ant-checkbox-inner {
            background-color: var(
                ${kitCheckboxCssTokens.colors.background.focus},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );

            &:after {
                border-color: var(
                    ${kitCheckboxCssTokens.colors.border.danger.focus},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
                border-inline-start: 0;
                border-width: 2px;
            }
        }
    }
`;

const KitCheckbox = forwardRef<CheckboxRef, IKitCheckbox>(({danger, className, ...props}, ref) => {
    const checkboxGroup = useContext(GroupContext);
    const {appId} = useKitTheme();
    const mergedDisabled = checkboxGroup?.disabled || props.disabled;
    const prevValue = useRef(props.value);

    useEffect(() => {
        checkboxGroup?.registerValue(props.value);
    }, []);

    useEffect(() => {
        if (props.skipGroup) {
            return;
        }
        if (props.value !== prevValue.current) {
            checkboxGroup?.cancelValue(prevValue.current);
            checkboxGroup?.registerValue(props.value);
            prevValue.current = props.value;
        }
        return () => checkboxGroup?.cancelValue(props.value);
    }, [props.value]);

    const checkboxProps = {...props};
    if (checkboxGroup && !props.skipGroup) {
        checkboxProps.onChange = (...args) => {
            if (props.onChange) {
                props.onChange(...args);
            }
            if (checkboxGroup.toggleOption) {
                checkboxGroup.toggleOption({label: props.children, value: props.value});
            }
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.includes(props.value);
    }

    return (
        <StyledKitCheckbox
            {...checkboxProps}
            ref={ref}
            disabled={mergedDisabled}
            className={classNames(appId, className, danger ? 'ant-checkbox-wrapper-danger' : undefined)}
        />
    );
});

export default KitCheckbox;
