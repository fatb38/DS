import React from 'react';
import {KitTag} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitTag} from '@kit/DataDisplay/Tag/types';

interface ITemplate extends IKitTag {
    label: string;
}

export const Template = (args: IKitTag) => {
    const {label, ...props} = args as ITemplate;
    return <KitTag {...props}>{label ? label : 'Default label'}</KitTag>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitTag onClose={() => {}}>Tag</KitTag>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Tag';
EditorTemplate.title = 'Tag';
