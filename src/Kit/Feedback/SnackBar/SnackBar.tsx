import React, {FunctionComponent} from 'react';
import {styled} from 'styled-components';
import {IKitSnackBar, IStyledKitSnackBar} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {kitSnackBarCssTokens} from '@theme/aristid/components/Feedback/SnackBar';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {closeSnackBar} from './snack-bar-function';
import {convertToPixel} from '@theme/utils/convert';

const StyledSnackBar = styled.div<IStyledKitSnackBar>`
    display: grid;
    grid-template-columns: auto ${({$showCtaContainer}) => ($showCtaContainer ? 'min-content' : '')} ${({
            $showCloseContainer
        }) => ($showCloseContainer ? '12px' : '')};
    column-gap: 8px;
    align-items: center;
    min-height: 24px;
    padding: 8px 16px;
    background-color: var(
        ${kitSnackBarCssTokens.colors.background},
        var(${kitColorsPaletteCssTokens.neutral.grey.grey700})
    );
    border: 1px solid var(${kitSnackBarCssTokens.colors.border}, var(${kitColorsPaletteCssTokens.neutral.grey.grey700}));
    border-radius: 7px;
    box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.3);
    font-family: var(${kitSnackBarCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));

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
            color: var(
                ${kitSnackBarCssTokens.colors.typography.title},
                var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
            );
            font-size: ${convertToPixel(kitSnackBarCssTokens.typography.title.fontSize, typographyCssTokens.fontSize5)};
            font-weight: var(
                ${kitSnackBarCssTokens.typography.title.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
        }

        .kit-snackbar-cta-container {
            height: 23px;
            line-height: 23px;
            width: fit-content;
            padding: 0px 12px;
            border: 0.499px solid
                var(
                    ${kitSnackBarCssTokens.colors.cta.border.default},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey200})
                );
            border-radius: 14px;
            cursor: pointer;

            .kit-snackbar-cta {
                color: var(
                    ${kitSnackBarCssTokens.colors.cta.typography.default},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey200})
                );
                font-size: 10px;
                font-weight: var(
                    ${kitSnackBarCssTokens.typography.cta.fontWeight},
                    var(${typographyCssTokens.mediumfontWeight})
                );
                text-transform: uppercase;
            }

            &:hover {
                border-color: var(
                    ${kitSnackBarCssTokens.colors.cta.border.hover},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
                );

                .kit-snackbar-cta {
                    color: var(
                        ${kitSnackBarCssTokens.colors.cta.typography.hover},
                        var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
                    );
                }
            }
        }

        .kit-snackbar-close-container {
            color: var(
                ${kitSnackBarCssTokens.colors.closeIcon.default},
                var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
            );
            font-size: 12px;
            cursor: pointer;

            &:hover {
                color: var(
                    ${kitSnackBarCssTokens.colors.closeIcon.hover},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey500})
                );
            }
        }
    }
`;

const KitSnackBar: FunctionComponent<IKitSnackBar> = ({message, className, ctaText, ctaOnClick, closable}) => {
    const {appId} = useKitTheme();
    const showCtaContainer = ctaText !== undefined && ctaOnClick !== undefined;
    const showCloseContainer = closable !== undefined;

    return (
        <StyledSnackBar
            $showCtaContainer={showCtaContainer}
            $showCloseContainer={showCloseContainer}
            className={`${appId} ${className ?? ''}`}
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
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            )}
        </StyledSnackBar>
    );
};

export default KitSnackBar;
