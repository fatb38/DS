import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '../../../../src';
import {IEditorTemplate} from '../../../types';
import {IKitDatePicker, IKitRangePicker} from '@kit/DataEntry/DatePicker/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faDownload, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const getIcon = ({infoIcon}) => {
    switch (infoIcon) {
        case 'faMagnifyingGlass':
            return <FontAwesomeIcon icon={faMagnifyingGlass} />;
        case 'faDownload':
            return <FontAwesomeIcon icon={faDownload} />;
        case 'faCircleCheck':
            return <FontAwesomeIcon icon={faCircleCheck} />;
        case '-':
        default:
            return null;
    }
};

const getInfoClick = ({onInfoClick}): IKitDatePicker['onInfoClick'] | undefined => {
    switch (onInfoClick) {
        case 'log to console':
            return () => console.log('info clicked');
        case '-':
        default:
            return;
    }
};

type toOmit = 'infoIcon' | 'onInfoClick';

interface ITemplate extends Omit<IKitDatePicker, toOmit> {
    infoIcon: string;
    onInfoClick: string;
}

export const Template = (args: IKitDatePicker) => {
    const {RangePicker} = KitDatePicker;
    const icon = getIcon(args as never as ITemplate);
    const onInfoClick = getInfoClick(args as never as ITemplate);

    return (
        <KitSpace direction="vertical">
            <KitDatePicker {...args} infoIcon={icon} onInfoClick={onInfoClick} />
            <RangePicker {...(args as IKitRangePicker)} infoIcon={icon} onInfoClick={onInfoClick} />
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
