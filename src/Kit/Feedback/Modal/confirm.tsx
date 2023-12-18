import React from 'react';
import {createRoot} from 'react-dom/client';
import {ConfigUpdate, IKitConfirmDialog} from './types';
import ConfirmDialog from './ConfirmDialog';
import uuid from 'react-uuid';

export default function confirm(config: IKitConfirmDialog) {
    const container = document.createDocumentFragment();
    const root = createRoot(container);
    let portalClassName = 'reactPortal-' + uuid();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    let currentConfig = {
        ...config,
        close,
        isOpen: true,
        portalClassName: portalClassName
    } as any;
    let timeoutId: NodeJS.Timeout;

    function destroy(...args: any) {
        const triggerCancel = args.some(param => param && param.triggerCancel);
        if (config.onCancel && triggerCancel) {
            config.onCancel();
        }
        root.unmount();
    }

    function render({okText, cancelText, ...props}: any) {
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

    function close(...args: any) {
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
