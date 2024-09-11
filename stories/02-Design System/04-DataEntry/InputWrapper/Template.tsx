import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';
import {IKitInputWrapper} from '@kit/DataEntry/InputWrapper/types';
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

const getInfoClick = ({onInfoClick}): IKitInputWrapper['onInfoClick'] | undefined => {
    switch (onInfoClick) {
        case 'log to console':
            return () => console.log('info clicked');
        case '-':
        default:
            return;
    }
};

type toOmit = 'infoIcon' | 'onInfoClick';

interface ITemplate extends Omit<IKitInputWrapper, toOmit> {
    infoIcon: string;
    onInfoClick: string;
}

export const Template = (args: IKitInputWrapper) => {
    const icon = getIcon(args as never as ITemplate);
    const onInfoClick = getInfoClick(args as never as ITemplate);
    return (
        <KitInputWrapper {...args} infoIcon={icon} onInfoClick={onInfoClick}>
            <KitTypography.Text>Wrapped component</KitTypography.Text>
        </KitInputWrapper>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const wrapperProps = {
        label: 'Label',
        helper: 'Helper'
    };

    const _onFocus = () => console.log('focus');

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace direction="horizontal" size="m">
                <KitInputWrapper {...wrapperProps}>
                    <KitTypography.Text>Wrapped component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper {...wrapperProps} hoverable onFocus={_onFocus} bordered>
                    <KitTypography.Text>Wrapped component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper {...wrapperProps} disabled bordered>
                    <KitTypography.Text>Wrapped component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper {...wrapperProps} bordered status="warning">
                    <KitTypography.Text>Wrapped component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper {...wrapperProps} bordered status="error">
                    <KitTypography.Text>Wrapped component</KitTypography.Text>
                </KitInputWrapper>
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.InputWrapper';
EditorTemplate.title = 'InputWrapper';
