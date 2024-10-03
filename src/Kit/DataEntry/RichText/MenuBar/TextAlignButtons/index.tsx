import {faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getButtonActiveClass} from '../getButtonActiveClass';
import {FunctionComponent} from 'react';
import {IKitTextAlignButtons} from './types';
import {KitButtonTooltip} from '../ButtonTooltip';
import {useKitLocale} from '@translation/useKitLocale';

export const KitTextAlignButtons: FunctionComponent<IKitTextAlignButtons> = ({editor}) => {
    const {locale} = useKitLocale();

    const _onClickAlignLeft = () => {
        editor.chain().focus().setTextAlign('left').run();
    };

    const _onClickAlignCenter = () => {
        editor.chain().focus().setTextAlign('center').run();
    };

    const _onClickAlignRight = () => {
        editor.chain().focus().setTextAlign('right').run();
    };

    const _onClickAlignJustify = () => {
        editor.chain().focus().setTextAlign('justify').run();
    };

    return (
        <>
            <KitButtonTooltip title={locale.RichText?.alignLeft}>
                <button
                    onClick={_onClickAlignLeft}
                    className={getButtonActiveClass(editor, {textAlign: 'left'})}
                    aria-label={locale.RichText?.alignLeft}
                >
                    <FontAwesomeIcon icon={faAlignLeft} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.alignCenter}>
                <button
                    onClick={_onClickAlignCenter}
                    className={getButtonActiveClass(editor, {textAlign: 'center'})}
                    aria-label={locale.RichText?.alignCenter}
                >
                    <FontAwesomeIcon icon={faAlignCenter} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.alignRight}>
                <button
                    onClick={_onClickAlignRight}
                    className={getButtonActiveClass(editor, {textAlign: 'right'})}
                    aria-label={locale.RichText?.alignRight}
                >
                    <FontAwesomeIcon icon={faAlignRight} />
                </button>
            </KitButtonTooltip>
            <KitButtonTooltip title={locale.RichText?.justify}>
                <button
                    onClick={_onClickAlignJustify}
                    className={getButtonActiveClass(editor, {textAlign: 'justify'})}
                    aria-label={locale.RichText?.justify}
                >
                    <FontAwesomeIcon icon={faAlignJustify} />
                </button>
            </KitButtonTooltip>
        </>
    );
};
