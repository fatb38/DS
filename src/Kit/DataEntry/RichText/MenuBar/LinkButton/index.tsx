import {faLink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FunctionComponent, useState} from 'react';
import {KitLinkModal} from './LinkModal';
import {IKitLinkButton} from './types';
import {KitButtonTooltip} from '../ButtonTooltip';
import {useKitLocale} from '@translation/useKitLocale';

export const KitLinkButton: FunctionComponent<IKitLinkButton> = ({editor}) => {
    const {locale} = useKitLocale();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const _onClickLink = () => {
        setIsModalOpen(true);
    };

    const _onModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <KitButtonTooltip title={locale.RichText?.insertLink}>
                <button
                    onClick={_onClickLink}
                    className={isModalOpen ? 'is-active' : ''}
                    aria-label={locale.RichText?.insertLink}
                >
                    <FontAwesomeIcon icon={faLink} />
                </button>
            </KitButtonTooltip>
            {isModalOpen && <KitLinkModal editor={editor} isOpen={isModalOpen} onClose={_onModalClose} />}
        </>
    );
};
