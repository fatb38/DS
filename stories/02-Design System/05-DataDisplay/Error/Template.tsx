import React from 'react';
import {KitError} from '@kit/DataDisplay';
import {IEditorTemplate} from '../../../types';
import {IKitError} from '@kit/DataDisplay/Error/types';

export const Template = ({description, title, ...args}: IKitError) => (
    <KitError title={title || 'title'} description={description || 'description'} {...args} />
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitError title="No Ressource Found" description="No ressource has been found. Please go back to home." />
);

EditorTemplate.path = 'components.Error';
EditorTemplate.title = 'Error';
