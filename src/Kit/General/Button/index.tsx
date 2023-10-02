import React from 'react';
import {Button as AntdButton} from 'antd';
import {styled} from 'styled-components';
import type {IKitButtonProps} from './types';
import {ButtonType} from 'antd/lib/button';
import {CheckCircleFilled} from '@ant-design/icons';
import {useKitTheme} from '@theme/theme-context';
import {IKitButtonThemePropeties} from '@theme/types/components/General/Button';

interface StyledAntdButtonProps {
    $theme: IKitButtonThemePropeties;
    $iconSize: IKitButtonProps['iconSize'];
}

const StyledAntdButton = styled(AntdButton)<StyledAntdButtonProps>`
    height: 40px;
    min-width: 40px;
    box-shadow: none;
    color: ${({$theme}) => $theme.colors.typography.default};
    background-color: ${({$theme}) => $theme.colors.background.default};
    font-weight: ${({$theme}) => $theme.typography.fontWeight};

    &[href].ant-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:not(.ant-btn-text) {
        border-color: ${({$theme}) => $theme.colors.border.default};
    }

    &.ant-btn .ant-btn-icon .anticon {
        font-size: ${({$theme, $iconSize}) =>
            $iconSize === undefined ? $theme.typography.iconSize.m : $theme.typography.iconSize[$iconSize]}px;
    }

    &.ant-btn-primary.ant-btn-background-ghost {
        color: ${({$theme}) => $theme.colors.typography.ghost};
        background-color: ${({$theme}) => $theme.colors.background.ghost};
    }

    + .kit-btn-segmented-actived-icon {
        position: absolute;
        z-index: 2;
        bottom: 6px;
        right: 5px;
        font-size: 12px;
        color: ${({$theme}) => $theme.colors.typography.iconCheck};
    }

    &.kit-btn-segmented {
        border-radius: 10px;

        &.kit-btn-segmented-actived:not(.ant-btn-dangerous) {
            color: ${({$theme}) => $theme.colors.typography.active};
            background-color: ${({$theme}) => $theme.colors.background.active};
            border-color: ${({$theme}) => $theme.colors.border.active};
            z-index: 2;

            &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
                &:hover {
                    color: ${({$theme}) => $theme.colors.typography.active};
                    background-color: ${({$theme}) => $theme.colors.background.active};
                }
            }
        }

        &.kit-btn-segmented-actived.ant-btn-dangerous {
            color: ${({$theme}) => $theme.colors.typography.danger.default};
            background-color: ${({$theme}) => $theme.colors.background.danger.active};
            border-color: ${({$theme}) => $theme.colors.border.danger.active};

            &:not(.ant-btn-loading):not(:disabled) {
                &:hover {
                    background-color: ${({$theme}) => $theme.colors.background.danger.active};
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
            border-radius: ${({$theme}) => $theme.compact.border.radius}px 0 0
                ${({$theme}) => $theme.compact.border.radius}px;
        }

        &.ant-btn-compact-last-item {
            border-radius: 0 ${({$theme}) => $theme.compact.border.radius}px
                ${({$theme}) => $theme.compact.border.radius}px 0;
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${({$theme}) => $theme.compact.border.radius}px;
        }
    }

    &.ant-btn-compact-vertical-item {
        border-radius: 0;

        &.ant-btn-compact-vertical-first-item {
            border-radius: ${({$theme}) => $theme.compact.border.radius}px
                ${({$theme}) => $theme.compact.border.radius}px 0 0;
        }

        &.ant-btn-compact-vertical-last-item {
            border-radius: 0 0 ${({$theme}) => $theme.compact.border.radius}px
                ${({$theme}) => $theme.compact.border.radius}px;
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${({$theme}) => $theme.compact.border.radius}px;
        }
    }

    &:disabled,
    &.ant-btn-loading:not(:disabled) {
        color: ${({$theme}) => $theme.colors.typography.disabled};
        background-color: ${({$theme}) => $theme.colors.background.disabled};
        opacity: initial;

        &:not(.ant-btn-text) {
            border-color: ${({$theme}) => $theme.colors.border.disabled};
        }

        &:hover {
            color: ${({$theme}) => $theme.colors.typography.disabled};
            background-color: ${({$theme}) => $theme.colors.background.disabled};

            &:not(.ant-btn-text) {
                border-color: ${({$theme}) => $theme.colors.border.disabled};
            }
        }
    }

    &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
        &:hover {
            color: ${({$theme}) => $theme.colors.typography.hover};
            background-color: ${({$theme}) => $theme.colors.background.hover};
            border-color: ${({$theme}) => $theme.colors.border.hover};
            border-style: solid;
        }

        &:focus {
            color: ${({$theme}) => $theme.colors.typography.focus};
            background-color: ${({$theme}) => $theme.colors.background.focus};
            border-color: ${({$theme}) => $theme.colors.border.focus};
            border-style: dashed;
        }

        &:active {
            color: ${({$theme}) => $theme.colors.typography.active};
            background-color: ${({$theme}) => $theme.colors.background.active};
            border-color: ${({$theme}) => $theme.colors.border.active};
            border-style: solid;
        }
    }

    &.ant-btn-link {
        height: 22px;
        padding: 0px;
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid ${({$theme}) => $theme.colors.background.default};

        &:disabled {
            border-bottom: none;
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${({$theme}) => $theme.colors.typography.default};
                border-bottom: 1px solid ${({$theme}) => $theme.colors.border.hover};
            }

            &:focus {
                border-bottom: 1px dashed ${({$theme}) => $theme.colors.border.focus};
            }

            &:active {
                border-bottom: 1px dashed ${({$theme}) => $theme.colors.border.active};
            }
        }
    }

    &.ant-btn-dangerous {
        box-shadow: none;
        color: ${({$theme}) => $theme.colors.typography.danger.default};
        background-color: ${({$theme}) => $theme.colors.background.danger.default};

        &:not(.ant-btn-text):not(.ant-btn-link) {
            border-color: ${({$theme}) => $theme.colors.border.danger.default};
        }

        &:disabled {
            color: ${({$theme}) => $theme.colors.typography.danger.disabled};
            background-color: ${({$theme}) => $theme.colors.background.danger.disabled};
            opacity: initial;

            &:not(.ant-btn-text) {
                border-color: ${({$theme}) => $theme.colors.border.danger.disabled};
            }
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${({$theme}) => $theme.colors.typography.danger.default};
                background-color: ${({$theme}) => $theme.colors.background.danger.hover};

                &:not(.ant-btn-text) {
                    border-color: ${({$theme}) => $theme.colors.border.danger.hover};
                }

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:focus {
                color: ${({$theme}) => $theme.colors.typography.danger.default};
                background-color: ${({$theme}) => $theme.colors.background.danger.focus};
                border-color: ${({$theme}) => $theme.colors.border.danger.focus};
                border-style: dashed;

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:active {
                color: ${({$theme}) => $theme.colors.typography.danger.default};
                background-color: ${({$theme}) => $theme.colors.background.danger.active};
                border-color: ${({$theme}) => $theme.colors.border.danger.active};

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }
        }
    }
`;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, IKitButtonProps> = (
    {
        iconSize,
        primaryModal,
        type,
        segmentedChecked,
        segmentedActived,
        segmentedColor,
        className,
        wrapperClassName,
        wrapperStyle,
        ...buttonProps
    },
    ref
) => {
    const {theme: kitTheme} = useKitTheme();
    const theme = kitTheme.components.Button;

    const getTheme = () => {
        switch (type) {
            case 'primary':
                return theme.primary;
            case 'link':
                return theme.link;
            case 'text':
                return theme.text;
            case 'segmented':
                return !segmentedColor ? theme.segmented.default : theme.segmented[segmentedColor];
            case 'default':
            default:
                return theme.default;
        }
    };

    const getAntdType = (): ButtonType => {
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

    const getClasses = () => {
        let classes = className || '';

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
                $theme={getTheme()}
                $iconSize={iconSize}
                {...buttonProps}
                className={getClasses()}
                ghost={primaryModal}
                type={getAntdType()}
                ref={ref}
            ></StyledAntdButton>
            {type === 'segmented' && segmentedChecked && (
                <CheckCircleFilled className="kit-btn-segmented-actived-icon" />
            )}
        </div>
    );
};

type CompoundedComponent = React.ForwardRefExoticComponent<IKitButtonProps & React.RefAttributes<HTMLElement>>;

export const KitButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, IKitButtonProps>(
    Button
) as CompoundedComponent;

KitButton.displayName = 'KitButton';
