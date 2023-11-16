import React, {FunctionComponent, createContext, useCallback, useRef, useState} from 'react';
import u from 'updeep';
import {IEditorContext, IEditorProvider, IJSONObject} from './types';
import {getKitAristidTheme} from '../../../src/theme/aristid';

export const EditorContext = createContext<IEditorContext>({
    theme: {},
    defaultTheme: {},
    fields: {},
    setThemeValue: () => {},
    setTheme: () => {}
});

const _isEmptyObject = value => {
    return typeof value === 'object' && Object.keys(value).length === 0;
};

export const EditorProvider: FunctionComponent<IEditorProvider> = ({children, schema}) => {
    const value = useThemeEditorContext(schema);

    return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};

const useThemeEditorContext = (schema: IJSONObject): IEditorContext => {
    const [theme, setTheme] = useState({});
    const defaultTheme = getKitAristidTheme();

    const fields = useRef<IJSONObject>(schema);

    const setThemeValue = useCallback(
        (path, value) => {
            if (value !== null && value !== '') {
                setTheme({...u.updateIn(path, value, theme)});
            } else {
                setTheme(prev => {
                    const parts = path.split('.');
                    let next = u.updateIn(path, u.omitted, prev);
                    while (parts.length) {
                        parts.pop();
                        if (parts.length) {
                            next = u.updateIn(parts.join('.'), u.if(_isEmptyObject, u.omitted), next);
                        }
                    }
                    return next;
                });
            }
        },
        [theme]
    );

    return {
        theme,
        defaultTheme,
        setTheme,
        setThemeValue,
        fields: fields.current
    };
};
