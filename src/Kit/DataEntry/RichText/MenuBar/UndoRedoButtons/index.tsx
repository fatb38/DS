import {faArrowRotateLeft, faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FunctionComponent} from 'react';
import {IKitUndoRedoButtons} from './types';
import {KitButtonTooltip} from '../ButtonTooltip';
import {useKitLocale} from '@translation/useKitLocale';

export const KitUndoRedoButtons: FunctionComponent<IKitUndoRedoButtons> = ({editor}) => {
    const {locale} = useKitLocale();

    const canUndo = editor.can().chain().focus().undo().run();
    const canRedo = editor.can().chain().focus().redo().run();

    const _onClickUndo = () => {
        editor.chain().focus().undo().run();
    };

    const _onClickRedo = () => {
        editor.chain().focus().redo().run();
    };

    return (
        <>
            <KitButtonTooltip title={locale.RichText?.undo}>
                <button onClick={_onClickUndo} disabled={!canUndo} aria-label={locale.RichText?.undo}>
                    <FontAwesomeIcon icon={faArrowRotateLeft} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.redo}>
                <button onClick={_onClickRedo} disabled={!canRedo} aria-label={locale.RichText?.redo}>
                    <FontAwesomeIcon icon={faArrowRotateRight} />
                </button>
            </KitButtonTooltip>
        </>
    );
};
