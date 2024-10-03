import {faListOl, faListUl} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getButtonActiveClass} from '../getButtonActiveClass';
import {FunctionComponent} from 'react';
import {IKitListButtons} from './types';
import {KitButtonTooltip} from '../ButtonTooltip';
import {useKitLocale} from '@translation/useKitLocale';

export const KitListButtons: FunctionComponent<IKitListButtons> = ({editor}) => {
    const {locale} = useKitLocale();

    const _onClickBulletList = () => {
        editor.chain().focus().toggleBulletList().run();
    };

    const _onClickOrderedList = () => {
        editor.chain().focus().toggleOrderedList().run();
    };

    return (
        <>
            <KitButtonTooltip title={locale.RichText?.bulletList}>
                <button
                    onClick={_onClickBulletList}
                    className={getButtonActiveClass(editor, 'bulletList')}
                    aria-label={locale.RichText?.bulletList}
                >
                    <FontAwesomeIcon icon={faListUl} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.orderedList}>
                <button
                    onClick={_onClickOrderedList}
                    className={getButtonActiveClass(editor, 'orderedList')}
                    aria-label={locale.RichText?.orderedList}
                >
                    <FontAwesomeIcon icon={faListOl} />
                </button>
            </KitButtonTooltip>
        </>
    );
};
