import React from 'react';
import {KitButton, KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {useKitNotification} from '@kit/Feedback/';
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    CloseOutlined,
    CloseSquareOutlined,
    DownloadOutlined,
    SearchOutlined
} from '@ant-design/icons';
import {IKitNotificationArgs} from '@kit/Feedback/Notification/types';
import {IEditorTemplate} from '../../../types';

export const FakeNotification: React.FunctionComponent<IKitNotificationArgs> = () => null;

export const argTypes = {
    btn: {
        name: 'btn',
        description: 'Customized close button',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Notification'
        }
    },
    className: {
        name: 'className',
        description: 'Customized CSS class',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    closeIcon: {
        name: 'closeIcon',
        options: ['-', 'CloseCircleOutlined', 'CloseOutlined', 'CloseSquareOutlined'],
        control: {
            type: 'select'
        },
        description: 'Custom close icon',
        table: {
            type: {
                summary: 'boolean | ReactNode'
            },
            defaultValue: {
                summary: 'CloseOutlined'
            },
            category: 'Notification'
        }
    },
    description: {
        name: 'description',
        description: 'The content of notification box **(required)**',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    duration: {
        name: 'duration',
        description:
            'Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 4.5
            },
            category: 'Notification'
        }
    },
    icon: {
        name: 'icon',
        options: ['-', 'SearchOutlined', 'DownloadOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        description: 'Customized icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Notification'
        }
    },
    key: {
        name: 'key',
        description: 'The unique identifier of the Notification',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    message: {
        name: 'message',
        description: 'The title of notification box **(required)**',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    placement: {
        name: 'placement',
        description: 'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
        options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        control: {
            type: 'select',
            defaultValue: 'topRight'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    style: {
        name: 'style',
        description: 'Customized inline style',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Notification'
        }
    },
    role: {
        name: 'role',
        description:
            'The semantics of notification content recognized by screen readers. The default value is alert. When set as the default value, the screen reader will promptly interrupt any ongoing content reading and prioritize the notification content for immediate attention.',
        table: {
            type: {
                summary: 'alert | status'
            },
            defaultValue: {
                summary: 'alert'
            },
            category: 'Notification'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'Specify a function that will be called when the notification is clicked',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Notification'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Trigger when notification closed',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Notification'
        }
    },
    props: {
        name: 'props',
        description:
            'An object that can contain data-*, aria-*, or role props, to be put on the notification div. This currently only allows data-testid instead of data-* in TypeScript',
        table: {
            type: {
                summary: 'Object'
            },
            category: 'Notification'
        }
    }
};

export const getIcon = ({icon}) => {
    switch (icon) {
        case 'SearchOutlined':
            return <KitIcon icon={<SearchOutlined />} />;
        case 'DownloadOutlined':
            return <KitIcon icon={<DownloadOutlined />} />;
        case 'CheckCircleOutlined':
            return <KitIcon icon={<CheckCircleOutlined />} />;
        case '-':
        default:
            return null;
    }
};

export const getCloseIcon = ({closeIcon}) => {
    switch (closeIcon) {
        case 'CloseCircleOutlined':
            return <KitIcon icon={<CloseCircleOutlined />} />;
        case 'CloseOutlined':
            return <KitIcon icon={<CloseOutlined />} />;
        case 'CloseSquareOutlined':
            return <KitIcon icon={<CloseSquareOutlined />} />;
        case '-':
        default:
            return;
    }
};

export const Template = args => {
    const {kitNotification} = useKitNotification();

    const openNotification = (type: 'open' | 'info' | 'success' | 'warning' | 'error') => {
        if (checkRequiredField(args, ['message', 'description'])) {
            kitNotification[type]({...args, icon: getIcon(args), closeIcon: getCloseIcon(args)});
        } else {
            kitNotification[type]({
                ...args,
                icon: getIcon(args),
                closeIcon: getCloseIcon(args),
                message: 'Some field are required',
                description: 'Some required fields are not fulfill !'
            });
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

export const checkRequiredField = (args, requiredFields: string[]) => {
    return !requiredFields.some((field: string) => args[field] === undefined || args[field] === '');
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
