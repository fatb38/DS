import React from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitColorPickerProps} from '@kit/DataEntry/ColorPicker/types';

export const Template = (args: KitColorPickerProps) => {
    return (
        <KitSpace direction="vertical">
            <KitColorPicker {...args} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace size="m">
                <KitColorPicker />
                <KitColorPicker showText />
            </KitSpace>
            <KitSpace size="m">
                <KitColorPicker disabled />
                <KitColorPicker disabled showText />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.ColorPicker';
EditorTemplate.title = 'ColorPicker';
