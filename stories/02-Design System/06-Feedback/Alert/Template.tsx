import React from 'react';
import {KitAlert} from '@kit/Feedback/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';

export const Template = args => {
    return <KitAlert message="Default message" {...args} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical">
            <KitAlert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
            />
            <KitAlert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />
            <KitAlert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
            />
            <KitAlert message="Error" description="This is an error message about copywriting." type="error" showIcon />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Alert';
EditorTemplate.title = 'Alert';
