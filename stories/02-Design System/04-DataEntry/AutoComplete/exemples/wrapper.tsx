import React, {useState} from 'react';
import {KitAutoComplete} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
    label: str.repeat(repeat)
});

const App = () => {
    const mockVal = (str, repeat = 1) => ({
        value: str.repeat(repeat),
        label: str.repeat(repeat)
    });

    const [options, setOptions] = useState<{value: string; label: string}[]>([]);

    const getPanelValue = searchText =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    return (
        <KitSpace
            direction="vertical"
            style={{
                width: '100%'
            }}
        >
            <KitAutoComplete
                label="Label"
                helper="Helper"
                allowClear={false}
                options={options}
                onSearch={text => setOptions(getPanelValue(text))}
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                options={options}
                onSearch={text => setOptions(getPanelValue(text))}
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                options={options}
                onSearch={text => setOptions(getPanelValue(text))}
                disabled={true}
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                options={options}
                onSearch={text => setOptions(getPanelValue(text))}
                status="error"
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                options={options}
                onSearch={text => setOptions(getPanelValue(text))}
                status="warning"
                style={{
                    width: 200
                }}
            />
        </KitSpace>
    );
};

export default App;
