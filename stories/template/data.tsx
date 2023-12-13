/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {IEditorTemplate} from '../types';

export const KitComponent: React.FunctionComponent = () => {
    return null;
};

const TemplateArgTypes = {};

export const argTypes = {
    ...TemplateArgTypes
};

export const Template = props => {
    return <div {...props}>Component</div>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return <div className="empty">Place your content here</div>;
};
EditorTemplate.path = 'components.Template';
EditorTemplate.title = 'Template';
