import {KitCheckbox} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitCheckbox} from '@kit/DataEntry/Checkbox/types';

interface ITemplate extends IKitCheckbox {
    label: string;
}

export const Template = (args: IKitCheckbox) => {
    const {label, ...props} = args as ITemplate;
    return <KitCheckbox {...props}>{label}</KitCheckbox>;
};

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace size="m">
        <KitSpace direction="vertical">
            <KitCheckbox>Checkbox</KitCheckbox>
            <KitCheckbox checked>Checkbox</KitCheckbox>
            <KitCheckbox disabled>Checkbox</KitCheckbox>
            <KitCheckbox disabled checked>
                Checkbox
            </KitCheckbox>
        </KitSpace>
        <KitSpace direction="vertical">
            <KitCheckbox danger>Checkbox</KitCheckbox>
            <KitCheckbox danger checked>
                Checkbox
            </KitCheckbox>
            <KitCheckbox danger disabled>
                Checkbox
            </KitCheckbox>
            <KitCheckbox danger disabled checked>
                Checkbox
            </KitCheckbox>
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.Checkbox';
EditorTemplate.title = 'Checkbox';
