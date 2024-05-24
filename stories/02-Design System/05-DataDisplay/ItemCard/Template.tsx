import React from 'react';
import {KitItemCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitAvatar, KitImage} from '@kit/DataDisplay';
import IKitItemCard from '@kit/DataDisplay/ItemCard/types';
import {KitButton, KitIcon} from '@kit/General/';
import {IEditorTemplate} from '../../../types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen, faImage} from '@fortawesome/free-regular-svg-icons';

const fakeContent = {
    base: {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
        extrainfo: '550.00€'
    },
    colors: [
        {label: 'test', color: '#00D9A9'},
        {label: 'toto', color: '#009876'}
    ],
    tags: ['3 opérations'],
    image: <KitImage src="public/images/tondeuse.png" />,
    icon: <KitIcon icon={<FontAwesomeIcon icon={faImage} />} />,
    avatar: <KitAvatar>G</KitAvatar>,
    onSeectChange: '',
    onEdit: '',
    actions: [
        <KitButton onClick={() => console.log('download action')}>
            <FontAwesomeIcon icon={faDownload} />
        </KitButton>,
        <KitButton onClick={() => console.log('open action')}>
            <FontAwesomeIcon icon={faFolderOpen} />
        </KitButton>
    ]
};

const getPicture = picture => {
    switch (picture) {
        case 'Image':
            return fakeContent.image;
        case 'Avatar':
            return fakeContent.avatar;
        case 'Icon':
            return fakeContent.icon;
        default:
            return null;
    }
};

export const Template = (args: IKitItemCard) => {
    const {colors, picture, tags, actions, ...rest} = args;
    const props: IKitItemCard = {
        ...rest,
        picture: getPicture(picture),
        title: rest.title || fakeContent.base.title,
        description: rest.description || fakeContent.base.description,
        extrainfo: rest.extrainfo || fakeContent.base.extrainfo
    };
    if (colors) {
        props.colors = fakeContent.colors;
    }
    if (tags) {
        props.tags = fakeContent.tags;
    }
    if (actions) {
        props.actions = fakeContent.actions;
    }

    return (
        <KitSpace>
            <KitItemCard {...props} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => (
        <KitSpace>
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                tags={['3 opérations']}
            />
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
                onSelectChange={e => {
                    console.log(e);
                }}
                onEdit={() => {
                    console.log('onEdit');
                }}
                actions={[
                    <KitButton onClick={() => console.log('download action')}>
                        <FontAwesomeIcon icon={faDownload} />
                    </KitButton>,
                    <KitButton onClick={() => console.log('open action')}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                    </KitButton>
                ]}
                disabled
            />
        </KitSpace>
    );
EditorTemplate.path = 'components.ItemCard';
EditorTemplate.title = 'ItemCard';
