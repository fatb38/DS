import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
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

    const style = {width: 320};

    return (
        <KitSpace direction="vertical">
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                style={style}
                options={colorOptions}
                defaultActiveFirstOption={false}
            />
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                disabled
                style={style}
                options={colorOptions}
                defaultActiveFirstOption={false}
            />
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                style={style}
                options={colorOptions}
                defaultActiveFirstOption={false}
                status="warning"
            />
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                style={style}
                options={colorOptions}
                defaultActiveFirstOption={false}
                status="error"
            />
        </KitSpace>
    );
};

export default App;
