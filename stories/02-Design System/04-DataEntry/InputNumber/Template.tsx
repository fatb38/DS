import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import {KitInputNumberProps} from '@kit/DataEntry/InputNumber/types';

const getIcon = icon => {
    switch (icon) {
        case 'SearchOutlined':
            return <FontAwesomeIcon icon={faMagnifyingGlass} />;
        case 'CheckCircleOutlined':
            return <FontAwesomeIcon icon={faCircleCheck} />;
        case '':
        default:
            return null;
    }
};

export const Template = (args: KitInputNumberProps) => {
    const prefix = getIcon(args.prefix);

    return (
        <KitSpace direction="vertical">
            <KitInputNumber {...args} prefix={prefix} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="m">
            <KitInputNumber placeholder="10" />
            <KitInputNumber disabled placeholder="10" />
            <KitInputNumber status="warning" placeholder="10" />
            <KitInputNumber status="error" placeholder="10" />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.InputNumber';
EditorTemplate.title = 'InputNumber';
