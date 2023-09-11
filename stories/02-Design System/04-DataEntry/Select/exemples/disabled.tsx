import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import theme from '@theme/index';

const App = () => {
    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.color.secondary.red.red400,
            label: 'Not allowed',
            disabled: true
        },
        {
            value: 'denied',
            color: theme.color.secondary.yellow.yellow400,
            label: 'Denied',
            disabled: true
        },
        {
            value: 'todo',
            color: theme.color.primary.blue400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.color.secondary.green.green400,
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
