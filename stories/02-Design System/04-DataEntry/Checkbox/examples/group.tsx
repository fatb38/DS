import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';

const App = () => {
    const onChange = checkedValues => {
        console.log('checked = ', checkedValues);
    };

    const plainOptions = ['Apple', 'Pear', 'Orange'];

    const options = [
        {
            label: 'Apple',
            value: 'Apple'
        },
        {
            label: 'Pear',
            value: 'Pear'
        },
        {
            label: 'Orange',
            value: 'Orange'
        }
    ];

    const optionsWithDisabled = [
        {
            label: 'Apple',
            value: 'Apple'
        },
        {
            label: 'Pear',
            value: 'Pear'
        },
        {
            label: 'Orange',
            value: 'Orange',
            disabled: false
        }
    ];

    return (
        <KitSpace direction="vertical">
            <KitSpace wrap size={24}>
                <KitCheckbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                <KitCheckbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                <KitCheckbox.Group
                    options={optionsWithDisabled}
                    disabled
                    defaultValue={['Apple']}
                    onChange={onChange}
                />
            </KitSpace>
            <KitTypography.Title level="h4">Bordered groups</KitTypography.Title>
            <KitSpace wrap size={24}>
                <KitCheckbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} bordered />
                <KitCheckbox.Group options={options} defaultValue={['Pear']} onChange={onChange} bordered={true} />
                <KitCheckbox.Group
                    options={optionsWithDisabled}
                    disabled
                    defaultValue={['Apple']}
                    onChange={onChange}
                    bordered
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
