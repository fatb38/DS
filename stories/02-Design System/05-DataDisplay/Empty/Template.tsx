import React from 'react';
import {KitEmpty} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {IKitEmpty} from '@kit/DataDisplay/Empty/types';

export const Template = (args: IKitEmpty) => <KitEmpty {...args} />;

export const EditorTemplate: IEditorTemplate = () => (
        <KitEmpty
            title="No Folder Found"
            description="No folder has been found. Please create a new one by clicking the button below."
        />
    );
EditorTemplate.path = 'components.Empty';
EditorTemplate.title = 'Empty';
