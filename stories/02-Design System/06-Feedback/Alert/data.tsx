import React from 'react';
import {KitAlert} from '@kit/Feedback/';

const type = ['success', 'info', 'warning', 'error'];

export const AlertArgTypes = {
    type: {
        name: 'type',
        description: 'Type of Alert styles, options: `success`, `info`, `warning`, `error`',
        options: type,
        control: {
            type: 'select',
            defaultValue: 'info'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Alert'
        }
    },
    message: {
        name: 'message',
        description: 'Content of Alert',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Alert'
        }
    },
    description: {
        name: 'description',
        description: 'Additional content of Alert',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Alert'
        }
    },
    closable: {
        name: 'closable',
        description: 'Whether Alert can be closed',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Alert'
        }
    },
    banner: {
        name: 'banner',
        description: 'Whether to show as banner',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Alert'
        }
    },
    showIcon: {
        name: 'showIcon',
        description: 'Whether to show icon',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: 'false, in banner mode default is true'
            },
            category: 'Alert'
        }
    },
    afterClose: {
        name: 'afterClose',
        description: 'Called when close animation is finished',
        table: {
            type: {
                summary: '() => void'
            },
            category: 'Alert'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback when Alert is closed',
        table: {
            type: {
                summary: '(e: MouseEvent) => void'
            },
            category: 'Alert'
        }
    }
};

export const Template = ({component, ...args}) => {
    return <KitAlert message="Default message" {...args} />;
};
