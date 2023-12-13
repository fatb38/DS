import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IKitSelect} from '@kit/DataEntry/Select/types';

export const Template = (args: IKitSelect) => {
    return <KitSelect style={{width: '320px'}} {...args} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    const {theme} = useKitTheme();

    const style = {width: '320px'};

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.general.colors.secondary.red.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.general.colors.secondary.yellow.yellow400,
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.general.colors.primary.primary400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.general.colors.secondary.green.green400,
            label: 'Ok done by agency'
        }
    ];

    const iconOptions = [
        {
            value: 'file-1',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 1'
        },
        {
            value: 'file-2',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 2'
        },
        {
            value: 'file-3-1',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 3.1'
        },
        {
            value: 'file-3-2',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 3.2'
        }
    ];

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace>
                <KitSelect style={style} options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} disabled options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} disabled options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} status="warning" options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} status="warning" options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} status="error" options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} status="error" options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect
                    style={style}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied']}
                    mode="multiple"
                />
                <KitSelect
                    style={style}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied']}
                    mode="multiple"
                    oneLineTags
                />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} options={colorOptions} defaultValue={['not-allowed', 'denied']} mode="tags" />
                <KitSelect
                    style={style}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied']}
                    mode="tags"
                    oneLineTags
                />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Select';
EditorTemplate.title = 'Select';
