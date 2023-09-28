import React from 'react';
import {createRoot} from 'react-dom/client';
import {ConfigUpdate, confirmDialogProps} from './types';
import ConfirmDialog from './ConfirmDialog';
import uuid from 'react-uuid';
import {KitApp} from '@kit/App';

export default function confirm(config: confirmDialogProps) {
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

    function close(...args: any) {
        //TODO Handle on Cancel

        destroy(args);
    }

    function update(configUpdate: ConfigUpdate) {
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
        update
    };
}

export function withWarn(props: confirmDialogProps): confirmDialogProps {
    return {
        ...props,
        type: 'warning'
    };
}

export function withInfo(props: confirmDialogProps): confirmDialogProps {
    return {
        ...props,
        type: 'info'
    };
}

export function withSuccess(props: confirmDialogProps): confirmDialogProps {
    return {
        ...props,
        type: 'success'
    };
}

export function withError(props: confirmDialogProps): confirmDialogProps {
    return {
        ...props,
        type: 'error'
    };
}

export function withConfirm(props: confirmDialogProps): confirmDialogProps {
    return {
        ...props,
        type: 'confirm'
    };
}
