import React, {FunctionComponent} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import {IKitTabs} from '@kit/DataDisplay/Tabs/types';

const items: IKitTabs['items'] = [
    {
        key: '1',
        label: (
            <span>
                <FontAwesomeIcon icon={faAppleAlt} style={{marginRight: '6px'}} />
                Tab 1
            </span>
        ),
        children: 'Simple inline span'
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Simple text'
    },
    {
        key: '3',
        label: (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>Tab 3</div>
                <div>with SubTitle</div>
            </div>
        ),
        children: 'Flexbox column div'
    }
];

const largeRightColumn = (
    <div style={{display: 'flex', flexDirection: 'column', marginRight: 20}}>
        <div>Column</div>
        <div>Olumn</div>
        <div>Lumn</div>
        <div>Umn</div>
        <div>Mn</div>
        <div>N</div>
    </div>
);
const largeLeftColumn = (
    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <div>Column</div>
        <div>Olumn</div>
        <div>Lumn</div>
        <div>Umn</div>
        <div>Mn</div>
        <div>N</div>
    </div>
);

export const ExtraContentTabsTest: FunctionComponent = () => (
    <div style={{width: '550px'}}>
        <KitTypography.Title level="h3">
            Keep tabs-tab center when using <code>tabBarExtraContent</code>
        </KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <KitTabs
                style={{marginBottom: 15}}
                defaultActiveKey="1"
                centered
                items={items}
                type="card"
                tabBarExtraContent={largeRightColumn}
            />
            <KitTabs
                style={{marginBottom: 15}}
                defaultActiveKey="2"
                centered
                items={items}
                tabBarExtraContent={{left: largeLeftColumn}}
            />
            <KitTabs
                style={{marginBottom: 15}}
                defaultActiveKey="3"
                centered
                items={items}
                hideSeparator
                tabBarExtraContent={{left: largeLeftColumn, right: largeRightColumn}}
            />
        </div>
    </div>
);
