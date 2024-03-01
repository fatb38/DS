import React, {FunctionComponent} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAppleAlt, faRobot} from '@fortawesome/free-solid-svg-icons';
import {KitTypography} from '@kit/General';

export const BasicTabsTest: FunctionComponent = () => (
    <div style={{width: '550px'}}>
        <KitTypography.Title level="h3">Basic tabs</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitTabs
                defaultActiveKey="1"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Basic tab ${id}`
                    };
                })}
            />
            <KitTabs
                defaultActiveKey="1"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Basic centered tab ${id}`
                    };
                })}
                centered
            />
            <KitTabs
                defaultActiveKey="1"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Card tab ${id}`
                    };
                })}
                type="card"
            />
            <KitTabs
                defaultActiveKey="1"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Centered card tab ${id}`
                    };
                })}
                type="card"
                centered
            />
            <KitTabs
                defaultActiveKey="2"
                items={[faAppleAlt, faRobot].map((Icon, i) => {
                    const id = String(i + 1);

                    return {
                        label: (
                            <span>
                                <FontAwesomeIcon icon={Icon} style={{marginRight: '6px'}} />
                                Tab {id}
                            </span>
                        ),
                        key: id,
                        children: `Icon tab ${id}`
                    };
                })}
            />
            <KitTabs
                defaultActiveKey="1"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Hide separator tab ${id}`
                    };
                })}
                hideSeparator
            />
        </div>
    </div>
);
