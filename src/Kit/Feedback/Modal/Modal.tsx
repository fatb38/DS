import {FunctionComponent} from 'react';
import ReactModal from 'react-modal';
import {IKitModal} from './types';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import {KitButton, KitTypography} from '@kit/General';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

import ModalStyles from './styles.module.scss';

const Modal: FunctionComponent<IKitModal> = ({
    title,
    style,
    width = '520px',
    height = 'initial',
    fullscreen,
    ...props
}: IKitModal) => {
    const {appId} = useKitTheme();

    const styles: IKitModal['style'] = {
        ...style,
        content: {
            ...style?.content,
            ...(fullscreen
                ? {
                      width: '100%'
                  }
                : {})
        }
    };

    const modalStyle = fullscreen
        ? {}
        : {
              width: width,
              height: height as string
          };

    const _onOverlayClick = () => {
        props.showCloseIcon && props.close?.([true]);
    };

    const clx = cn(
        appId,
        'kit-modal-wrapper',
        {
            ['kit-modal-wrapper-fullscreen']: fullscreen
        },
        props.className as string
    );

    const overlayClx = cn(appId, 'kit-modal-overlay', props.overlayClassName as string);

    const mergedProps = {
        ...props,
        style: styles,
        className: clx,
        overlayElement: (overlayProps, contentElement) => <div {...overlayProps}>{contentElement}</div>,
        overlayClassName: overlayClx
    };

    return (
        <ReactModal {...mergedProps} shouldCloseOnOverlayClick={props.showCloseIcon} onRequestClose={_onOverlayClick}>
            <div className={ModalStyles['kit-modal']} style={modalStyle}>
                <div className="kit-modal-header">
                    <div className="kit-modal-title">
                        <KitTypography.Title level="h2">{title}</KitTypography.Title>
                    </div>
                    {props.showCloseIcon && (
                        <KitButton
                            onClick={_onOverlayClick}
                            iconSize="xl"
                            icon={
                                <FontAwesomeIcon icon={faXmark} className="kit-modal-close" onClick={_onOverlayClick} />
                            }
                        ></KitButton>
                    )}
                </div>
                <div className={cn('kit-modal-content-wrapper', {'kit-modal-content-wrapper-max-height': !fullscreen})}>
                    <div className="kit-modal-content">{props.children}</div>
                </div>
                {props.footer && (
                    <KitSpace className="kit-modal-footer" align="end">
                        {props.footer}
                    </KitSpace>
                )}
            </div>
        </ReactModal>
    );
};

export default Modal;
