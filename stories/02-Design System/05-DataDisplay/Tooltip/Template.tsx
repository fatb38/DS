import {KitTooltip} from '@kit/DataDisplay/';
import {KitTypography} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from 'stories/types';
import {IKitTooltip} from '@kit/DataDisplay/Tooltip/types';

export const Template = (args: IKitTooltip) => (
    <KitSpace>
        <KitTooltip title="Default value" {...args}>
            <KitTypography.Paragraph>Tooltip will show on mouse enter.</KitTypography.Paragraph>
        </KitTooltip>
    </KitSpace>
);

export const EditorTemplate: IEditorTemplate = () => (
    <KitTooltip title="prompt text">
        <KitTypography.Paragraph style={{width: '200px'}}>Tooltip will show on mouse enter.</KitTypography.Paragraph>
    </KitTooltip>
);
EditorTemplate.path = 'components.Tooltip';
EditorTemplate.title = 'Tooltip';
