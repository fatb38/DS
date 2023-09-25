import React from 'react';

export const KitTemplate: React.FunctionComponent = () => {
    return null;
};

const CardArgTypes = {};

export const argTypes = {
    ...CardArgTypes
};

export const Template = args => {
    return <div {...args}>Component</div>;
};
