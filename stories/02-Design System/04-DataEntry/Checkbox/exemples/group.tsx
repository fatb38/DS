import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

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
            <KitCheckbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            <br />
            <KitCheckbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
            <br />
            <KitCheckbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
        </KitSpace>
    );
};

export default App;
