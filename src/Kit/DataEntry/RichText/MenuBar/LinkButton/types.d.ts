import {type Editor} from '@tiptap/core';

export type IKitLinkButton = {
    editor: Editor;
};

export type IKitLinkModal = {
    editor: Editor;
    isOpen: boolean;
    onClose: () => void;
};

export type IKitLinkMark = {
    linkUrl: string;
    textToDisplay: string;
    from: number;
    to: number;
} | null;

export type IKitLinkFormValues = {
    'text-to-display': string;
    'link-url': string;
};
