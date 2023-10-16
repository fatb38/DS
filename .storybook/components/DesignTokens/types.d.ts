import {ReactNode} from 'react';
import {IJSONObject} from '../ThemeEditor/types';

export interface IRow {
    level: number;
    _value?: string | number;
    _type?: string;
    _label?: string;
    _description?: string;
    _path?: string;
}

export interface ISection {
    title: string;
    level: number;
    children: ReactNode;
}

export interface ITokensList {
    path: string;
    tokens: IJSONObject;
}
