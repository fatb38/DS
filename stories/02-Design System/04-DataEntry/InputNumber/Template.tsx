import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitInputNumberProps} from '@kit/DataEntry/InputNumber/types';

export const Template = (args: KitInputNumberProps) => {
    return (
        <KitSpace direction="vertical">
            <KitInputNumber {...args} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="m">
            <KitInputNumber placeholder="10" />
            <KitInputNumber disabled placeholder="10" />
            <KitInputNumber status="warning" placeholder="10" />
            <KitInputNumber status="error" placeholder="10" />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.InputNumber';
EditorTemplate.title = 'InputNumber';
