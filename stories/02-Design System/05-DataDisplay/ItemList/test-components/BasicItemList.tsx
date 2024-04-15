import {KitItemList} from '@kit/DataDisplay';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';
import {FunctionComponent} from 'react';

const title = 'Tondeuse à gazon';
const description = 'Tondeuse thermique Auto tractée 70 VL 55 TH';
const avatarProps: IKitAvatar = {
    label: 'TG'
};

export const BasicItemList: FunctionComponent = () => (
    <>
        <KitItemList idCardProps={{title}} />
        <KitItemList idCardProps={{title, description}} />
        <KitItemList idCardProps={{title, description, avatarProps}} />
    </>
);
