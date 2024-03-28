import {KitAvatar, KitItemList} from '@kit/DataDisplay';
import {FunctionComponent} from 'react';

const title = 'Tondeuse à gazon';
const description = 'Tondeuse thermique Auto tractée 70 VL 55 TH';
const avatar = <KitAvatar label={'TG'} />;

export const BasicItemList: FunctionComponent = () => (
    <>
        <KitItemList idCardProps={{title}} />
        <KitItemList idCardProps={{title, description}} />
        <KitItemList idCardProps={{title, description, avatar}} />
    </>
);
