import {forwardRef, useEffect, useRef, useState} from 'react';
import {KitRichTextProps} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import styles from './styles.module.scss';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import CharacterCount from '@tiptap/extension-character-count';
import {KitMenuBar} from './MenuBar';
import {KitEditorContentCharacterCount} from './EditorContentCharacterCount';
import {uuid} from '@utils/functions';

export const KitRichText = forwardRef<HTMLDivElement, KitRichTextProps>(
    (
        {
            label,
            helper,
            htmlFor,
            wrapperClassName,
            className,
            required,
            infoIcon,
            actions,
            onInfoClick,
            placeholder,
            disabled,
            readonly,
            status,
            defaultValue,
            value,
            onChange,
            maxLength,
            showCount = false
        },
        ref
    ) => {
        const {appId} = useKitTheme();
        const editorWrapperRef = useRef<HTMLDivElement>(null);

        const [hasFocus, setHasFocus] = useState(false);

        const clx = cn(appId, className, styles['kit-rich-text'], {
            'kit-rich-text-disabled': disabled,
            'kit-rich-text-readonly': readonly,
            'kit-rich-text-error': status === 'error',
            'kit-rich-text-warning': status === 'warning',
            'kit-rich-text-focused': hasFocus
        });

        const editor = useEditor({
            editable: !disabled && !readonly,
            content: defaultValue,
            extensions: [
                StarterKit,
                Document,
                Paragraph,
                Text,
                Heading.configure({
                    levels: [1, 2, 3, 4]
                }),
                Underline,
                TextAlign.configure({
                    types: ['heading', 'paragraph']
                }),
                Link.extend({inclusive: false}).configure({
                    openOnClick: false
                }),
                BulletList,
                OrderedList,
                ListItem,
                Placeholder.configure({
                    placeholder,
                    showOnlyWhenEditable: false
                }),
                CharacterCount.configure({
                    limit: maxLength
                })
            ],
            onUpdate: ({editor}) => {
                onChange && onChange(editor.getHTML());
            }
        });

        const wrapperUniqueClassName = 'kit-rich-text-wrapper-' + uuid();
        const clxWrapper = cn(wrapperClassName, wrapperUniqueClassName);

        useEffect(() => {
            const _handleClickOutside = (event: MouseEvent | FocusEvent) => {
                const target = event.target as HTMLElement;
                const kitRichTextWrapper = target.closest('.' + wrapperUniqueClassName);
                const selectFontSizeDropdown = target.closest('.select-font-size');
                const linkModal =
                    target.closest('.link-modal') || target.contains(document.querySelector('.link-modal'));

                // Check if the event target is outside the editor to keep the focus state if the user clicks on the MenuBar or on the link modal
                if (
                    !editorWrapperRef.current?.contains(target) &&
                    !kitRichTextWrapper &&
                    !selectFontSizeDropdown &&
                    !linkModal
                ) {
                    setHasFocus(false);
                }
            };

            document.addEventListener('mousedown', _handleClickOutside);
            document.addEventListener('focusin', _handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', _handleClickOutside);
                document.removeEventListener('focusin', _handleClickOutside);
            };
        }, [wrapperUniqueClassName]);

        useEffect(() => {
            if (editor !== null && value !== undefined && value !== editor.getHTML()) {
                editor.commands.setContent(value);
            }
        }, [value, editor]);

        if (!editor) {
            return null;
        }

        return (
            <KitInputWrapper
                className={clxWrapper}
                label={label}
                helper={helper}
                htmlFor={htmlFor}
                disabled={disabled}
                status={status}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <div ref={editorWrapperRef} className={clx}>
                    <KitMenuBar editor={editor} />
                    <EditorContent ref={ref} editor={editor} onFocus={() => setHasFocus(true)} />
                </div>
                {showCount && <KitEditorContentCharacterCount editor={editor} status={status} maxLength={maxLength} />}
            </KitInputWrapper>
        );
    }
);

KitRichText.displayName = 'KitRichText';
