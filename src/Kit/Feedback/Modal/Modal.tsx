import React, {FunctionComponent} from 'react';
import ReactModal from 'react-modal';
import {IKitModal} from './types';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {kitModalCssTokens} from '@theme/aristid/components/Feedback/Modal';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {getCssPropertyValue} from '@theme/utils';
import cn from 'classnames';

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
            width: width,
            height: height as string,
            ...style?.content,
            ...(fullscreen
                ? {
                      width: '100%',
                      height: '100%'
                  }
                : {})
        }
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

    const overlayClx = cn(appId, props.overlayClassName as string);

    const mergedProps = {
        ...props,
        style: styles,
        className: clx,
        overlayElement: (overlayProps, contentElement) => <div {...overlayProps}>{contentElement}</div>,
        overlayClassName: overlayClx
    };

    const kitSpaceSize = +(getCssPropertyValue(kitModalCssTokens.spacing.vertical.items)
        ? getCssPropertyValue(kitModalCssTokens.spacing.vertical.items)
        : getCssPropertyValue(spacingCssTokens.m));

    return (
        <ReactModal {...mergedProps} shouldCloseOnOverlayClick={props.showCloseIcon} onRequestClose={_onOverlayClick}>
            <div className={ModalStyles['kit-modal']}>
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
            </div>
        </ReactModal>
    );
};

export default Modal;
