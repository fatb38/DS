import {KitAutoComplete} from '@kit/DataEntry';
import {IKitAutoComplete} from '@kit/DataEntry/AutoComplete/types';
import React from 'react';

export const Template = (args: IKitAutoComplete) => {
    return <KitAutoComplete {...args} />;
};
