import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.colors.secondary.error['400'],
            label: 'Not allowed',
            disabled: true
        },
        {
            value: 'denied',
            color: theme.colors.tertiary.yellow['400'],
            label: 'Denied',
            disabled: true
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

    const style = {width: 320};

    return (
        <KitSpace>
            <KitSelect
                placeholder="Select a status"
                style={style}
                options={colorOptions}
                defaultActiveFirstOption={false}
            />
            <KitSelect placeholder="Select a status" style={style} disabled options={colorOptions} />
        </KitSpace>
    );
};

export default App;
