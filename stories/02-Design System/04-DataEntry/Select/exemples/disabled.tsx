import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/theme-context';

const App = () => {
    const {theme} = useKitTheme();

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.general.colors.secondary.red.red400,
            label: 'Not allowed',
            disabled: true
        },
        {
            value: 'denied',
            color: theme.general.colors.secondary.yellow.yellow400,
            label: 'Denied',
            disabled: true
        },
        {
            value: 'todo',
            color: theme.general.colors.primary.blue400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.general.colors.secondary.green.green400,
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
