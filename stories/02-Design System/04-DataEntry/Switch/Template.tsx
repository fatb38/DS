import {KitSwitch} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitSwitch} from '@kit/DataEntry/Switch/types';

export const Template = (args: IKitSwitch) => <KitSwitch {...args}>Switch label</KitSwitch>;

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace size="m">
        <KitSwitch>Switch label</KitSwitch>
        <KitSwitch checked>Switch label</KitSwitch>
        <KitSwitch loading>Switch label</KitSwitch>
        <KitSwitch disabled>Switch label</KitSwitch>
    </KitSpace>
);
EditorTemplate.path = 'components.Switch';
EditorTemplate.title = 'Switch';
