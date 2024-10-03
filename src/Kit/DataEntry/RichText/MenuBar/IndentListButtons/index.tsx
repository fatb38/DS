import {faIndent, faOutdent} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FunctionComponent} from 'react';
import {IKitIndentListButtons} from './types';
import {KitButtonTooltip} from '../ButtonTooltip';
import {useKitLocale} from '@translation/useKitLocale';

export const KitIndentListButtons: FunctionComponent<IKitIndentListButtons> = ({editor}) => {
    const {locale} = useKitLocale();

    const canIndent = editor.can().sinkListItem('listItem');
    const canOutdent = editor.can().liftListItem('listItem');

    const _onClickIndentList = () => {
        editor.chain().focus().sinkListItem('listItem').run();
    };

    const _onClickOutdentList = () => {
        editor.chain().focus().liftListItem('listItem').run();
    };

    return (
        <>
            <KitButtonTooltip title={locale.RichText?.indent}>
                <button onClick={_onClickIndentList} disabled={!canIndent} aria-label={locale.RichText?.indent}>
                    <FontAwesomeIcon icon={faIndent} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.outdent}>
                <button onClick={_onClickOutdentList} disabled={!canOutdent} aria-label={locale.RichText?.outdent}>
                    <FontAwesomeIcon icon={faOutdent} />
                </button>
            </KitButtonTooltip>
        </>
    );
};
