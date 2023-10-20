import {IKitTheme} from '@theme/types';
import {FunctionComponent, MouseEventHandler, ReactNode} from 'react';

type JSONValue = string | null | number | boolean | {[x: string]: JSONValue} | Array<JSONValue>;

export interface IJSONObject {
    [x: string]: JSONValue;
}

export type IEditorTemplate = FunctionComponent & {
    path: string;
    title: string;
};

export interface IComponents {
    [x: string]: IEditorTemplate;
}

export type CollapseExpandObject = {
    collapse: () => void;
    expand: () => void;
};

export interface IComponentBlock {
    children?: ReactNode;
    title: string;
    path: string;
    showA11yToggle: boolean;
    container?: boolean;
    level?: number;
    registerExpandCollapse?: (path: string, object: CollapseExpandObject) => void;
    onCollapseGroup?: MouseEventHandler<HTMLAnchorElement>;
    onExpandGroup?: MouseEventHandler<HTMLAnchorElement>;
}

export interface IItem {
    _label: string;
    _path: string;
    _type?: string;
    _description?: string;
    _min?: number;
    _value?: string | number;
    [x: string]: JSONValue | undefined;
}

export type getItemsType = (
    item: IItem,
    itemName: string,
    level: number,
    themeValue: JSONValue | undefined,
    childrenOnly: boolean
) => ReactNode;

export interface IField {
    _type: string;
    _path: string;
    _label: string;
    _value: string | number;
    level: number;
    _min?: number;
    _description?: string;
    isVisible?: boolean;
    addResetFunction?: (path: string, fn: Function) => void;
    onTokenChanged: Function;
}

export interface ISection {
    isOpen?: boolean;
    title: string;
    path: string;
    children?: ReactNode;
    level: number;
    registerExpandCollapse?: (object: CollapseExpandObject) => void;
    onReset?: (path: string) => void;
}

export interface IToken {
    path: string;
    addResetFunction?: (path: string, fn: Function) => void;
    onResetSection?: (path: string) => void;
    onTokenChanged: Function;
    level?: number;
}

export interface IThemeData {
    [x: string]: IKitTheme;
}

export interface IEditorContext {
    theme: IKitTheme;
    defaultTheme: IKitTheme;
    fields: IJSONObject;
    setThemeValue: Function;
    setTheme: Function;
}

export interface IEditorProvider {
    children?: ReactNode;
    schema: IJSONObject;
}

export interface IEditor {
    components: {
        [id: string]: IComponents;
    };
}

export interface IEditorWrapper {
    schema: IJSONObject;
    components: {
        [id: string]: IComponents;
    };
}

export interface IExpandIcon {
    icon: string;
}

export interface IHeader {
    title: string;
    level?: number;
    onReset?: Function;
    resetText?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    onClick?: Function;
    onExpandAll?: MouseEventHandler<HTMLAnchorElement>;
    onCollapseAll?: MouseEventHandler<HTMLAnchorElement>;
}
