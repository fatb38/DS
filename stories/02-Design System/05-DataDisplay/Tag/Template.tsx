import {KitTag} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitTag} from '@kit/DataDisplay/Tag/types';

interface ITemplate extends IKitTag {
    label: string;
    showAvatar: boolean;
}

export const Template = (args: IKitTag) => {
    const {label, showAvatar, ...props} = args as ITemplate;
    const labelToDisplay = label ?? 'Tag';

    return (
        <KitTag
            idCardProps={{description: labelToDisplay, avatarProps: showAvatar ? {label: labelToDisplay} : undefined}}
            {...props}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace>
        <KitTag type="primary" idCardProps={{description: 'Tag primary'}} onClick={() => {}} onClose={() => {}} />
        <KitTag type="secondary" idCardProps={{description: 'Tag secondary'}} onClick={() => {}} onClose={() => {}} />
        <KitTag type="neutral" idCardProps={{description: 'Tag neutral'}} onClick={() => {}} onClose={() => {}} />
        <KitTag type="error" idCardProps={{description: 'Tag error'}} onClick={() => {}} onClose={() => {}} />
        <KitTag type="success" idCardProps={{description: 'Tag success'}} onClick={() => {}} onClose={() => {}} />
    </KitSpace>
);
EditorTemplate.path = 'components.Tag';
EditorTemplate.title = 'Tag';
