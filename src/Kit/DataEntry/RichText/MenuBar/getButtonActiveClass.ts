import {type Editor} from '@tiptap/core';

export const getButtonActiveClass = (editor: Editor, type: string | object) =>
    editor.isActive(type) ? 'is-active' : '';
