import React from 'react';
import {KitAvatar, KitIdCard} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

export const Template = (args: IKitIdCard) => {
    return <KitIdCard {...args} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitIdCard
            avatar={
                <KitAvatar shape="square" size="large">
                    JD
                </KitAvatar>
            }
            title="John Doe"
            description="A talented software developer."
        />
    );
};
EditorTemplate.path = 'components.IdCard';
EditorTemplate.title = 'IdCard';
