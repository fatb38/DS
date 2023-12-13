import React from 'react';
import {KitButton, KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {useKitNotification} from '@kit/Feedback/';
import {IKitNotificationArgs} from '@kit/Feedback/Notification/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark, faRectangleXmark} from '@fortawesome/free-regular-svg-icons';
import {faDownload, faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import {IEditorTemplate} from '../../../types';

export const FakeNotification: React.FunctionComponent<IKitNotificationArgs> = () => null;

const checkRequiredField = (args: IKitNotificationArgs, requiredFields: string[]) => {
    return !requiredFields.some((field: string) => args[field] === undefined || args[field] === '');
};

const getIcon = icon => {
    switch (icon) {
        case 'faMagnifyingGlass':
            return <KitIcon icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />;
        case 'faDownload':
            return <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} />;
        case 'faCircleCheck':
            return <KitIcon icon={<FontAwesomeIcon icon={faCircleCheck} />} />;
        case '-':
        default:
            return null;
    }
};

const getCloseIcon = closeIcon => {
    switch (closeIcon) {
        case 'faCircleXmark':
            return <KitIcon icon={<FontAwesomeIcon icon={faCircleXmark} />} />;
        case 'faXmark':
            return <KitIcon icon={<FontAwesomeIcon icon={faXmark} />} />;
        case 'faRectangleXmark':
            return <KitIcon icon={<FontAwesomeIcon icon={faRectangleXmark} />} />;
        case '-':
        default:
            return;
    }
};

export const Template = (args: IKitNotificationArgs) => {
    const {kitNotification} = useKitNotification();

    const openNotification = (type: 'open' | 'info' | 'success' | 'warning' | 'error') => {
        if (checkRequiredField(args, ['message', 'description'])) {
            kitNotification[type]({
                ...args,
                icon: getIcon({icon: args.icon}),
                closeIcon: getCloseIcon({closeIcon: args.closeIcon})
            } as IKitNotificationArgs);
        } else {
            kitNotification[type]({
                ...args,
                icon: getIcon({icon: args.icon}),
                closeIcon: getCloseIcon({closeIcon: args.closeIcon}),
                message: 'Some field are required',
                description: 'Some required fields are not fulfill !'
            } as IKitNotificationArgs);
        }
    };

    return (
        <KitSpace>
            <KitButton onClick={() => openNotification('open')}>Basic</KitButton>
            <KitButton onClick={() => openNotification('info')}>Info</KitButton>
            <KitButton onClick={() => openNotification('success')}>Success</KitButton>
            <KitButton onClick={() => openNotification('warning')}>Warning</KitButton>
            <KitButton onClick={() => openNotification('error')}>Error</KitButton>
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const {kitNotification} = useKitNotification();
    return (
        <KitSpace>
            <KitButton
                onClick={() =>
                    kitNotification.info({
                        message: 'Info Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Info
            </KitButton>
            <KitButton
                onClick={() =>
                    kitNotification.success({
                        message: 'Success Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Success
            </KitButton>
            <KitButton
                onClick={() =>
                    kitNotification.warning({
                        message: 'Warning Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Warning
            </KitButton>
            <KitButton
                onClick={() =>
                    kitNotification.error({
                        message: 'Error Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Error
            </KitButton>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Notification';
EditorTemplate.title = 'Notification';
