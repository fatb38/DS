import React, {ReactNode} from 'react';
import Modal from './Modal';
import {KitButton, KitIcon} from '@kit/General/';
import {IKitConfirmDialog, IKitModal} from './types';
import {useLocale} from 'antd/es/locale';
import {faCheck, faExclamation, faInfo, faTriangleExclamation, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IKitButton} from '@kit/General/Button/types';

const ConfirmDialog = (props: IKitConfirmDialog) => {
    const {
        icon,
        title,
        content,
        image,
        type = 'confirm',
        width,
        portalClassName,
        dangerConfirm,
        okCancel,
        onCancel,
        cancelText,
        onOk,
        okText,
        close,
        isOpen = false,
        ...rest
    } = props;
    const [locale] = useLocale('Modal');

    let mergedIcon: ReactNode = icon;

    if (icon === true || icon === undefined) {
        switch (type) {
            case 'info':
                mergedIcon = <KitIcon icon={<FontAwesomeIcon icon={faInfo} />} on className="kit-confirm-icon" />;
                break;
            case 'success':
                mergedIcon = (
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faCheck} />}
                        on
                        className="kit-confirm-icon kit-confirm-icon-success"
                    />
                );
                break;
            case 'error':
                mergedIcon = (
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faExclamation} />}
                        on
                        className="kit-confirm-icon kit-confirm-icon-error"
                    />
                );
                break;
            case 'warning':
            default:
                mergedIcon = (
                    <KitIcon
                        icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
                        on
                        className="kit-confirm-icon kit-confirm-icon-warning"
                    />
                );
                break;
        }
    }
    const mergedOkCancel = okCancel || type === 'confirm';

    const _onClick = (actionFn: (() => void) | undefined) => () => {
        actionFn && actionFn();
        close && close();
    };

    const cancelButton = mergedOkCancel && (
        <KitButton icon={<FontAwesomeIcon icon={faXmark} />} onClick={_onClick(onCancel)}>
            {cancelText || locale?.cancelText}
        </KitButton>
    );

    const okProps: IKitButton = dangerConfirm
        ? {
              dangerModal: true
          }
        : {
              type: 'primary'
          };

    const OkButton = (
        <KitButton {...okProps} onClick={_onClick(onOk)} icon={<FontAwesomeIcon icon={faCheck} />}>
            {okText || (mergedOkCancel ? locale?.okText : locale?.justOkText)}
        </KitButton>
    );

    const additionalProps: IKitModal = {
        ...rest
    };
    if (props.showCloseIcon) {
        additionalProps.close = _onClick(onCancel);
    }

    return (
        <Modal
            isOpen={isOpen}
            showCloseIcon={false}
            width={width ?? 'auto'}
            style={{content: {minWidth: '350px'}}}
            portalClassName={portalClassName as string}
            title={title}
            footer={
                <>
                    {cancelButton}
                    {OkButton}
                </>
            }
            {...additionalProps}
        >
            <div className="kit-modal-vertical-items-spacing">
                {image && (
                    <div className="kit-confirm-image-wrapper" style={{backgroundImage: 'url(' + image + ')'}}></div>
                )}
                <div className="kit-modal-horizontal-items-spacing">
                    {mergedIcon}
                    <div className="kit-modal-vertical-text-spacing">
                        <div className="ant-modal-body">{content}</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmDialog;
