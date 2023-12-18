import React from 'react';
import {createRoot} from 'react-dom/client';
import {ConfigUpdate, IKitConfirmDialog} from './types';
import ConfirmDialog from './ConfirmDialog';
import uuid from 'react-uuid';

interface IModalConfig extends IKitConfirmDialog {
    showSecondaryCta?: boolean;
}

export default function confirm(config: IKitConfirmDialog) {
    const container = document.createDocumentFragment();
    const root = createRoot(container);
    const portalClassName = 'reactPortal-' + uuid();
     
    let currentConfig: IModalConfig = {
        ...config,
        close,
        isOpen: true,
        portalClassName: portalClassName
    };
    let timeoutId: NodeJS.Timeout;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function destroy(...args: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const triggerCancel = args.some(param => param && param.triggerCancel);
        if (config.onCancel && triggerCancel) {
            config.onCancel();
        }
        root.unmount();
    }

    function render({okText, cancelText, ...props}: IModalConfig) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            const okCancel = props.showSecondaryCta;
            root.render(
                <ConfirmDialog
                    {...props}
                    appElement={document.body}
                    okCancel={okCancel}
                    parentSelector={() => document.body}
                    okText={okText}
                    cancelText={cancelText}
                />
            );
        }) as unknown as NodeJS.Timeout;
    }

    function close(...args: unknown[]) {
        //TODO Handle on Cancel

        destroy(args);
    }

    function _update(configUpdate: ConfigUpdate) {
        if (typeof configUpdate === 'function') {
            currentConfig = configUpdate(currentConfig);
        } else {
            currentConfig = {
                ...currentConfig,
                ...configUpdate
            };
        }

        render(currentConfig);
    }

    render(currentConfig);

    return {
        destroy: close,
        update: _update
    };
}

export function withWarn(props: IKitConfirmDialog): IKitConfirmDialog {
    return {
        ...props,
        type: 'warning'
    };
}

export function withInfo(props: IKitConfirmDialog): IKitConfirmDialog {
    return {
        ...props,
        type: 'info'
    };
}

export function withSuccess(props: IKitConfirmDialog): IKitConfirmDialog {
    return {
        ...props,
        type: 'success'
    };
}

export function withError(props: IKitConfirmDialog): IKitConfirmDialog {
    return {
        ...props,
        type: 'error'
    };
}

export function withConfirm(props: IKitConfirmDialog): IKitConfirmDialog {
    return {
        ...props,
        type: 'confirm'
    };
}
