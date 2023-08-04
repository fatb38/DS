import React from "react";
import { KitMenuProps } from "./types";
import { styled } from "styled-components";
import theme from "@theme/index";
import { KitTypography, KitIcon } from "@kit/General";
import { CloseOutlined } from "@ant-design/icons";

const StyledMenu = styled.div`
    padding: 16px 19px;
    background-color: ${theme.color.neutral.typography.white};

    display: grid;
    grid-template-areas: "header" "content";

    .kit-menu-header {
        grid-area: header;
        display: grid;

        .kit-menu-header-topbar {
            display: grid;
            grid-template-areas: "title close";
            grid-template-columns: 1fr min-content;
            align-items: center;
            margin-bottom: 16px;

            .kit-menu-header-title {
                grid-area: title;
            }

            .kit-menu-header-close {
                grid-area: close;
            }
        }

        .kit-menu-header-primary {
            display: grid;
            grid-template-areas: "button primary-input";
            grid-template-columns: min-content 1fr;
            margin-bottom: 16px;

            .kit-menu-header-button {
                grid-area: button;
                margin-right: 16px;
            }

            .kit-menu-header-primary-input {
                grid-area: primary-input;
            }
        }

        .kit-menu-header-secondary {
            display: grid;
            grid-template-areas: "secondary-input";
            grid-template-columns: 1fr;
            margin-bottom: 16px;

            .kit-menu-header-primary-input {
                grid-area: secondary-input;
            }
        }
    }

    .menu-content {
        grid-area: content;
    }
`;

const KitMenu: React.FunctionComponent<KitMenuProps> = ({
    title,
    onCloseClick,
    segmentedButton,
    primaryInput,
    secondaryInput,
    children,
    ...props
}) => {
    const isClosable = onCloseClick !== undefined;
    const shouldDisplayHeaderTopbar = title !== undefined || isClosable;
    const shouldDisplayHeaderPrimary =
        segmentedButton !== undefined || primaryInput !== undefined;
    const shouldDisplayHeaderSecondary = secondaryInput !== undefined;

    const getTitle = () => {
        return (
            title && (
                <div className="kit-menu-header-title">
                    <KitTypography.Text
                        size="large"
                        weight="medium"
                        ellipsis={{ rows: 1, tooltip: true }}
                    >
                        {title}
                    </KitTypography.Text>
                </div>
            )
        );
    };

    const getCloseIcon = () => {
        return (
            isClosable && (
                <KitIcon
                    className="kit-menu-header-close"
                    icon={<CloseOutlined />}
                    hoverable
                    onClick={() => onCloseClick()}
                />
            )
        );
    };

    const getSegmentedButton = () => {
        if (segmentedButton === undefined) return;

        return (
            <div className="kit-menu-header-button">
                {React.cloneElement(segmentedButton, {
                    type: "segmented",
                    subtypeSegmented: "green",
                })}
            </div>
        );
    };

    const getPrimaryInput = () => {
        if (primaryInput === undefined) return;

        return (
            <div className="kit-menu-header-primary-input">{primaryInput}</div>
        );
    };

    const getSecondaryInput = () => {
        if (secondaryInput === undefined) return;

        return (
            <div className="kit-menu-header-secondary-input">
                {secondaryInput}
            </div>
        );
    };

    return (
        <StyledMenu {...props}>
            <div className="kit-menu-header">
                {shouldDisplayHeaderTopbar && (
                    <div className="kit-menu-header-topbar">
                        {getTitle()}
                        {getCloseIcon()}
                    </div>
                )}
                {shouldDisplayHeaderPrimary && (
                    <div className="kit-menu-header-primary">
                        {getSegmentedButton()}
                        {getPrimaryInput()}
                    </div>
                )}
                {shouldDisplayHeaderSecondary && (
                    <div className="kit-menu-header-secondary">
                        {getSecondaryInput()}
                    </div>
                )}
            </div>
            <div className="menu-content">{children}</div>
        </StyledMenu>
    );
};

export default KitMenu;
