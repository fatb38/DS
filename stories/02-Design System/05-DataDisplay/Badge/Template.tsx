import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitBadge} from '@kit/DataDisplay/Badge/types';

export const Template = (args: IKitBadge) => (
        <KitSpace>
            <KitBadge {...args} />
            <br />
            <br />
            <KitBadge {...args}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );

export const EditorTemplate: IEditorTemplate = () => (
        <KitSpace size="s">
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge dot status="success">
                Success
            </KitBadge>
            <KitBadge dot status="error">
                Error
            </KitBadge>
            <KitBadge dot status="default">
                Default
            </KitBadge>
            <KitBadge dot status="processing">
                Processing
            </KitBadge>
            <KitBadge dot status="warning">
                Warning
            </KitBadge>
        </KitSpace>
    );
EditorTemplate.path = 'components.Badge';
EditorTemplate.title = 'Badge';
