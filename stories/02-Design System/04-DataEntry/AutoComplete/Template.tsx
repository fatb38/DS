import {faCircleCheck, faDownload, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitAutoComplete} from '@kit/DataEntry';
import {IKitAutoComplete} from '@kit/DataEntry/AutoComplete/types';
import React from 'react';

const getIcon = ({infoIcon}) => {
    switch (infoIcon) {
        case 'faMagnifyingGlass':
            return <FontAwesomeIcon icon={faMagnifyingGlass} />;
        case 'faDownload':
            return <FontAwesomeIcon icon={faDownload} />;
        case 'faCircleCheck':
            return <FontAwesomeIcon icon={faCircleCheck} />;
        case '-':
        default:
            return null;
    }
};

const getInfoClick = ({onInfoClick}): IKitAutoComplete['onInfoClick'] | undefined => {
    switch (onInfoClick) {
        case 'log to console':
            return () => console.log('info clicked');
        case '-':
        default:
            return;
    }
};

type toOmit = 'infoIcon' | 'onInfoClick';

interface ITemplate extends Omit<IKitAutoComplete, toOmit> {
    infoIcon: string;
    onInfoClick: string;
}

export const Template = (args: IKitAutoComplete) => {
    const icon = getIcon(args as never as ITemplate);
    const onInfoClick = getInfoClick(args as never as ITemplate);
    return <KitAutoComplete {...args} infoIcon={icon} onInfoClick={onInfoClick} />;
};
