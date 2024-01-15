import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitAutoComplete} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

export const BasicAutocompleteTest: FC = () => {
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
        <div>
            <KitTypography.Title level="h3">Basic autocomplete</KitTypography.Title>
                <KitAutoComplete
                    options={[{label: 'Test', value: 'test'}]}
                    style={{
                        width: 200,
                        marginBottom: 70
                    }}
                    placeholder="input here"
                    open
                />

                <KitAutoComplete
                    popupClassName="certain-category-search-dropdown"
                    popupMatchSelectWidth={350}
                    placeholder="input here"
                    style={{width: 350}}
                    options={options}
                    open
                />
        </div>
    )
}