import React, {useState} from 'react';
import {KitAutoComplete} from '@kit/DataEntry';

const App = ({}) => {
    const [options, setOptions] = useState<{value: string; label: string}[]>([]);

    const handleSearch = (value: string) => {
        let res: {value: string; label: string}[] = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map(domain => ({
                value,
                label: `${value}@${domain}`
            }));
        }
        setOptions(res);
    };

    return (
        <KitAutoComplete
            style={{
                width: 200
            }}
            onSearch={handleSearch}
            placeholder="input here"
            options={options}
        />
    );
};

export default App;
