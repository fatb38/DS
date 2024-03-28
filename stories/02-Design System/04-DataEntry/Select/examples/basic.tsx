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
            color: theme.colors.secondary.red.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.colors.secondary.yellow.yellow400,
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.colors.primary.primary400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.colors.secondary.green.green400,
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

    const style = {width: 320};

    return (
        <KitSpace direction="vertical" size={'l'}>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Label only</KitTypography.Text>
                <KitSpace>
                    <KitSelect
                        placeholder="Select a status"
                        style={style}
                        labelOnly
                        defaultActiveFirstOption={false}
                        onChange={handleChange}
                        options={colorOptions}
                    />
                    <KitSelect
                        placeholder="Select a file"
                        defaultValue="file-2"
                        style={style}
                        labelOnly
                        defaultActiveFirstOption={false}
                        onChange={handleChange}
                        options={iconOptions}
                    />
                </KitSpace>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Color and Icon</KitTypography.Text>
                <KitSpace>
                    <KitSelect
                        defaultValue="not-allowed"
                        style={style}
                        defaultActiveFirstOption={false}
                        onChange={handleChange}
                        options={colorOptions}
                    />
                    <KitSelect
                        defaultValue="file-2"
                        style={style}
                        defaultActiveFirstOption={false}
                        onChange={handleChange}
                        options={iconOptions}
                    />
                </KitSpace>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Loading and allowClear=false</KitTypography.Text>
                <KitSpace>
                    <KitSelect
                        defaultValue="not-allowed"
                        style={style}
                        allowClear={false}
                        loading
                        options={colorOptions}
                    />
                    <KitSelect defaultValue="file-2" style={style} allowClear={false} loading options={iconOptions} />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
