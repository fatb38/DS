import React, {ForwardRefRenderFunction, forwardRef} from 'react';
import {Button as AntdButton} from 'antd';
import {styled} from 'styled-components';
import type {IKitButton, IStyledKitButton, KitButtonCompoundedComponent} from './types';
import {ButtonType} from 'antd/lib/button';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import useSecureClick from '@hooks/useSecureClick';
import {kitButtonCssTokens, kitButtonDefaultCssTokens} from '@theme/aristid/components/General/Button';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdButton = styled(AntdButton)<IStyledKitButton>`
    height: 40px;
    width: 100%;
    min-width: 40px;
    padding: 6.6px 15px;
    box-shadow: none;
    color: ${({$buttonCssTokens}) =>
        `var(${$buttonCssTokens.custom.colors.typography.default}, var(${$buttonCssTokens.default.colors.typography.default}))`};
    background-color: ${({$buttonCssTokens}) =>
        `var(${$buttonCssTokens.custom.colors.background.default}, var(${$buttonCssTokens.default.colors.background.default}))`};
    font-weight: ${({$buttonCssTokens}) =>
        `var(${$buttonCssTokens.custom.typography.fontWeight}, var(${$buttonCssTokens.default.typography.fontWeight}))`};
    font-size: ${convertToPixel(kitButtonCssTokens.typography.fontSize, typographyCssTokens.fontSize5)};
    line-height: var(${kitButtonCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight5}));
    border-radius: ${convertToPixel(kitButtonCssTokens.border.radius, borderCssTokens.radius.pills)};
    font-family: var(${kitButtonCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));

    &[href].ant-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:not(.ant-btn-text) {
        border-color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.border.default}, var(${$buttonCssTokens.default.colors.border.default}))`};
    }

    &.ant-btn .ant-btn-icon svg {
        font-size: ${({$buttonCssTokens, $iconSize}) => {
            if ($iconSize === undefined) {
                return convertToPixel(
                    $buttonCssTokens.custom.typography.iconSize.m,
                    $buttonCssTokens.default.typography.iconSize.m
                );
            }
            return convertToPixel(
                $buttonCssTokens.custom.typography.iconSize[$iconSize],
                $buttonCssTokens.default.typography.iconSize[$iconSize]
            );
        }};
    }

    &.ant-btn-primary.ant-btn-background-ghost {
        color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.typography.ghost}, var(${$buttonCssTokens.default.colors.typography.ghost}))`};
        background-color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.background.ghost}, var(${$buttonCssTokens.default.colors.background.ghost}))`};
    }

    + .kit-btn-segmented-actived-icon {
        position: absolute;
        z-index: 2;
        bottom: 6px;
        right: 5px;
        font-size: 12px;
        color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.typography.iconCheck}, var(${$buttonCssTokens.default.colors.typography.iconCheck}))`};
    }

    &.kit-btn-segmented {
        border-radius: 10px;

        &.kit-btn-segmented-actived:not(.ant-btn-dangerous) {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.active}, var(${$buttonCssTokens.default.colors.typography.active}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.active}, var(${$buttonCssTokens.default.colors.background.active}))`};
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.active}, var(${$buttonCssTokens.default.colors.border.active}))`};
            z-index: 2;

            &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
                &:hover {
                    color: ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.typography.active}, var(${$buttonCssTokens.default.colors.typography.active}))`};
                    background-color: ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.background.active}, var(${$buttonCssTokens.default.colors.background.active}))`};
                }
            }
        }

        &.kit-btn-segmented-actived.ant-btn-dangerous {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.danger.default}, var(${$buttonCssTokens.default.colors.typography.danger.default}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.danger.active}, var(${$buttonCssTokens.default.colors.background.danger.active}))`};
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.danger.active}, var(${$buttonCssTokens.default.colors.border.danger.active}))`};

            &:not(.ant-btn-loading):not(:disabled) {
                &:hover {
                    background-color: ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.background.danger.active}, var(${$buttonCssTokens.default.colors.background.danger.active}))`};
                }
            }
        }

        &:disabled {
            cursor: not-allowed;
        }
    }

    &.ant-btn-compact-item {
        border-radius: 0;

        &.ant-btn-compact-first-item {
            border-radius: ${({$buttonCssTokens}) =>
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                ) +
                ' 0 0 ' +
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                )};
        }

        &.ant-btn-compact-last-item {
            border-radius: ${({$buttonCssTokens}) =>
                '0 ' +
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                ) +
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                ) +
                ' 0'};
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${({$buttonCssTokens}) =>
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                )};
        }
    }

    &.ant-btn-compact-vertical-item {
        border-radius: 0;

        &.ant-btn-compact-vertical-first-item {
            border-radius: ${({$buttonCssTokens}) =>
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                ) +
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                ) +
                ' 0 0'};
        }

        &.ant-btn-compact-vertical-last-item {
            border-radius: ${({$buttonCssTokens}) =>
                '0 0 ' +
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                ) +
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                )};
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${({$buttonCssTokens}) =>
                convertToPixel(
                    $buttonCssTokens.custom.compact.border.radius,
                    $buttonCssTokens.default.compact.border.radius
                )};
        }
    }

    &:disabled,
    &.ant-btn-loading:not(:disabled) {
        color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.typography.disabled}, var(${$buttonCssTokens.default.colors.typography.disabled}))`};
        background-color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.background.disabled}, var(${$buttonCssTokens.default.colors.background.disabled}))`};
        opacity: initial;

        &:not(.ant-btn-text) {
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.disabled}, var(${$buttonCssTokens.default.colors.border.disabled}))`};
        }

        &:hover {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.disabled}, var(${$buttonCssTokens.default.colors.typography.disabled}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.disabled}, var(${$buttonCssTokens.default.colors.background.disabled}))`};

            &:not(.ant-btn-text) {
                border-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.border.disabled}, var(${$buttonCssTokens.default.colors.border.disabled}))`};
            }
        }
    }

    &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
        &:hover {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.hover}, var(${$buttonCssTokens.default.colors.typography.hover}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.hover}, var(${$buttonCssTokens.default.colors.background.hover}))`};
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.hover}, var(${$buttonCssTokens.default.colors.border.hover}))`};
            border-style: solid;
        }

        &:focus {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.focus}, var(${$buttonCssTokens.default.colors.typography.focus}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.focus}, var(${$buttonCssTokens.default.colors.background.focus}))`};
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.focus}, var(${$buttonCssTokens.default.colors.border.focus}))`};
            border-style: dashed;
        }

        &:active {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.active}, var(${$buttonCssTokens.default.colors.typography.active}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.active}, var(${$buttonCssTokens.default.colors.background.active}))`};
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.active}, var(${$buttonCssTokens.default.colors.border.active}))`};
            border-style: solid;
        }
    }

    &.ant-btn-link {
        height: 22px;
        padding: 0px;
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid
            ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.default}, var(${$buttonCssTokens.default.colors.background.default}))`};

        &:disabled {
            border-bottom: none;
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.typography.default}, var(${$buttonCssTokens.default.colors.typography.default}))`};
                border-bottom: 1px solid
                    ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.border.hover}, var(${$buttonCssTokens.default.colors.border.hover}))`};
            }

            &:focus {
                border-bottom: 1px dashed
                    ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.border.focus}, var(${$buttonCssTokens.default.colors.border.focus}))`};
            }

            &:active {
                border-bottom: 1px dashed
                    ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.border.active}, var(${$buttonCssTokens.default.colors.border.active}))`};
            }
        }
    }

    &.ant-btn-dangerous {
        box-shadow: none;
        color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.typography.danger.default}, var(${$buttonCssTokens.default.colors.typography.danger.default}))`};
        background-color: ${({$buttonCssTokens}) =>
            `var(${$buttonCssTokens.custom.colors.background.danger.default}, var(${$buttonCssTokens.default.colors.background.danger.default}))`};

        &:not(.ant-btn-text):not(.ant-btn-link) {
            border-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.border.danger.default}, var(${$buttonCssTokens.default.colors.border.danger.default}))`};
        }

        &:disabled {
            color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.typography.danger.disabled}, var(${$buttonCssTokens.default.colors.typography.danger.disabled}))`};
            background-color: ${({$buttonCssTokens}) =>
                `var(${$buttonCssTokens.custom.colors.background.danger.disabled}, var(${$buttonCssTokens.default.colors.background.danger.disabled}))`};
            opacity: initial;

            &:not(.ant-btn-text) {
                border-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.border.danger.disabled}, var(${$buttonCssTokens.default.colors.border.danger.disabled}))`};
            }
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.typography.danger.default}, var(${$buttonCssTokens.default.colors.typography.danger.default}))`};
                background-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.background.danger.hover}, var(${$buttonCssTokens.default.colors.background.danger.hover}))`};

                &:not(.ant-btn-text) {
                    border-color: ${({$buttonCssTokens}) =>
                        `var(${$buttonCssTokens.custom.colors.border.danger.hover}, var(${$buttonCssTokens.default.colors.border.danger.hover}))`};
                }

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:focus {
                color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.typography.danger.default}, var(${$buttonCssTokens.default.colors.typography.danger.default}))`};
                background-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.background.danger.focus}, var(${$buttonCssTokens.default.colors.background.danger.focus}))`};
                border-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.border.danger.focus}, var(${$buttonCssTokens.default.colors.border.danger.focus}))`};
                border-style: dashed;

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:active {
                color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.typography.danger.default}, var(${$buttonCssTokens.default.colors.typography.danger.default}))`};
                background-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.background.danger.active}, var(${$buttonCssTokens.default.colors.background.danger.active}))`};
                border-color: ${({$buttonCssTokens}) =>
                    `var(${$buttonCssTokens.custom.colors.border.danger.active}, var(${$buttonCssTokens.default.colors.border.danger.active}))`};

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }
        }
    }
`;

