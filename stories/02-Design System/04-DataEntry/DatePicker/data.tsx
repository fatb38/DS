import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';

export const DatePickerArgTypes = {
    component: {
        name: 'component',
        description: 'Choose the component to play with (not a prop)',
        control: {
            type: 'select',
            defaultValue: 'Input'
        },
        defaultValue: 'Input'
    }
};

export const Template = ({...args}) => {
    return <KitDatePicker {...args} />;
};
