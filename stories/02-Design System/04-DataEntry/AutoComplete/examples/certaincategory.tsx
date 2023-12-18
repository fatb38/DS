import React from 'react';
import {KitAutoComplete} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const renderTitle = title => (
        <span>
            {title}
            <a
                style={{float: 'right'}}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
                more
            </a>
        </span>
    );
    const renderItem = (title: string, count: number) => ({
        value: title,
        label: (
            <div
                style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'space-between'
                }}
            >
                {title}
                <span>
                    <FontAwesomeIcon icon={faUser} /> {count}
                </span>
            </div>
        )
    });
    const options = [
        {
            label: renderTitle('Libraries'),
            options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)]
        },
        {
            label: renderTitle('Solutions'),
            options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)]
        },
        {
            label: renderTitle('Articles'),
            options: [renderItem('AntDesign design language', 100000)]
        }
    ];

    return (
        <KitAutoComplete
            popupClassName="certain-category-search-dropdown"
            popupMatchSelectWidth={350}
            placeholder="input here"
            style={{width: 350}}
            options={options}
        />
    );
};

export default App;
