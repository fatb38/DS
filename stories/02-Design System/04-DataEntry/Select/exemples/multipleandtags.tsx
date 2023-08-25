import React from 'react';
import {KitInput, KitSelect, KitTag} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {FileOutlined} from '@ant-design/icons';
import theme from '@theme/index';

const App = ({}) => {
    const handleChange = value => {
        console.log(`selected ${value}`);
    };

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.color.secondary.red.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.color.secondary.yellow.yellow400,
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.color.primary.blue400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.color.secondary.green.green400,
            label: 'Ok done by agency'
        }
    ];

    const iconOptions = [
        {
            value: 'file-1',
            icon: <FileOutlined />,
            label: 'File 1'
        },
        {
            value: 'file-2',
            icon: <FileOutlined />,
            label: 'File 2'
        },
        {
            value: 'file-3-1',
            icon: <FileOutlined />,
            label: 'File 3.1'
        },
        {
            value: 'file-3-2',
            icon: <FileOutlined />,
            label: 'File 3.2'
        }
    ];

    const style = {width: 340};

    return (
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Mode=multiple (default / oneLine)</KitDivider>
            <KitSpace>
                <KitSelect
                    mode="multiple"
                    placeholder="Select a status"
                    style={style}
                    defaultActiveFirstOption={false}
                    onChange={handleChange}
                    options={colorOptions}
                />
                <KitSelect
                    mode="multiple"
                    placeholder="Select a status"
                    style={style}
                    oneLineTags
                    defaultActiveFirstOption={false}
                    onChange={handleChange}
                    options={colorOptions}
                />
            </KitSpace>
            <KitDivider orientation="left">Mode=tags (default / oneLine)</KitDivider>
            <KitSpace>
                <KitSelect
                    mode="tags"
                    placeholder="Select a file"
                    style={style}
                    defaultActiveFirstOption={false}
                    onChange={handleChange}
                    options={iconOptions}
                />
                <KitSelect
                    mode="tags"
                    placeholder="Select a file"
                    style={style}
                    labelOnly
                    oneLineTags
                    defaultActiveFirstOption={false}
                    onChange={handleChange}
                    options={iconOptions}
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
