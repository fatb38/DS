import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {KitModalProps} from './types';
import {modalTheme} from './theme';
import {CloseOutlined} from '@ant-design/icons';
import {KitSpace} from '@kit/Layout/';

const StyledOverlay = styled.div`
    &.kit-modal-overlay {
        background: ${modalTheme.overlayColor};
        inset: 0px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
`;

const StyledKitModal = styled(ReactModal)<KitModalProps>`
    font-family: ${modalTheme.fontFamily};

    &.kit-modal-wrapper {
        background: ${modalTheme.backgroundColor};
        border-radius: ${modalTheme.borderRadius}px;
        box-shadow: ${modalTheme.boxShadow};
        font-size: ${modalTheme.fontSize.content}px;
        font-weight: ${modalTheme.fontWeight.content};
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
    }

    .kit-modal-title {
        font-size: ${modalTheme.fontSize.title}px;
        font-weight: ${modalTheme.fontWeight.title};
    }

    .kit-confirm-image-wrapper  {
        width: 350px;
        height: 150px;
        /* border: 1px solid ${modalTheme.imageBorderColor}; */
        border-radius: ${modalTheme.borderRadius}px;
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

        &.kit-confirm-icon-success {
            color: ${modalTheme.icon.successColor};
            background: ${modalTheme.icon.successBgColor};
        }

        &.kit-confirm-icon-warning {
            color: ${modalTheme.icon.warngingColor};
            background: ${modalTheme.icon.warngingBgColor};
        }

        &.kit-confirm-icon-error {
            color: ${modalTheme.icon.errorColor};
            background: ${modalTheme.icon.errorBgColor};
        }
    }

    .kit-modal-footer {
        margin-top: ${modalTheme.itemsVerticalSpacing}px;
    }
`;

const Modal: React.FC<KitModalProps> = ({
    title,
    style,
    width = '520px',
    height = 'initial',
    ...props
}: KitModalProps) => {
    const styles = {
        ...style,
        content: {...style?.content, width: width, height: height}
    };

    const onOverlayClick = () => {
        props.showCloseIcon && props.close?.([true]);
    };

    const mergedProps = {
        ...props,
        style: styles,
        className: `kit-modal-wrapper ${props.className}`,
        overlayElement: (overlayProps, contentElement) => (
            <StyledOverlay {...overlayProps} onClick={onOverlayClick}>
                {contentElement}
            </StyledOverlay>
        ),
        overlayClassName: `kit-modal-overlay ${props.overlayClassName}`
    };

    return (
        <StyledKitModal
            {...mergedProps}
            shouldCloseOnOverlayClick={props.showCloseIcon}
            onRequestClose={onOverlayClick}
        >
            <div className="kit-modal-content-wrapper">
                {props.showCloseIcon && <CloseOutlined className="kit-modal-close" onClick={onOverlayClick} />}
                <div className="kit-modal-title">{title}</div>
                <div className="kit-modal-content">{props.children}</div>
                {props.footer && (
                    <KitSpace
                        className="kit-modal-footer"
                        size={modalTheme.itemsVerticalSpacing}
                        align="end"
                        style={{justifyContent: 'end', width: '100%'}}
                    >
                        {props.footer}
                    </KitSpace>
                )}
            </div>
        </StyledKitModal>
    );
};

export default Modal;
