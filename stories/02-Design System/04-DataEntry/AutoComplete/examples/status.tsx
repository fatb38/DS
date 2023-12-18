import React, {useState} from 'react';
import {KitAutoComplete} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const mockVal = (str: string, repeat: number = 1) => ({
    value: str.repeat(repeat),
    label: str.repeat(repeat)
});

const App = () => {
    const [options, setOptions] = useState<{value: string; label: string}[]>([]);
    const [anotherOptions, setAnotherOptions] = useState<{value: string; label: string}[]>([]);

    const getPanelValue = (searchText: string) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    return (
        <KitSpace
            direction="vertical"
            style={{
                width: '100%'
            }}
        >
            <KitAutoComplete
                options={options}
                onSearch={text => setOptions(getPanelValue(text))}
                status="error"
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                options={anotherOptions}
                onSearch={text => setAnotherOptions(getPanelValue(text))}
                status="warning"
                style={{
                    width: 200
                }}
            />
        </KitSpace>
    );
};

export default App;
