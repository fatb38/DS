import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {KitModalProps} from './types';
import {CloseOutlined} from '@ant-design/icons';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/theme-context';
import {IKitModalTheme} from '@theme/types/components/Feedback/Modal';

const StyledOverlay = styled.div<{
    $theme: IKitModalTheme['Overlay'];
}>`
    &.kit-modal-overlay {
        background: ${({$theme}) => $theme.colors.background.default};
        inset: 0px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
`;

const StyledKitModal = styled.div<{
    $theme: IKitModalTheme;
}>`
    font-family: ${({$theme}) => $theme.typography.fontFamily};
    font-size: ${({$theme}) => $theme.typography.fontSize.content}px;
    font-weight: ${({$theme}) => $theme.typography.fontWeight.content};
    background: ${({$theme}) => $theme.colors.background.default};
    border-radius: ${({$theme}) => $theme.border.radius}px;
    box-shadow: ${({$theme}) => $theme.shadow};
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
        font-size: ${({$theme}) => $theme.typography.fontSize.title}px;
        font-weight: ${({$theme}) => $theme.typography.fontWeight.title};
    }

    .kit-confirm-image-wrapper  {
        width: 350px;
        height: 150px;
        border-radius: ${({$theme}) => $theme.border.radius}px;
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
            color: ${({$theme}) => $theme.colors.icon.info};
            background: ${({$theme}) => $theme.colors.background.info};
        }

        &.kit-confirm-icon-success {
            color: ${({$theme}) => $theme.colors.icon.success};
            background: ${({$theme}) => $theme.colors.background.success};
        }

        &.kit-confirm-icon-warning {
            color: ${({$theme}) => $theme.colors.icon.warning};
            background: ${({$theme}) => $theme.colors.background.warning};
        }

        &.kit-confirm-icon-error {
            color: ${({$theme}) => $theme.colors.icon.error};
            background: ${({$theme}) => $theme.colors.background.error};
        }
    }

    .kit-modal-footer {
        margin-top: ${({$theme}) => $theme.spacing.vertical.items}px;
    }
`;

const Modal: React.FunctionComponent<KitModalProps> = ({
    title,
    style,
    width = '520px',
    height = 'initial',
    ...props
}: KitModalProps) => {
    const {theme} = useKitTheme();

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
            <StyledOverlay $theme={theme.components.Modal.Overlay} {...overlayProps} onClick={onOverlayClick}>
                {contentElement}
            </StyledOverlay>
        ),
        overlayClassName: `kit-modal-overlay ${props.overlayClassName}`
    };

    return (
        <ReactModal {...mergedProps} shouldCloseOnOverlayClick={props.showCloseIcon} onRequestClose={onOverlayClick}>
            <StyledKitModal $theme={theme.components.Modal}>
                <div className="kit-modal-content-wrapper">
                    {props.showCloseIcon && <CloseOutlined className="kit-modal-close" onClick={onOverlayClick} />}
                    <div className="kit-modal-title">{title}</div>
                    <div className="kit-modal-content">{props.children}</div>
                    {props.footer && (
                        <KitSpace
                            className="kit-modal-footer"
                            size={theme.components.Modal.spacing.vertical.items}
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
