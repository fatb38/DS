import React, {FunctionComponent} from 'react';
import {EditorProvider} from './Context';
import Editor from './Editor';
import {IEditorWrapper} from './types';

const EditorWrapper: FunctionComponent<IEditorWrapper> = props => {
    return (
        <EditorProvider schema={props.schema}>
            <Editor components={props.components} />
        </EditorProvider>
    );
};

export default EditorWrapper;
