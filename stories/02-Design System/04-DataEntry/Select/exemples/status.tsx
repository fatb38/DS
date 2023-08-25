import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import theme from '@theme/index';

const App = ({}) => {
    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.color.secondary.red.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.color.secondary.yellow.yellow400,
            label: 'Denied'
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
                status="warning"
            />
            <KitSelect
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
