import React from 'react';
import {KitSection} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitSection} from '@kit/Layout/Section/types';
import {KitTypography} from '@kit/General';

export const Template = ({style, ...args}: IKitSection) => {
    return (
        <KitSection
            {...args}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70px',
                ...style
            }}
        >
            <KitTypography.Text>This is section API</KitTypography.Text>
        </KitSection>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSection
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70px'
            }}
        >
            <KitTypography.Text>This is Section</KitTypography.Text>
        </KitSection>
    );
};
EditorTemplate.path = 'components.Section';
EditorTemplate.title = 'Section';
