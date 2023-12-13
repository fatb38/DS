/* eslint-disable react-refresh/only-export-components */
import React, {FunctionComponent} from 'react';
import {KitSnackBarProvider, openKitSnackBar, closeKitSnackBar} from '@kit/Feedback/';
import {KitButton} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitOpenSnackBar} from '@kit/Feedback/SnackBar/types';

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

export const Template = (args: IKitOpenSnackBar) => {
    return (
        <div>
            <KitSnackBarProvider />
            <KitSpace>
                <KitButton
                    type="primary"
                    onClick={() => {
                        openKitSnackBar({
                            message: args.message,
                            closable: args.closable,
                            ctaText: args.ctaText,
                            ctaOnClick: () => console.log('API - Click'),
                            duration: args.duration
                        });
                    }}
                >
                    Open SnackBar
                </KitButton>
                <KitButton
                    onClick={() => {
                        closeKitSnackBar();
                    }}
                >
                    Close SnackBar
                </KitButton>
            </KitSpace>
        </div>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitButton
                type="primary"
                onClick={() => {
                    openKitSnackBar({
                        message: 'Hello there !',
                        ctaText: 'Undo',
                        ctaOnClick: () => console.log('With a CTA'),
                        closable: true
                    });
                }}
            >
                Open SnackBar
            </KitButton>
            <KitButton
                onClick={() => {
                    closeKitSnackBar();
                }}
            >
                Close SnackBar
            </KitButton>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.SnackBar';
EditorTemplate.title = 'SnackBar';
