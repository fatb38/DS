import {KitRate} from '@kit/DataEntry';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitRate} from '@kit/DataEntry/Rate/types';

export const Template = (args: IKitRate) => <KitRate {...args} />;

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace size="m" direction="vertical">
        <KitRate defaultValue={3} />
        <KitRate defaultValue={3} disabled />
    </KitSpace>
);
EditorTemplate.path = 'components.Rate';
EditorTemplate.title = 'Rate';
