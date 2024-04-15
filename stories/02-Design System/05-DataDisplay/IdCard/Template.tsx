import React from 'react';
import {KitIdCard} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

export const Template = (args: IKitIdCard) => {
    return <KitIdCard {...args} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <KitIdCard
                avatarProps={{shape: 'square', size: 'large', children: 'JD'}}
                title="John Doe"
                description="A talented software developer."
            />
            <KitIdCard
                disabled
                avatarProps={{shape: 'square', size: 'large', children: 'JD'}}
                title="John Doe"
                description="A talented software developer."
            />
        </div>
    );
};
EditorTemplate.path = 'components.IdCard';
EditorTemplate.title = 'IdCard';
