import {type Editor} from '@tiptap/core';
import {KitRichTextStatus} from '../types';

export type IKitEditorContentCharacterCount = {
    editor: Editor;
    maxLength?: number;
    status?: KitRichTextStatus;
};
