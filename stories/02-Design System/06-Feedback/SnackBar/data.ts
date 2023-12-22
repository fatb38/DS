import {IKitOpenSnackBar} from '@kit/Feedback/SnackBar/types';
import {FunctionComponent} from 'react';

export const FakeSnackbar: FunctionComponent<IKitOpenSnackBar> = () => null;

export const argTypes = {
    message: {
        name: 'message',
        description: 'Content of SnackBar',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'openSnackBar()'
        }
    },
    closable: {
        name: 'closable',
        description: 'SnackBar Alert can be closed',
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
            category: 'openSnackBar()'
        }
    },
    ctaText: {
        name: 'ctaText',
        description: 'Text of call to action button',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'openSnackBar()'
        }
    },
    ctaOnClick: {
        name: 'ctaOnClick',
        description: 'Call when button is clicked',
        table: {
            type: {
                summary: '() => void'
            },
            category: 'openSnackBar()'
        }
    },
    duration: {
        name: 'duration',
        description: 'Time during witch SnackBar is displayed',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 4000
            },
            category: 'openSnackBar()'
        }
    }
};
