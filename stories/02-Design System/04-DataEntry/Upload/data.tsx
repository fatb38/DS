import React from 'react';
import {KitUpload} from '@kit/DataEntry/Upload';

const UploadArgTypes = {};

export const argTypes = {
    ...UploadArgTypes
};

export const Template = ({listType, ...args}) => {
    return <KitUpload listType={listType} {...args}></KitUpload>;
};
