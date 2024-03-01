import React, {FunctionComponent} from 'react';
import {KitCollapse} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';

export const BasicCollapseTest: FunctionComponent = () => {
    const text =
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.';

    return (
        <div>
            <KitTypography.Title level="h3">Basic collapse</KitTypography.Title>
            <KitCollapse
                items={[
                    {
                        key: '1',
                        label: 'This is panel header 1',
                        children: <p>{text}</p>
                    },
                    {
                        key: '2',
                        label: 'This is panel header 2',
                        children: <p>{text}</p>
                    },
                    {
                        key: '3',
                        label: 'This is panel header 3',
                        children: <p>{text}</p>
                    }
                ]}
                defaultActiveKey={1}
            />
        </div>
    );
};
