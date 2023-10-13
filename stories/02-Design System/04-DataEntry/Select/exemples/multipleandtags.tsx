import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const {theme} = useKitTheme();

    const handleChange = value => {
        console.log(`selected ${value}`);
    };

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.general.colors.secondary.red.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.general.colors.secondary.yellow.yellow400,
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.general.colors.primary.primary400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.general.colors.secondary.green.green400,
            label: 'Ok done by agency'
        }
    ];

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
