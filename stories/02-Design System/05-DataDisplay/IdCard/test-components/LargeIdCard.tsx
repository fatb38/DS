import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitIdCard, KitAvatar} from '@kit/DataDisplay';

export const LargeIdCardTest: FunctionComponent = () => {
    return (
        <div>
            <KitTypography.Title level="h3">Large size IdCard</KitTypography.Title>
            <KitIdCard
                avatar={<KitAvatar shape="square">JD</KitAvatar>}
                title="John Doe"
                description="A talented software developer."
                size="large"
            />
        </div>
    );
};
