import React from 'react';
import {IEditorTemplate} from '../types';

export const KitComponent: React.FunctionComponent = () => null;

export const Template = props => <div {...props}>Component</div>;

export const EditorTemplate: IEditorTemplate = () => <div className="empty">Place your content here</div>;
EditorTemplate.path = 'components.Template';
EditorTemplate.title = 'Template';
