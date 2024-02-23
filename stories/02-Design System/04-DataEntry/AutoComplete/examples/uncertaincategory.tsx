import React, {ReactNode, useState} from 'react';
import {KitAutoComplete} from '@kit/DataEntry';

const App = () => {
    const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

    const searchResult = query => {
        return new Array(getRandomInt(5))
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}${idx}`;
                return {
                    value: category,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span>
                                Found {query} on{' '}
                                <a
                                    href={`https://s.taobao.com/search?q=${query}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {category}
                                </a>
                            </span>
                            <span>{getRandomInt(200, 100)} results</span>
                        </div>
                    )
                };
            });
    };

    const [options, setOptions] = useState<{value: string; label: ReactNode}[]>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = value => {
        console.log('onSelect', value);
    };

    return (
        <KitAutoComplete
            popupMatchSelectWidth
            style={{width: 300}}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            placeholder="input here"
        />
    );
};

export default App;
