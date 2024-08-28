import {KitSpace} from '@kit/Layout';
import {IEditorTemplate} from '../../../types';
import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';

const {KitCustomSkeleton, KitAvatarSkeleton, KitItemListSkeleton, KitItemCardSkeleton, KitInputSkeleton} = KitSkeleton;

export const Template = ({
    shape = 'circle',
    size = 'large',
    display = 'card',
    ...args
}: {
    shape?: 'circle' | 'square';
    size?: number | 'large' | 'small' | 'medium';
    display?: 'card' | 'list';
}) => (
    <KitSpace direction="vertical" style={{width: '100%'}}>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">Custom Skeleton</KitTypography.Title>
            <KitCustomSkeleton style={{width: '300px', height: '60px'}} {...args} />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">Avatar Skeleton</KitTypography.Title>
            <KitAvatarSkeleton shape={shape} size={size} {...args} />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">Input Skeleton</KitTypography.Title>
            <KitInputSkeleton {...args} />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">ItemCard Skeleton</KitTypography.Title>
            <KitItemCardSkeleton display={display} {...args} />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">ItemList Skeleton</KitTypography.Title>
            <KitItemListSkeleton {...args} />
        </KitSpace>
    </KitSpace>
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace direction="vertical" style={{width: '100%'}}>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">Custom Skeleton</KitTypography.Title>
            <KitCustomSkeleton style={{width: '300px', height: '60px'}} />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">Avatar Skeleton</KitTypography.Title>
            <KitAvatarSkeleton style={{marginBottom: '8px'}} />
            <KitAvatarSkeleton shape="square" />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">Input Skeleton</KitTypography.Title>
            <KitInputSkeleton />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">ItemCard Skeleton</KitTypography.Title>
            <KitItemCardSkeleton style={{marginBottom: '8px'}} />
            <KitItemCardSkeleton display="list" />
        </KitSpace>
        <KitSpace direction="vertical" size={0} style={{width: '100%'}}>
            <KitTypography.Title level="h3">ItemList Skeleton</KitTypography.Title>
            <KitItemListSkeleton />
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.Skeleton';
EditorTemplate.title = 'Skeleton';
