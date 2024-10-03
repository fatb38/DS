import {type Editor} from '@tiptap/core';
import {IKitLinkMark} from './types';

export const getLinkMarkAtCursor = (editor: Editor): IKitLinkMark => {
    const {state} = editor;
    const {from, to} = state.selection;
    const linkMarkType = state.schema.marks.link;

    let link: IKitLinkMark = null;

    state.doc.nodesBetween(from, to, (node, pos) => {
        const linkMark = node.marks.find(mark => mark.type === linkMarkType);

        if (linkMark) {
            const linkMarkFrom = pos;
            const linkMarkTo = pos + node.nodeSize;

            link = {
                // Disabled the following eslint rule because `linkMark.attrs` is defined as `readonly [attr: string]: any;`
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                linkUrl: linkMark.attrs.href,
                textToDisplay: node.textContent,
                from: linkMarkFrom,
                to: linkMarkTo
            };

            return false;
        }
    });

    if (link) {
        return link;
    }

    const selectedText = state.doc.textBetween(from, to);

    return {
        linkUrl: '',
        textToDisplay: selectedText,
        from,
        to
    };
};
