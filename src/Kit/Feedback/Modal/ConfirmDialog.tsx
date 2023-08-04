import React from "react";
import Modal from "./Modal";
import {} from "./theme";
import { KitInfoOutlined, KitWarningOutlined } from "../../../icons";
import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons";
import { KitButton, KitIcon } from "@kit/General/";
import { KitSpace } from "@kit/Layout/";
import { modalTheme } from "./theme";
import { confirmDialogProps } from "./types";

import { useLocale } from "antd/lib/locale";

const ConfirmDialog = ({
    icon,
    title,
    firstLine,
    secondLine,
    image,
    type,
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
}: confirmDialogProps) => {
    const [locale] = useLocale("Modal");

    let mergedIcon: React.ReactNode = icon;
    if (icon === true || icon === undefined) {
        switch (type) {
            case "info":
                mergedIcon = (
                    <KitIcon
                        icon={<KitInfoOutlined />}
                        on
                        className="kit-confirm-icon"
                    />
                );
                break;
            case "success":
                mergedIcon = (
                    <KitIcon
                        icon={<CheckOutlined />}
                        on
                        className="kit-confirm-icon kit-confirm-icon-success"
                    />
                );
                break;
            case "error":
                mergedIcon = (
                    <KitIcon
                        icon={<ExclamationOutlined />}
                        on
                        className="kit-confirm-icon kit-confirm-icon-error"
                    />
                );
                break;
            case "warning":
            default:
                mergedIcon = (
                    <KitIcon
                        icon={<KitWarningOutlined />}
                        on
                        className="kit-confirm-icon kit-confirm-icon-warning"
                    />
                );
                break;
        }
    }
    const mergedOkCancel = okCancel ?? type === "confirm";

    const onClick = (actionFn) => () => {
        actionFn && actionFn();
        close?.();
    };

    const cancelButton = mergedOkCancel && (
        <KitButton onClick={onClick(onCancel)}>
            {cancelText || locale?.cancelText}
        </KitButton>
    );

    const OkButton = (
        <KitButton primaryModal onClick={onClick(onOk)}>
            {okText || (mergedOkCancel ? locale?.okText : locale?.justOkText)}
        </KitButton>
    );

    return (
        <Modal
            isOpen={isOpen}
            showCloseIcon={false}
            width={width || "350px"}
            portalClassName={portalClassName}
            footer={
                <>
                    {cancelButton}
                    {OkButton}
                </>
            }
            {...props}
        >
            <KitSpace
                direction="vertical"
                size={modalTheme.itemsVerticalSpacing}
            >
                {image && (
                    <div
                        className="kit-confirm-image-wrapper"
                        style={{ backgroundImage: "url(" + image + ")" }}
                    ></div>
                )}
                <KitSpace size={modalTheme.itemsVerticalSpacing}>
                    {mergedIcon}
                    <KitSpace
                        direction="vertical"
                        size={modalTheme.textVerticalSpacing}
                    >
                        <div className="ant-modal-title">{title}</div>
                        <div className="ant-modal-body">{firstLine}</div>
                        {secondLine && (
                            <div className="ant-modal-body">{secondLine}</div>
                        )}
                    </KitSpace>
                </KitSpace>
            </KitSpace>
        </Modal>
    );
};

export default ConfirmDialog;
