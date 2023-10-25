import React from 'react';
import {KitAutoComplete} from '@kit/DataEntry';

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
            filterOption={(inputValue, option) =>
                option?.value?.toString().toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    );
};

export default App;
