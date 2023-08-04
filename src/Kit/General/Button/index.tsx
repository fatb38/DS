import React from "react";
import { Button as AntdButton } from "antd";
import { styled, css } from "styled-components";
import {
    primaryTheme,
    linkTheme,
    defaultTheme,
    segmentedTheme,
    segmentedGreenTheme,
    segmentedGrayTheme,
} from "./theme";
import type { KitButtonProps } from "./types";
import { ButtonProps } from "antd/lib/button";
import { ButtonType } from "antd/es/button";
import { CheckCircleFilled } from "@ant-design/icons";

interface StyledAntdButtonProps extends ButtonProps {
    $bigIcon?: boolean;
    ghost?: boolean;
}

const StyledAntdButton = styled(AntdButton)<StyledAntdButtonProps>`
    height: 40px;
    min-width: 40px;
    box-shadow: none;
    color: ${(props) => props.theme.color.default};
    background-color: ${(props) => props.theme.backgroundColor.default};
    border-color: ${(props) => props.theme.borderColor.default};
    font-weight: ${(props) => props.theme.font.weight};

    &.ant-btn.ant-btn-icon-only,
    &.ant-btn {
        .anticon {
            ${(props) =>
                props.$bigIcon &&
                css`
                    padding: 0;
                    font-size: ${props.theme.font.bigIconSize}px;
                `}
        }
    }

    &.ant-btn-primary.ant-btn-background-ghost {
        color: ${(props) => props.theme.backgroundColor.default};
        background-color: ${(props) => props.theme.color.default};
    }

    + .kit-btn-segmented-active-icon {
        position: absolute;
        z-index: 2;
        bottom: 6px;
        right: 5px;
        font-size: 12px;
        color: ${(props) => props.theme.color.iconCheck};
    }

    &.kit-btn-segmented {
        border-radius: 10px;

        &.kit-btn-segmented-active:not(.ant-btn-dangerous) {
            color: ${(props) => props.theme.color.active};
            background-color: ${(props) => props.theme.backgroundColor.active};
            border-color: ${(props) => props.theme.borderColor.active};
            z-index: 2;

            &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
                &:hover {
                    background-color: ${(props) =>
                        props.theme.backgroundColor.active};
                    color: ${(props) => props.theme.color.active};
                }
            }
        }

        &.kit-btn-segmented-active.ant-btn-dangerous {
            color: ${(props) => props.theme.color.danger.default};
            background-color: ${(props) =>
                props.theme.backgroundColor.danger.active};
            border-color: ${(props) => props.theme.borderColor.danger.active};

            &:not(.ant-btn-loading):not(:disabled) {
                &:hover {
                    background-color: ${(props) =>
                        props.theme.backgroundColor.danger.active};
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
            border-radius: ${(props) => props.theme.compactBorderRadius}px 0 0
                ${(props) => props.theme.compactBorderRadius}px;
        }

        &.ant-btn-compact-last-item {
            border-radius: 0 ${(props) => props.theme.compactBorderRadius}px
                ${(props) => props.theme.compactBorderRadius}px 0;
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${(props) => props.theme.compactBorderRadius}px;
        }
    }

    &.ant-btn-compact-vertical-item {
        border-radius: 0;

        &.ant-btn-compact-vertical-first-item {
            border-radius: ${(props) => props.theme.compactBorderRadius}px
                ${(props) => props.theme.compactBorderRadius}px 0 0;
        }

        &.ant-btn-compact-vertical-last-item {
            border-radius: 0 0 ${(props) => props.theme.compactBorderRadius}px
                ${(props) => props.theme.compactBorderRadius}px;
        }

        &.ant-btn-compact-first-item.ant-btn-compact-last-item {
            border-radius: ${(props) => props.theme.compactBorderRadius}px;
        }
    }

    &:disabled,
    &.ant-btn-loading {
        color: ${(props) => props.theme.color.disabled};
        background-color: ${(props) => props.theme.backgroundColor.disabled};
        border-color: ${(props) => props.theme.borderColor.disabled};
        opacity: initial;

        &:hover {
            color: ${(props) => props.theme.color.disabled};
            background-color: ${(props) =>
                props.theme.backgroundColor.disabled};
            border-color: ${(props) => props.theme.borderColor.disabled};
        }
    }

    &:not(.ant-btn-link):not(.ant-btn-loading):not(.ant-btn-dangerous):not(:disabled) {
        &:hover {
            color: ${(props) => props.theme.color.hover};
            background-color: ${(props) => props.theme.backgroundColor.hover};
            border-color: ${(props) => props.theme.borderColor.hover};
            border-style: solid;
        }

        &:focus {
            color: ${(props) => props.theme.color.focus};
            background-color: ${(props) => props.theme.backgroundColor.focus};
            border-color: ${(props) => props.theme.borderColor.focus};
            border-style: dashed;
        }

        &:active {
            color: ${(props) => props.theme.color.active};
            background-color: ${(props) => props.theme.backgroundColor.active};
            border-color: ${(props) => props.theme.borderColor.active};
            border-style: solid;
        }
    }

    &.ant-btn-link {
        height: 22px;
        padding: 0px;
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid ${(props) => props.theme.borderColor.default};

        &:disabled {
            border-bottom: none;
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${(props) => props.theme.color.default};
                border-bottom: 1px dashed
                    ${(props) => props.theme.borderColor.hover};
            }

            &:focus {
                border-bottom: 1px dashed
                    ${(props) => props.theme.borderColor.focus};
            }

            &:active {
                border-bottom: 1px dashed
                    ${(props) => props.theme.borderColor.active};
            }
        }
    }

    &.ant-btn-dangerous {
        box-shadow: none;
        color: ${(props) => props.theme.color.danger.default};
        background-color: ${(props) =>
            props.theme.backgroundColor.danger.default};
        border-color: ${(props) => props.theme.borderColor.danger.default};

        &:disabled {
            color: ${(props) => props.theme.color.danger.disabled};
            background-color: ${(props) =>
                props.theme.backgroundColor.danger.disabled};
            border-color: ${(props) => props.theme.borderColor.danger.disabled};
            opacity: initial;
        }

        &:not(.ant-btn-loading):not(:disabled) {
            &:hover {
                color: ${(props) => props.theme.color.danger.default};
                background-color: ${(props) =>
                    props.theme.backgroundColor.danger.hover};
                border-color: ${(props) =>
                    props.theme.borderColor.danger.hover};

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:focus {
                color: ${(props) => props.theme.color.danger.default};
                background-color: ${(props) =>
                    props.theme.backgroundColor.danger.focus};
                border-color: ${(props) =>
                    props.theme.borderColor.danger.focus};
                border-style: dashed;

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }

            &:active {
                color: ${(props) => props.theme.color.danger.default};
                background-color: ${(props) =>
                    props.theme.backgroundColor.danger.active};
                border-color: ${(props) =>
                    props.theme.borderColor.danger.active};

                &.ant-btn-link {
                    border-width: 0 0 1px 0;
                }
            }
        }
    }
`;

