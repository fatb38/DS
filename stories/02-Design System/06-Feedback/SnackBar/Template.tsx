import React from 'react';
import {KitSnackBarProvider, openKitSnackBar, closeKitSnackBar} from '@kit/Feedback/';
import {KitButton} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitOpenSnackBar} from '@kit/Feedback/SnackBar/types';

export const Template = (args: IKitOpenSnackBar) => (
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

export const EditorTemplate: IEditorTemplate = () => (
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
EditorTemplate.path = 'components.SnackBar';
EditorTemplate.title = 'SnackBar';
