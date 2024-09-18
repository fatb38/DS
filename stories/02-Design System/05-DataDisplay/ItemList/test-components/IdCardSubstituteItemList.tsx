import {KitIdCard, KitItemList} from '@kit/DataDisplay';
import {FunctionComponent} from 'react';
import {KitProgress} from '@kit/Feedback';

const title = 'Tondeuse à gazon';

export const IdCardSubstituteItemList: FunctionComponent = () => (
    <KitItemList
        idCardSubstitute={
            <>
                <KitIdCard title={title} />
                <KitProgress percent={50} />
            </>
        }
    />
);
