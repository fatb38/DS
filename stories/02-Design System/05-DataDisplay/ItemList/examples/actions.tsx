import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';
import {faCartPlus, faStar, faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';
import {IKitItemList} from '@kit/DataDisplay/ItemList/types';

const App = () => {
    const idCardProps: IKitIdCard = {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
        avatarProps: {label: 'TG'}
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
            disabled: true,
            onClick: () => console.log('action 2')
        },
        {
            key: '3',
            label: 'Notify when available',
            icon: <FontAwesomeIcon icon={faBullhorn} />,
            onClick: () => console.log('action 3')
        }
    ];

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '550px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitItemList idCardProps={idCardProps} actions={[action1]} />
                <KitItemList
                    onClick={() => alert('click sur l’item list')}
                    idCardProps={idCardProps}
                    actions={[action1, action2]}
                />
                <KitItemList idCardProps={idCardProps} actions={[action1, action2, action3]} />
                <KitItemList
                    onClick={() => alert('click sur l’item list')}
                    idCardProps={idCardProps}
                    actions={[action1, action2, action3]}
                />
            </div>
        </KitSpace>
    );
};

export default App;