const Button: React.ForwardRefRenderFunction<
    HTMLButtonElement | HTMLAnchorElement,
    KitButtonProps
> = (
    {
        bigIcon,
        primaryModal,
        type,
        subtypeSegmented,
        isCheckedSegmented,
        isActiveSegmented,
        className,
        ...buttonProps
    },
    ref
) => {
    const getThemeToUse = () => {
        if (primaryModal) {
            return primaryTheme;
        }

        switch (type) {
            case "primary":
                return primaryTheme;
            case "link":
                return linkTheme;
            case "segmented":
                switch (subtypeSegmented) {
                    case "green":
                        return segmentedGreenTheme;
                    case "gray":
                        return segmentedGrayTheme;
                    case "default":
                    default:
                        return segmentedTheme;
                }
            case "default":
            default:
                return defaultTheme;
        }
    };

    const getTypeToUseForAntd = (): ButtonType => {
        if (primaryModal) {
            return "primary";
        }
        switch (type) {
            case "segmented":
            default:
                return "default";
            case "primary":
            case "link":
            case "default":
                return type;
        }
    };

    const getClasses = () => {
        let classes = className || "";

        classes += type === "segmented" ? " kit-btn-segmented" : "";
        classes += isActiveSegmented ? " kit-btn-segmented-active" : "";

        return classes;
    };

    return (
        <div
            style={{
                position: "relative",
                width: "fit-content",
            }}
        >
            <StyledAntdButton
                {...buttonProps}
                className={getClasses()}
                $bigIcon={bigIcon}
                ghost={primaryModal}
                theme={getThemeToUse()}
                type={getTypeToUseForAntd()}
                ref={ref}
            ></StyledAntdButton>
            {type === "segmented" && isCheckedSegmented && (
                <CheckCircleFilled
                    className="kit-btn-segmented-active-icon"
                />
            )}
        </div>
    );
};

type CompoundedComponent = React.ForwardRefExoticComponent<
    KitButtonProps & React.RefAttributes<HTMLElement>
>;

export const KitButton = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    KitButtonProps
>(Button) as CompoundedComponent;

KitButton.displayName = "KitButton";
