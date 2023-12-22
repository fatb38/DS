import React from 'react';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitTypography} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from 'stories/types';
import {IKitTooltip} from '@kit/DataDisplay/Tooltip/types';

export const Template = (args: IKitTooltip) => {
    return (
        <KitSpace>
            <KitTooltip title="Default value" {...args}>
                <KitTypography.Paragraph size="medium" weight="regular">
                    Tooltip will show on mouse enter.
                </KitTypography.Paragraph>
            </KitTooltip>
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitTooltip title="prompt text">
            <KitTypography.Paragraph style={{width: '200px'}} size="medium" weight="regular">
                Tooltip will show on mouse enter.
            </KitTypography.Paragraph>
        </KitTooltip>
    );
};
EditorTemplate.path = 'components.Tooltip';
EditorTemplate.title = 'Tooltip';
