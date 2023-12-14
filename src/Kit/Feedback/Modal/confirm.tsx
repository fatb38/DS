import React from 'react';
import {createRoot} from 'react-dom/client';
import {ConfigUpdate, IKitConfirmDialog} from './types';
import ConfirmDialog from './ConfirmDialog';
import uuid from 'react-uuid';
import {KitApp} from '@kit/App';

interface IModalConfig extends IKitConfirmDialog {
    showSecondaryCta?: boolean;
}

export default function confirm(config: IKitConfirmDialog) {
    const container = document.createDocumentFragment();
    const root = createRoot(container);
    const portalClassName = 'reactPortal-' + uuid();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    let currentConfig: IModalConfig = {
        ...config,
        close,
        isOpen: true,
        portalClassName: portalClassName
    };
    let timeoutId: NodeJS.Timeout;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function destroy(...args: any) {
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
                <KitApp>
                    <ConfirmDialog
                        {...props}
                        appElement={document.body}
                        okCancel={okCancel}
                        parentSelector={() => document.body}
                        okText={okText}
                        cancelText={cancelText}
                    />
                </KitApp>
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
