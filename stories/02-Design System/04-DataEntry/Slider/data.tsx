import React from 'react';
import {KitSlider} from '@kit/DataEntry/';

const SliderArgTypes = {};

export const argTypes = {
    ...SliderArgTypes
};

export const Template = args => {
    return <KitSlider {...args} />;
};
