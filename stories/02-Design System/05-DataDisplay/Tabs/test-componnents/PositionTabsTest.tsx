import React, {FC} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';

export const PositionTabsTest: FC = () => (
    <div style={{width: '550px'}}>
        <KitTypography.Title level="h3">Position size tabs</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <KitTabs
                tabPosition="top"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`
                    };
                })}
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <KitTabs
                    tabPosition="left"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`
                        };
                    })}
                />
                <KitTabs
                    tabPosition="right"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`
                        };
                    })}
                />
            </div>
            <KitTabs
                tabPosition="bottom"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`
                    };
                })}
            />
        </div>
    </div>
);
