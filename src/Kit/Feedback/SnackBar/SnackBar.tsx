import React from 'react';
import {styled} from 'styled-components';
import toast from 'react-hot-toast';
import {KitOpenSnackBarProps, KitSnackBarProps} from './types';
import {CloseOutlined} from '@ant-design/icons';
import {IKitSnackBarTheme} from '@theme/types/components/Feedback/SnackBar';
import {useKitTheme} from '@theme/theme-context';

const DEFAULT_DURATION = 4000;

export const openSnackBar = ({
    message,
    closable,
    ctaText,
    ctaOnClick,
    duration = DEFAULT_DURATION
}: KitOpenSnackBarProps) => {
    // Close all snackbar
    closeSnackBar();

    return toast(<KitSnackBar message={message} ctaText={ctaText} ctaOnClick={ctaOnClick} closable={closable} />, {
        duration: duration
    });
};

export const closeSnackBar = () => {
    toast.remove();
};

const StyledSnackBar = styled.div<{
    $theme: IKitSnackBarTheme;
    $showCtaContainer: boolean;
    $showCloseContainer: boolean;
}>`
    display: grid;
    grid-template-columns: auto ${({$showCtaContainer}) => ($showCtaContainer ? 'min-content' : '')} ${({
            $showCloseContainer
        }) => ($showCloseContainer ? '12px' : '')};
    column-gap: 8px;
    align-items: center;
    min-height: 24px;
    padding: 8px 16px;
    background-color: ${({$theme}) => $theme.colors.background};
    border: 1px solid ${({$theme}) => $theme.colors.border};
    border-radius: 7px;
    box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.3);
    font-family: ${({$theme}) => $theme.typography.fontFamily};

    .kit-snackbar-grid-one {
        min-width: 150px;
        grid-column: 1;
    }

    .kit-snackbar-grid-two {
        grid-column: 2;
    }

    .kit-snackbar-grid-three {
        grid-column: ${({$showCtaContainer}) => (!$showCtaContainer ? '2' : '3')};
    }

    .kit-snackbar-grid {
        .kit-snackbar-title {
            color: ${({$theme}) => $theme.colors.typography.title};
            font-size: ${({$theme}) => $theme.typography.title.fontSize};
            font-weight: ${({$theme}) => $theme.typography.title.fontWeight};
        }

        .kit-snackbar-cta-container {
            height: 23px;
            line-height: 23px;
            width: fit-content;
            padding: 0px 12px;
            border: 0.499px solid ${({$theme}) => $theme.colors.cta.border.default};
            border-radius: 14px;
            cursor: pointer;

            .kit-snackbar-cta {
                color: ${({$theme}) => $theme.colors.cta.typography.default};
                font-size: 10px;
                font-weight: ${({$theme}) => $theme.typography.cta.fontWeight};
                text-transform: uppercase;
            }

            &:hover {
                border-color: ${({$theme}) => $theme.colors.cta.border.hover};

                .kit-snackbar-cta {
                    color: ${({$theme}) => $theme.colors.cta.typography.hover};
                }
            }
        }

        .kit-snackbar-close-container {
            color: ${({$theme}) => $theme.colors.closeIcon.default};
            font-size: 12px;
            cursor: pointer;

            &:hover {
                color: ${({$theme}) => $theme.colors.closeIcon.hover};
            }
        }
    }
`;

const KitSnackBar: React.FunctionComponent<KitSnackBarProps> = ({message, ctaText, ctaOnClick, closable}) => {
    const {theme} = useKitTheme();
    const showCtaContainer = ctaText !== undefined && ctaOnClick !== undefined;
    const showCloseContainer = closable !== undefined;

    return (
        <StyledSnackBar
            $theme={theme.components.SnackBar}
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
                    <div className="kit-snackbar-close-container" onClick={() => closeSnackBar()}>
                        <CloseOutlined />
                    </div>
                </div>
            )}
        </StyledSnackBar>
    );
};

export default KitSnackBar;
