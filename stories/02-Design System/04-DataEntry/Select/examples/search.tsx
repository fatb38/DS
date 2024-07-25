import {KitSelect} from '@kit/DataEntry/';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.colors.secondary.error.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.colors.tertiary.yellow.yellow400,
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.colors.primary.blue400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.colors.secondary.success.green400,
            label: 'Ok done by agency'
        }
    ];

    const style = {width: 340};

    return (
        <KitSelect
            placeholder="Select a status"
            style={style}
            options={colorOptions}
            optionFilterProp="label"
            showSearch
            onSearch={value => console.log(value)}
        />
    );
};

export default App;
