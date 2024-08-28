import {KitSelect} from '@kit/DataEntry/';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

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
