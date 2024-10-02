import {faBold, faItalic, faUnderline} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getButtonActiveClass} from '../getButtonActiveClass';
import {FunctionComponent} from 'react';
import {IKitFontStylesButtons} from './types';
import {KitButtonTooltip} from '../ButtonTooltip';
import {useKitLocale} from '@translation/useKitLocale';

export const KitFontStylesButtons: FunctionComponent<IKitFontStylesButtons> = ({editor}) => {
    const {locale} = useKitLocale();

    const _onClickBold = () => {
        editor.chain().focus().toggleBold().run();
    };

    const _onClickItalic = () => {
        editor.chain().focus().toggleItalic().run();
    };

    const _onClickUnderline = () => {
        editor.chain().focus().toggleUnderline().run();
    };

    return (
        <>
            <KitButtonTooltip title={locale.RichText?.bold}>
                <button
                    onClick={_onClickBold}
                    className={getButtonActiveClass(editor, 'bold')}
                    aria-label={locale.RichText?.bold}
                >
                    <FontAwesomeIcon icon={faBold} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.italic}>
                <button
                    onClick={_onClickItalic}
                    className={getButtonActiveClass(editor, 'italic')}
                    aria-label={locale.RichText?.italic}
                >
                    <FontAwesomeIcon icon={faItalic} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.underline}>
                <button
                    onClick={_onClickUnderline}
                    className={getButtonActiveClass(editor, 'underline')}
                    aria-label={locale.RichText?.underline}
                >
                    <FontAwesomeIcon icon={faUnderline} />
                </button>
            </KitButtonTooltip>
        </>
    );
};
