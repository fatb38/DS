import React from 'react';
import {KitAutoComplete} from '@kit/DataEntry';
import {BaseOptionType} from 'antd/es/select';

const App = () => {
    const options = [
        {
            value: 'Burns Bay Road',
            label: 'Burns Bay Road'
        },
        {
            value: 'Downing Street',
            label: 'Downing Street'
        },
        {
            value: 'Wall Street',
            label: 'Wall Street'
        }
    ];

    return (
        <KitAutoComplete
            style={{
                width: 200
            }}
            options={options}
            placeholder="try to type `b`"
            filterOption={(inputValue: string, option: BaseOptionType) =>
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                option?.value?.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    );
};

export default App;
