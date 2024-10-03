import {KitImage} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitImage} from '@kit/DataDisplay/Image/types';

export const Template = (args: IKitImage) => (
    <KitSpace>
        <KitImage {...args} />
    </KitSpace>
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitImage bordered rounded width={200} src="public/images/portrait.png" />
);
EditorTemplate.path = 'components.Image';
EditorTemplate.title = 'Image';
