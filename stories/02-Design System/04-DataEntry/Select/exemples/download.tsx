import React, {useState} from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [selectedOption, setSelectedOption] = useState();
    const [selectedOption2, setSelectedOption2] = useState();

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
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 1'
        },
        {
            value: 'file-2',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 2'
        },
        {
            value: 'file-3-1',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 3.1'
        },
        {
            value: 'file-3-2',
            icon: <FontAwesomeIcon icon={faFile} />,
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
                    <KitButton
                        type="primary"
                        icon={<FontAwesomeIcon icon={faDownload} />}
                        iconSize="xl"
                        onClick={handleClick}
                    />
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
                        icon={<FontAwesomeIcon icon={faDownload} />}
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
