import cn from 'classnames';
import styles from './styles.module.scss';
import {IKitEditorContentCharacterCount} from './types';
import {FunctionComponent} from 'react';
import {useKitTheme} from '@theme/useKitTheme';

export const KitEditorContentCharacterCount: FunctionComponent<IKitEditorContentCharacterCount> = ({
    editor,
    status,
    maxLength
}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-rich-text-editor-content-character-count'], {
        'kit-rich-text-editor-content-character-count-error': status === 'error',
        'kit-rich-text-editor-content-character-count-warning': status === 'warning'
    });

    // Disabled the following eslint rules because 'editor.storage' is defined as Record<string, any>
    // Usage of 'editor.storage.characterCount' is documented here: https://tiptap.dev/docs/editor/extensions/functionality/character-count#characters
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const characterCount = editor.storage.characterCount.characters();

    return (
        <div className={clx}>
            <span>
                {characterCount}
                {maxLength !== undefined && ' / ' + maxLength}
            </span>
        </div>
    );
};
