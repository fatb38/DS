import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';
import {IKitInputWrapper} from '@kit/DataEntry/InputWrapper/types';

export const Template = (args: IKitInputWrapper) => {
    return (
        <KitInputWrapper {...args}>
            <KitTypography.Text>Wrapped component</KitTypography.Text>
        </KitInputWrapper>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    const wrapperProps = {
        label: 'Label',
        helper: 'Helper'
    };

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace direction="horizontal" size="m">
                <KitInputWrapper {...wrapperProps}>
                    <KitTypography.Text>Wrapped component</KitTypography.Text>
                </KitInputWrapper>
                <KitInputWrapper {...wrapperProps} bordered>
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
