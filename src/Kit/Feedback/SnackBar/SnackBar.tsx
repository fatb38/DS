import React from "react";
import { styled } from "styled-components";
import toast from "react-hot-toast";
import theme from "@theme/index";
import { KitOpenSnackBarProps, KitSnackBarProps } from "./types";
import { CloseOutlined } from "@ant-design/icons";

const DEFAULT_DURATION = 4000;

export const openSnackBar = ({
    message,
    closable,
    ctaText,
    ctaOnClick,
    duration = DEFAULT_DURATION,
}: KitOpenSnackBarProps) => {
    // Close all snackbar
    closeSnackBar();

    return toast(
        <KitSnackBar
            message={message}
            ctaText={ctaText}
            ctaOnClick={ctaOnClick}
            closable={closable}
        />,
        {
            duration: duration,
        }
    );
};

export const closeSnackBar = () => {
    toast.remove();
};

const StyledSnackBar = styled.div<{
    $showCtaContainer: boolean;
    $showCloseContainer: boolean;
}>`
    display: grid;
    grid-template-columns: auto ${(props) =>
            props.$showCtaContainer ? "min-content" : ""} ${(props) =>
            props.$showCloseContainer ? "12px" : ""};
    column-gap: 8px;
    align-items: center;
    height: 24px;
    padding: 8px 16px;
    background-color: ${theme.color.neutral.gray.gray700};
    border: 1px solid ${theme.color.neutral.gray.gray700};
    border-radius: 7px;
    box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.3);
    font-family: ${theme.typography.fontFamily};

    .kit-snackbar-grid-one {
        min-width: 150px;
        grid-column: 1;
    }

    .kit-snackbar-grid-two {
        grid-column: 2;
    }

    .kit-snackbar-grid-three {
        grid-column: ${(props) => (!props.$showCtaContainer ? "2" : "3")};
    }

    .kit-snackbar-grid {
        .kit-snackbar-title {
            color: ${theme.color.neutral.gray.gray400};
            font-size: ${theme.typography.fontSize5};
            font-weight: ${theme.typography.regularFontWeight};
        }

        .kit-snackbar-cta-container {
            height: 23px;
            line-height: 23px;
            width: fit-content;
            padding: 0px 12px;
            border: 0.499px solid ${theme.color.neutral.gray.gray200};
            border-radius: 14px;
            cursor: pointer;

            .kit-snackbar-cta {
                color: ${theme.color.neutral.gray.gray200};
                font-size: 10px;
                font-weight: ${theme.typography.mediumfontWeight};
                text-transform: uppercase;
            }

            &:hover {
                border-color: ${theme.color.neutral.gray.gray400};

                .kit-snackbar-cta {
                    color: ${theme.color.neutral.gray.gray400};
                }
            }
        }

        .kit-snackbar-close-container {
            color: ${theme.color.neutral.gray.gray400};
            font-size: 12px;
            cursor: pointer;

            &:hover {
                color: ${theme.color.neutral.gray.gray500};
            }
        }
    }
`;

const KitSnackBar: React.FunctionComponent<KitSnackBarProps> = ({
    message,
    ctaText,
    ctaOnClick,
    closable,
}) => {
    const showCtaContainer = ctaText !== undefined && ctaOnClick !== undefined;
    const showCloseContainer = closable !== undefined;

    return (
        <StyledSnackBar
            $showCtaContainer={showCtaContainer}
            $showCloseContainer={showCloseContainer}
        >
            <div className="kit-snackbar-grid kit-snackbar-grid-one">
                <div className="kit-snackbar-title">{message}</div>
            </div>
            {showCtaContainer && (
                <div className="kit-snackbar-grid kit-snackbar-grid-two">
                    <div
                        className="kit-snackbar-cta-container"
                        onClick={() => {
                            ctaOnClick();
                            closeSnackBar();
                        }}
                    >
                        <div className="kit-snackbar-cta">{ctaText}</div>
                    </div>
                </div>
            )}
            {showCloseContainer && (
                <div className="kit-snackbar-grid kit-snackbar-grid-three">
                    <div
                        className="kit-snackbar-close-container"
                        onClick={() => closeSnackBar()}
                    >
                        <CloseOutlined />
                    </div>
                </div>
            )}
        </StyledSnackBar>
    );
};

export default KitSnackBar;
