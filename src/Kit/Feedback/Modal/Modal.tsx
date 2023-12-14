import React, {FunctionComponent} from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {IKitModal} from './types';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {kitModalCssTokens} from '@theme/aristid/components/Feedback/Modal';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {getCssPropertyValue} from '@theme/utils';

const StyledOverlay = styled.div`
    &.kit-modal-overlay {
        background: var(${kitModalCssTokens.Overlay.colors.background.default}, rgba(0, 0, 0, 0.45));
        inset: 0px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
`;

const StyledKitModal = styled.div`
    font-family: var(${kitModalCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
    font-size: calc(var(${kitModalCssTokens.typography.fontSize.content}, var(${typographyCssTokens.fontSize5})) * 1px);
    font-weight: var(${kitModalCssTokens.typography.fontWeight.content}, var(${typographyCssTokens.regularFontWeight}));
    background: var(${kitModalCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}));
    border-radius: calc(var(${kitModalCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
    box-shadow:
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    padding: 32px 32px 24px 32px;
    display: flex;
    position: relative;

    .kit-modal-content-wrapper {
        flex: 0 1 100%;
        position: relative;
        display: flex;
        flex-direction: column;

        > .kit-modal-title {
            flex: 0 1 auto;
        }

        .kit-modal-content {
            flex: 1 1 auto;
        }

        .kit-modal-close {
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    .kit-modal-title {
        font-size: calc(
            var(${kitModalCssTokens.typography.fontSize.title}, var(${typographyCssTokens.fontSize4})) * 1px
        );
        font-weight: var(${kitModalCssTokens.typography.fontWeight.title}, var(${typographyCssTokens.boldFontWeight}));
    }

    .kit-confirm-image-wrapper {
        min-width: 350px;
        height: 150px;
        border-radius: calc(var(${kitModalCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .kit-confirm-icon {
        font-size: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        padding: 12px;

        &.kit-confirm-icon-info {
            color: var(${kitModalCssTokens.colors.icon.info}, var(${kitColorsPaletteCssTokens.primary.primary400}));
            background: var(
                ${kitModalCssTokens.colors.background.info},
                var(${kitColorsPaletteCssTokens.primary.primary100})
            );
        }

        &.kit-confirm-icon-success {
            color: var(
                ${kitModalCssTokens.colors.icon.success},
                var(${kitColorsPaletteCssTokens.secondary.green.green400})
            );
            background: var(
                ${kitModalCssTokens.colors.background.success},
                var(${kitColorsPaletteCssTokens.secondary.green.green100})
            );
        }

        &.kit-confirm-icon-warning {
            color: var(
                ${kitModalCssTokens.colors.icon.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
            );
            background: var(
                ${kitModalCssTokens.colors.background.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
            );
        }

        &.kit-confirm-icon-error {
            color: var(${kitModalCssTokens.colors.icon.error}, var(${kitColorsPaletteCssTokens.secondary.red.red400}));
            background: var(
                ${kitModalCssTokens.colors.background.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red100})
            );
        }
    }

    .kit-modal-footer {
        margin-top: calc(var(${kitModalCssTokens.spacing.vertical.items}, var(${spacingCssTokens.m})) * 1px);
    }
`;

const Modal: FunctionComponent<IKitModal> = ({
    title,
    style,
    width = '520px',
    height = 'initial',
    ...props
}: IKitModal) => {
    const {appId} = useKitTheme();

    const styles: IKitModal['style'] = {
        ...style,
        content: {
            ...style?.content,
            width: width,
            height: height as string
        }
    };

    const _onOverlayClick = () => {
        props.showCloseIcon && props.close?.([true]);
    };

    const mergedProps = {
        ...props,
        style: styles,
        className: `${appId} kit-modal-wrapper ${props.className}`,
        overlayElement: (overlayProps, contentElement) => (
            <StyledOverlay {...overlayProps}>{contentElement}</StyledOverlay>
        ),
        overlayClassName: `${appId} kit-modal-overlay ${props.overlayClassName}`
    };

    const kitSpaceSize = +(getCssPropertyValue(kitModalCssTokens.spacing.vertical.items)
        ? getCssPropertyValue(kitModalCssTokens.spacing.vertical.items)
        : getCssPropertyValue(spacingCssTokens.m));

    return (
        <ReactModal {...mergedProps} shouldCloseOnOverlayClick={props.showCloseIcon} onRequestClose={_onOverlayClick}>
            <StyledKitModal>
                <div className="kit-modal-content-wrapper">
                    {props.showCloseIcon && (
                        <FontAwesomeIcon icon={faCircleXmark} className="kit-modal-close" onClick={_onOverlayClick} />
                    )}
                    <div className="kit-modal-title">{title}</div>
                    <div className="kit-modal-content">{props.children}</div>
                    {props.footer && (
                        <KitSpace
                            className="kit-modal-footer"
                            size={kitSpaceSize}
                            align="end"
                            style={{justifyContent: 'end', width: '100%'}}
                        >
                            {props.footer}
                        </KitSpace>
                    )}
                </div>
            </StyledKitModal>
        </ReactModal>
    );
};

export default Modal;