const Button: ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, IKitButton> = (
    {
        iconSize,
        primaryModal,
        type,
        segmentedChecked,
        segmentedActived,
        segmentedColor,
        textColor,
        className,
        wrapperClassName,
        wrapperStyle,
        onClick,
        disableSecureClick,
        ...props
    },
    ref
) => {
    const {appId} = useKitTheme();

    const secureClick = useSecureClick(onClick);

    const _getButtonCssTokens = () => {
        if (primaryModal) {
            return {
                custom: kitButtonCssTokens.primary,
                default: kitButtonDefaultCssTokens.primary
            };
        }

        switch (type) {
            case 'primary':
                return {
                    custom: kitButtonCssTokens.primary,
                    default: kitButtonDefaultCssTokens.primary
                };
            case 'link':
                return {
                    custom: kitButtonCssTokens.link,
                    default: kitButtonDefaultCssTokens.link
                };
            case 'text':
                return !textColor
                    ? {
                          custom: kitButtonCssTokens.text.default,
                          default: kitButtonDefaultCssTokens.text.default
                      }
                    : {
                          custom: kitButtonCssTokens.text[textColor],
                          default: kitButtonDefaultCssTokens.text[textColor]
                      };
            case 'segmented':
                return !segmentedColor
                    ? {
                          custom: kitButtonCssTokens.segmented.default,
                          default: kitButtonDefaultCssTokens.segmented.default
                      }
                    : {
                          custom: kitButtonCssTokens.segmented[segmentedColor],
                          default: kitButtonDefaultCssTokens.segmented[segmentedColor]
                      };
            case 'default':
            default:
                return {
                    custom: kitButtonCssTokens.default,
                    default: kitButtonDefaultCssTokens.default
                };
        }
    };

    const _getAntdType = (): ButtonType => {
        if (primaryModal) {
            return 'primary';
        }

        switch (type) {
            case 'segmented':
            default:
                return 'default';
            case 'primary':
            case 'link':
            case 'text':
            case 'default':
                return type;
        }
    };

    const _getClasses = () => {
        let classes = className || '';

        classes += ' ' + appId;
        classes += type === 'segmented' ? ' kit-btn-segmented' : '';
        classes += segmentedActived ? ' kit-btn-segmented-actived' : '';

        return classes;
    };

    return (
        <div
            className={wrapperClassName ?? ''}
            style={{
                position: 'relative',
                display: 'inline-block',
                ...wrapperStyle
            }}
        >
            <StyledAntdButton
                {...props}
                $buttonCssTokens={_getButtonCssTokens()}
                $iconSize={iconSize}
                className={_getClasses()}
                ghost={primaryModal}
                type={_getAntdType()}
                onClick={disableSecureClick ? onClick : secureClick}
                ref={ref}
            ></StyledAntdButton>
            {type === 'segmented' && segmentedChecked && (
                <FontAwesomeIcon icon={faCircleCheck} className="kit-btn-segmented-actived-icon" />
            )}
        </div>
    );
};

export const KitButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IKitButton>(
    Button
) as KitButtonCompoundedComponent;

KitButton.displayName = 'KitButton';
