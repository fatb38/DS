import {Level} from '@tiptap/extension-heading';
import {type Editor} from '@tiptap/core';

export type FontSizeHeadingKey = {
    key: string;
    editorLevel: Level;
    label?: string;
};

export type FontSizeNormalKey = {
    key: string;
    label?: string;
};

export type IKitFontSizeSelect = {
    editor: Editor;
};
