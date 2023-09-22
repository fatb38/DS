import React from 'react';

export const KitTemplate: React.FunctionComponent = () => {
    return null;
};

const TemplateArgTypes = {};

export const argTypes = {
    ...TemplateArgTypes
};

export const Template = props => {
    return <div {...props}>Component</div>;
};
