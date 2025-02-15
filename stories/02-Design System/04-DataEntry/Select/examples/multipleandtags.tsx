import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';
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
            color: theme.colors.secondary.error['400'],
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.colors.tertiary.yellow['400'],
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.colors.primary['400'],
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.colors.secondary.success['400'],
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
        <KitSpace direction="vertical" size="l">
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Mode=multiple (default / oneLine)</KitTypography.Text>
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
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Mode=tags (default / oneLine)</KitTypography.Text>
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
        </KitSpace>
    );
};

export default App;
