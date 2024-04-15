import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitIdCard} from '@kit/DataDisplay';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';

const avatar: IKitAvatar = {
    shape: 'square',
    children: 'JD'
};

export const BasicIdCardTest: FunctionComponent = () => {
    return (
        <div>
            <KitTypography.Title level="h3">Default size IdCard</KitTypography.Title>
            <KitIdCard avatarProps={avatar} title="John Doe" description="A talented software developer." />
        </div>
    );
};
