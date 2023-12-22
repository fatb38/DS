import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '../../../../src';
import {IEditorTemplate} from '../../../types';
import {IKitDatePicker, IKitRangePicker} from '@kit/DataEntry/DatePicker/types';

export const Template = (args: IKitDatePicker) => {
    const {RangePicker} = KitDatePicker;

    return (
        <KitSpace direction="vertical">
            <KitDatePicker {...args} />
            <RangePicker {...(args as IKitRangePicker)} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const {RangePicker} = KitDatePicker;

    return (
        <KitSpace size="m">
            <KitSpace direction="vertical">
                <KitDatePicker />
                <KitDatePicker disabled />
                <KitDatePicker status="warning" />
                <KitDatePicker status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <RangePicker />
                <RangePicker disabled />
                <RangePicker status="warning" />
                <RangePicker status="error" />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.DatePicker';
EditorTemplate.title = 'DatePicker';
