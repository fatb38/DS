import React from 'react';
import {KitAvatar, KitImage, KitItemList} from '@kit/DataDisplay/';
import {KitIcon} from '@kit/General/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitItemList} from '@kit/DataDisplay/ItemList/types';
import {CheckboxChangeEvent} from '@kit/DataEntry/Checkbox';

const mockData = {
    base: {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH'
    },
    long: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod es do is un incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum id est laborum.'
    },
    tag: 4,
    image: <KitImage src="public/images/tondeuse.png" />,
    icon: <KitIcon icon={<FontAwesomeIcon icon={faUser} />} />,
    avatar: <KitAvatar>G</KitAvatar>,
    onSelectChange: (e: CheckboxChangeEvent) => console.log('selected', e.target.checked),
    onRafterClick: () => console.log('click rafter'),
    onClick: () => console.log('on click itemlist')
};

const getPicture = picture => {
    switch (picture) {
        case 'Image':
            return mockData.image;
        case 'Avatar':
            return mockData.avatar;
        case 'Icon':
            return mockData.icon;
        default:
            return null;
    }
};

interface ITempate extends IKitItemList {
    displayCheckbox: boolean;
    displayRafter: boolean;
    itemListClickable: boolean;
}

export const Template = (args: IKitItemList) => {
    const props = {
        ...(args as ITempate),
        picture: getPicture(args.picture)
    };
    return (
        <KitItemList
            {...props}
            onSelectChange={props.displayCheckbox ? () => console.log('select changer') : undefined}
            onRafterClick={props.displayRafter ? () => console.log('click rafter') : undefined}
            onClick={props.itemListClickable ? () => console.log('click itemList') : undefined}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical">
            <KitItemList
                onSelectChange={e => console.log('selected', e.target.checked)}
                picture={<KitIcon icon={<FontAwesomeIcon icon={faUser} />} />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemlist')}
            />
            <KitItemList
                disabled
                onSelectChange={e => console.log('selected', e.target.checked)}
                picture={<KitImage src="public/images/tondeuse.png" />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
            />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.ItemList';
EditorTemplate.title = 'ItemList';
