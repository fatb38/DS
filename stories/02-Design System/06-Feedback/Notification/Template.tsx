import React from 'react';
import {KitButton, KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {useKitNotification, KitNotification} from '@kit/Feedback/';
import {IKitNotificationArgs} from '@kit/Feedback/Notification/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark, faRectangleXmark} from '@fortawesome/free-regular-svg-icons';
import {faDownload, faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import {IEditorTemplate} from '../../../types';
import {KitAristidThemeGeneral} from '@theme/aristid/general';

export const FakeNotification: React.FunctionComponent<IKitNotificationArgs> = () => null;

const checkRequiredField = (args: IKitNotificationArgs, requiredFields: string[]) =>
    !requiredFields.some((field: string) => args[field] === undefined || args[field] === '');

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
    const notificationArgs = checkRequiredField(args, ['message', 'description'])
        ? {
              ...args,
              icon: getIcon({icon: args.icon}),
              closeIcon: getCloseIcon({closeIcon: args.closeIcon})
          }
        : {
              ...args,
              icon: getIcon({icon: args.icon}),
              closeIcon: getCloseIcon({closeIcon: args.closeIcon}),
              message: 'Some field are required',
              description: 'Some required fields are not fulfill !'
          };

    const openNotification = (type: 'open' | 'info' | 'success' | 'warning' | 'error') => {
        kitNotification[type](notificationArgs);
    };

    return (
        <KitSpace direction="vertical" size={KitAristidThemeGeneral.spacing.m}>
            <KitSpace>
                <KitButton onClick={() => openNotification('open')}>Basic</KitButton>
                <KitButton onClick={() => openNotification('info')}>Info</KitButton>
                <KitButton onClick={() => openNotification('success')}>Success</KitButton>
                <KitButton onClick={() => openNotification('warning')}>Warning</KitButton>
                <KitButton onClick={() => openNotification('error')}>Error</KitButton>
            </KitSpace>
            <KitNotification {...notificationArgs} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const {kitNotification} = useKitNotification();
    const description =
        'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';

    const onClose = () => console.log('close');

    return (
        <KitSpace direction="vertical" size={KitAristidThemeGeneral.spacing.s}>
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
            <KitSpace wrap>
                <KitNotification message="Info Notification" description={description} type="info" onClose={onClose} />
                <KitNotification
                    message="Warning Notification"
                    description={description}
                    type="warning"
                    onClose={onClose}
                />
                <KitNotification
                    message="Error Notification"
                    description={description}
                    type="error"
                    onClose={onClose}
                />
                <KitNotification
                    message="Success Notification"
                    description={description}
                    type="success"
                    onClose={onClose}
                />
                <KitNotification message="Simple Notification" description={description} />
                <KitNotification
                    message="Full Notification"
                    description={description}
                    messageExtra="Il y a 5 jours・17:34"
                    btn={
                        <>
                            <KitButton type="tertiary">Cancel</KitButton>
                            <KitButton>Ok</KitButton>
                        </>
                    }
                    onClose={onClose}
                    icon={<FontAwesomeIcon icon={faDownload} />}
                />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Notification';
EditorTemplate.title = 'Notification';
