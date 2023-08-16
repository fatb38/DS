import React from 'react';
import {theme} from 'antd';
import {KitTabs} from '@kit/DataDisplay';
import StickyBox from 'react-sticky-box';

const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
        style: i === 0 ? {height: 200} : undefined
    };
});

const App = () => {
    const {
        token: {colorBgContainer}
    } = theme.useToken();
    const renderTabBar = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: 1}}>
            <DefaultTabBar {...props} style={{background: colorBgContainer}} />
        </StickyBox>
    );
    return <KitTabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />;
};

export default App;
