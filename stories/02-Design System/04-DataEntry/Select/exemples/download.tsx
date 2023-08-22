import React, {useState} from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';
import {DownloadOutlined, FileOutlined} from '@ant-design/icons';

const App = ({}) => {
    let [selectedOption, setSelectedOption] = useState();
    let [selectedOption2, setSelectedOption2] = useState();

    const handleChange = value => {
        setSelectedOption(value);
    };

    const handleChange2 = value => {
        setSelectedOption2(value);
    };

    const handleClick = () => {
        alert(`download ${selectedOption}`);
    };

    const handleClick2 = () => {
        alert(`download ${selectedOption2}`);
    };

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

    const style = {width: 320};

    return (
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Download compact</KitDivider>
            <KitSpace.Compact>
                <KitSelect
                    placeholder="Select a file to download"
                    style={style}
                    onChange={handleChange}
                    options={iconOptions}
                />
                {selectedOption && (
                    <KitButton type="primary" bigIcon icon={<DownloadOutlined />} onClick={handleClick} />
                )}
            </KitSpace.Compact>
            <KitDivider orientation="left">Download under the select</KitDivider>
            <KitSpace direction="vertical">
                <KitSelect
                    placeholder="Select a file to download"
                    style={style}
                    onChange={handleChange2}
                    options={iconOptions}
                />
                {selectedOption2 && (
                    <KitButton
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={handleClick2}
                        block
                        style={{marginTop: '16px'}}
                    >
                        Download
                    </KitButton>
                )}
            </KitSpace>
        </KitSpace>
    );
};

export default App;
