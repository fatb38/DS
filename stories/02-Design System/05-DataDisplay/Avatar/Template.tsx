import React from 'react';
import {KitAvatar} from '@kit/DataDisplay';
import {KitDivider, KitSpace} from '@kit/Layout';
import {IEditorTemplate} from '../../../types';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IKitAvatar, IKitAvatarGroup} from '@kit/DataDisplay/Avatar/types';
import {AvatarSize} from 'antd/es/avatar/AvatarContext';

interface ITemplate extends IKitAvatar {
    sizeGroup: AvatarSize;
}

export const Template = (args: IKitAvatar) => {
    const props = args as ITemplate;
    return (
        <>
            <KitSpace>
                <KitAvatar {...props}>U</KitAvatar>
            </KitSpace>
            <br />
            <br />
            <KitSpace>
                <KitAvatar.Group {...(props as IKitAvatarGroup)} size={props.sizeGroup}>
                    <KitAvatar>G</KitAvatar>
                    <KitAvatar>R</KitAvatar>
                    <KitAvatar>E</KitAvatar>
                    <KitAvatar>N</KitAvatar>
                    <KitAvatar>O</KitAvatar>
                    <KitAvatar>B</KitAvatar>
                    <KitAvatar>L</KitAvatar>
                    <KitAvatar>E</KitAvatar>
                </KitAvatar.Group>
            </KitSpace>
        </>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitAvatar shape="circle" size="small">
                A
            </KitAvatar>
            <KitAvatar shape="circle">A</KitAvatar>
            <KitAvatar shape="circle" size="large">
                A
            </KitAvatar>
            <KitAvatar shape="square" size="small">
                V
            </KitAvatar>
            <KitAvatar shape="square">V</KitAvatar>
            <KitAvatar shape="square" size="large">
                V
            </KitAvatar>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Avatar';
EditorTemplate.title = 'Avatar';

export const EditorTemplateGroup: IEditorTemplate = () => {
    const url = 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1';

    return (
        <KitSpace direction="vertical" size={16}>
            <KitDivider orientation="left">Default KitAvatar.Group</KitDivider>
            <KitAvatar.Group>
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with limit</KitDivider>
            <KitAvatar.Group maxCount={2}>
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with max popover on click</KitDivider>
            <KitAvatar.Group maxCount={2} maxPopoverTrigger="click">
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with limit and size large</KitDivider>
            <KitAvatar.Group maxCount={2} size="large">
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
        </KitSpace>
    );
};
EditorTemplateGroup.path = 'components.AvatarGroup';
EditorTemplateGroup.title = 'AvatarGroup';
