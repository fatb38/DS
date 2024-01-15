import React, {FC} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';

export const SizeTabsTest: FC = () => (
    <div style={{width: '550px'}}>
        <KitTypography.Title level="h3">Different size tabs</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <KitTabs
                defaultActiveKey="1"
                size="small"
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: 'Small tab'
                    };
                })}
            />
            <KitTabs
                defaultActiveKey="1"
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: 'Medium tab'
                    };
                })}
            />
            <KitTabs
                defaultActiveKey="1"
                size="large"
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: 'Large tab'
                    };
                })}
            />
            <KitTabs
                type="card"
                defaultActiveKey="1"
                size="small"
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: 'Small card tab'
                    };
                })}
            />
            <KitTabs
                type="card"
                defaultActiveKey="1"
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: 'Medium card tab'
                    };
                })}
            />
            <KitTabs
                type="card"
                defaultActiveKey="1"
                size="large"
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: 'Large card tab'
                    };
                })}
            />
        </div>
    </div>
);
