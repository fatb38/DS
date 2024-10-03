import {KitRadio} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {RadioProps} from 'antd';

export const Template = (args: RadioProps) => <KitRadio {...args}>Radio label</KitRadio>;

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace size="m">
        <KitSpace direction="vertical">
            <KitRadio>Radio</KitRadio>
            <KitRadio checked>Radio</KitRadio>
            <KitRadio disabled>Radio</KitRadio>
            <KitRadio disabled checked>
                Radio
            </KitRadio>
        </KitSpace>
        <KitSpace direction="vertical">
            <KitRadio danger>Radio</KitRadio>
            <KitRadio danger checked>
                Radio
            </KitRadio>
            <KitRadio danger disabled>
                Radio
            </KitRadio>
            <KitRadio danger disabled checked>
                Radio
            </KitRadio>
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.Radio';
EditorTemplate.title = 'Radio';
