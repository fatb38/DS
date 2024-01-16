import React, {FC} from 'react';
import {KitCollapse} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';

export const SizeCollapseTest: FC = () => {
    const text =
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.';

    const items = {
        small: [
            {
                key: '1',
                label: 'Small size panel',
                children: <p>{text}</p>
            }
        ],
        regular: [
            {
                key: '1',
                label: 'Regular size panel',
                children: <p>{text}</p>
            }
        ],
        large: [
            {
                key: '1',
                label: 'Large size panel',
                children: <p>{text}</p>
            }
        ]
    };

    return (
        <div>
            <KitTypography.Title level="h3">Different size collapse</KitTypography.Title>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '40px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse size="small" items={items.small} />
                    <KitCollapse collapsible="disabled" size="small" items={items.small} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse items={items.regular} />
                    <KitCollapse collapsible="disabled" items={items.regular} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <KitCollapse size="large" items={items.large} />
                    <KitCollapse collapsible="disabled" size="large" items={items.large} />
                </div>
            </div>
        </div>
    );
};
