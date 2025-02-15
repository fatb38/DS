import {faBullhorn, faCartPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitItemList} from '@kit/DataDisplay';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';
import {IKitItemList} from '@kit/DataDisplay/ItemList/types';
import {FunctionComponent} from 'react';

const idCardProps: IKitIdCard = {
    title: 'Tondeuse à gazon',
    description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
    avatarProps: {
        label: 'TG'
    }
};

const [action1, action2, action3]: IKitItemList['actions'] = [
    {
        key: '1',
        label: 'Add to basket',
        icon: <FontAwesomeIcon icon={faCartPlus} />,
        onClick: () => console.log('action 1')
    },
    {
        key: '2',
        label: 'Add to favorite',
        icon: <FontAwesomeIcon icon={faStar} />,
        onClick: () => console.log('action 2')
    },
    {
        key: '3',
        label: 'Notify when available',
        icon: <FontAwesomeIcon icon={faBullhorn} />,
        onClick: () => console.log('action 3')
    }
];

export const ActionItemList: FunctionComponent = () => (
    <>
        <KitItemList idCardProps={idCardProps} actions={[action1]} />
        <KitItemList
            onClick={() => alert('click sur l’item list')}
            idCardProps={idCardProps}
            actions={[action1, action2]}
        />
        <KitItemList idCardProps={idCardProps} actions={[action1, action2, action3]} />
    </>
);
