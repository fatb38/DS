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

export const NotificationArgTypes = {
    btn: {
        name: 'btn',
        type: {name: 'ReactNode'},
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
        type: {name: 'string'},
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
        type: {name: 'boolean | ReactNode'},
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
        type: {name: 'string', required: true},
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
        type: {name: 'number'},
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
        type: {name: 'ReactNode'},
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
        type: {name: 'string'},
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
        type: {name: 'string', required: true},
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
        type: {name: 'string'},
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
        type: {name: 'CSSProperties'},
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
        type: {name: 'alert | status'},
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
        type: {name: 'function'},
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
        type: {name: 'function'},
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
        type: {name: 'Object'},
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
