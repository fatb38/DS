import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {UserOutlined, SearchOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace>
            <KitSpace direction="vertical" align="start">
                <KitInput placeholder="Prefix & default" prefix={<UserOutlined />} />
                <KitInput placeholder="Prefix & disabled" prefix={<UserOutlined />} disabled={true} />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput placeholder="Suffix & default" suffix={<UserOutlined />} />
                <KitInput placeholder="Suffix & disabled" suffix={<UserOutlined />} disabled={true} />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput
                    placeholder="Prefix & Suffix & default"
                    prefix={<SearchOutlined />}
                    suffix={<UserOutlined />}
                />
                <KitInput
                    placeholder="Prefix & Suffix & disabled"
                    prefix={<SearchOutlined />}
                    suffix={<UserOutlined />}
                    disabled={true}
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
