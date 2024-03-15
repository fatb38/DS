import React from 'react';
import {KitAvatar, KitIdCard} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const getAvatar = ({avatar, title = 'John Doe'}: IKitIdCard) => {
    console.log(title);
    switch (avatar) {
        case 'Image':
            return <KitAvatar src="public/images/portrait.png" />;
        case 'Avatar':
            return <KitAvatar label={title} />;
        case 'Icon':
            return <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />;
        default:
            return null;
    }
};

export const Template = (args: IKitIdCard) => {
    const avatar = getAvatar(args);
    return <KitIdCard {...args} avatar={avatar} />;
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
