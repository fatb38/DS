import React, {useState} from 'react';
import {KitAutoComplete} from '@kit/DataEntry';

const mockVal = (str: string, repeat = 1) => ({
    label: str.repeat(repeat),
    value: str.repeat(repeat)
});

const App = () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{label: string; value: string}[]>([]);
    const [anotherOptions, setAnotherOptions] = useState<{label: string; value: string}[]>([]);

    const getPanelValue = (searchText: string) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    return (
        <>
            <KitAutoComplete
                options={options}
                style={{
                    width: 200
                }}
                onSelect={onSelect}
                onSearch={text => setOptions(getPanelValue(text))}
                placeholder="input here"
            />
            <br />
            <br />
            <KitAutoComplete
                value={value}
                options={anotherOptions}
                style={{
                    width: 200
                }}
                onSelect={onSelect}
                onSearch={text => setAnotherOptions(getPanelValue(text))}
                onChange={onChange}
                placeholder="control mode"
            />
        </>
    );
};

export default App;
