import React, {ReactNode} from 'react';
import Modal from './Modal';
import {KitInfoOutlined, KitWarningOutlined} from '../../../icons';
import {CheckOutlined, ExclamationOutlined} from '@ant-design/icons';
import {KitButton, KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {IKitConfirmDialog} from './types';
import {useLocale} from 'antd/lib/locale';
import {useKitTheme} from '@theme/theme-context';

const ConfirmDialog = ({
    icon,
    title,
    firstLine,
    secondLine,
    image,
    type = "confirm",
    isOpen,
    width,
    portalClassName,
    okCancel,
    onCancel,
    cancelText,
    onOk,
    okText,
    close,
    ...props
}: IKitConfirmDialog) => {
    const {theme: kitTheme} = useKitTheme();
    const theme = kitTheme.components.Modal;
    const [locale] = useLocale('Modal');

    let mergedIcon: ReactNode = icon;

    if (icon === true || icon === undefined) {
        switch (type) {
            case 'info':
                mergedIcon = <KitIcon icon={<KitInfoOutlined />} on className="kit-confirm-icon" />;
                break;
            case 'success':
                mergedIcon = (
                    <KitIcon icon={<CheckOutlined />} on className="kit-confirm-icon kit-confirm-icon-success" />
                );
                break;
            case 'error':
                mergedIcon = (
                    <KitIcon icon={<ExclamationOutlined />} on className="kit-confirm-icon kit-confirm-icon-error" />
                );
                break;
            case 'warning':
            default:
                mergedIcon = (
                    <KitIcon icon={<KitWarningOutlined />} on className="kit-confirm-icon kit-confirm-icon-warning" />
                );
                break;
        }
    }
    const mergedOkCancel = okCancel ?? type === 'confirm';

    const _onClick = actionFn => () => {
        actionFn && actionFn();
        close?.();
    };

    const cancelButton = mergedOkCancel && (
        <KitButton onClick={_onClick(onCancel)}>{cancelText || locale?.cancelText}</KitButton>
    );

    const OkButton = (
        <KitButton primaryModal onClick={_onClick(onOk)}>
            {okText || (mergedOkCancel ? locale?.okText : locale?.justOkText)}
        </KitButton>
    );

    return (
        <Modal
            isOpen={isOpen}
            showCloseIcon={false}
            width={width ?? 'auto'}
            style={{content: {minWidth: '350px'}}}
            portalClassName={portalClassName}
            footer={
                <>
                    {cancelButton}
                    {OkButton}
                </>
            }
            {...props}
        >
            <KitSpace direction="vertical" size={theme.spacing.vertical.items}>
                {image && (
                    <div className="kit-confirm-image-wrapper" style={{backgroundImage: 'url(' + image + ')'}}></div>
                )}
                <KitSpace size={theme.spacing.vertical.items}>
                    {mergedIcon}
                    <KitSpace direction="vertical" size={theme.spacing.vertical.text}>
                        <div className="ant-modal-title">{title}</div>
                        <div className="ant-modal-body">{firstLine}</div>
                        {secondLine && <div className="ant-modal-body">{secondLine}</div>}
                    </KitSpace>
                </KitSpace>
            </KitSpace>
        </Modal>
    );
};

export default ConfirmDialog;
