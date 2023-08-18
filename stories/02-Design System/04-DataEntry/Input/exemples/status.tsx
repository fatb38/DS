import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {UserOutlined, SearchOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Input</KitDivider>
            <KitSpace align="start">
                <KitInput placeholder="Input warning" status="warning" />
                <KitInput placeholder="Input error" status="error" />
            </KitSpace>
            <KitDivider orientation="left">Input with prefix and/or suffix</KitDivider>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitInput placeholder="Prefix & warning" prefix={<UserOutlined />} status="warning" />
                    <KitInput placeholder="Prefix & error" prefix={<UserOutlined />} status="error" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitInput placeholder="Suffix & warning" suffix={<UserOutlined />} status="warning" />
                    <KitInput placeholder="Suffix & error" suffix={<UserOutlined />} status="error" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitInput
                        placeholder="Prefix & Suffix & warning"
                        prefix={<SearchOutlined />}
                        suffix={<UserOutlined />}
                        status="warning"
                    />
                    <KitInput
                        placeholder="Prefix & Suffix & error"
                        prefix={<SearchOutlined />}
                        suffix={<UserOutlined />}
                        status="error"
                    />
                </KitSpace>
            </KitSpace>
            <KitDivider orientation="left">TextArea</KitDivider>
            <KitSpace align="start">
                <KitInput.TextArea placeholder="TextArea warning" status="warning" />
                <KitInput.TextArea placeholder="TextArea error" status="error" />
            </KitSpace>
            <KitDivider orientation="left">Password</KitDivider>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitInput.Password status="warning" />
                    <KitInput.Password status="error" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitInput.Password prefix={<UserOutlined />} status="warning" />
                    <KitInput.Password prefix={<UserOutlined />} status="error" />
                </KitSpace>
            </KitSpace>
            <KitDivider orientation="left">Input, TextArea and Password with showCount</KitDivider>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitInput placeholder="Input showCount" showCount maxLength={20} status="warning" />
                    <br />
                    <KitInput placeholder="Input showCount" showCount maxLength={20} status="error" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitInput.TextArea placeholder="TextArea showCount" showCount maxLength={120} status="warning" />
                    <br />
                    <KitInput.TextArea placeholder="TextArea showCount" showCount maxLength={120} status="error" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitInput.Password showCount maxLength={10} status="warning" />
                    <br />
                    <KitInput.Password showCount maxLength={10} status="error" />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
