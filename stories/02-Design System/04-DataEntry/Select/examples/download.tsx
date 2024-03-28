import {useState} from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitButton, KitTypography} from '@kit/General/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const [selectedOption2, setSelectedOption2] = useState<string | undefined>();

    const handleChange = value => {
        setSelectedOption(value as string);
    };

    const handleChange2 = value => {
        setSelectedOption2(value as string);
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
        <KitSpace direction="vertical" size={'l'}>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Download compact</KitTypography.Text>
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
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Download under the select</KitTypography.Text>
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
        </KitSpace>
    );
};

export default App;
