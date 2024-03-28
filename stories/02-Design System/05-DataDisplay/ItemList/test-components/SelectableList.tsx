import {KitAvatar, KitItemList} from '@kit/DataDisplay';
import {FunctionComponent} from 'react';

const idCardProps = {
    title: 'Tondeuse à gazon',
    description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
    avatar: <KitAvatar label={'TG'} />
};

export const SelectableItemList: FunctionComponent = () => (
    <KitItemList onSelect={console.log} idCardProps={idCardProps} />
);
