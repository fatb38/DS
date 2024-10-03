import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitRichTextProps} from '@kit/DataEntry/RichText/types';
import {KitRichText} from '@kit/DataEntry';

export const Template = (args: KitRichTextProps) => (
    <KitSpace direction="vertical">
        <KitRichText placeholder="Placeholder..." {...args} />
    </KitSpace>
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace direction="vertical" size="l">
        <KitSpace direction="horizontal" size="m">
            <KitRichText placeholder="Placeholder..." showCount maxLength={100} />
            <KitRichText placeholder="Placeholder..." showCount maxLength={100} disabled />
        </KitSpace>
        <KitSpace direction="horizontal" size="m">
            <KitRichText placeholder="Placeholder..." showCount maxLength={100} status="warning" />
            <KitRichText placeholder="Placeholder..." showCount maxLength={100} status="error" />
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.RichText';
EditorTemplate.title = 'RichText';
