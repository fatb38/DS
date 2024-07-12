import {FunctionComponent} from 'react';
import {IKitSnackBar} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {closeSnackBar} from './snack-bar-function';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitSnackBar: FunctionComponent<IKitSnackBar> = ({message, className, ctaText, ctaOnClick, closable, style}) => {
    const {appId} = useKitTheme();
    const showCtaContainer = ctaText !== undefined && ctaOnClick !== undefined;
    const showCloseContainer = closable !== undefined;

    const gridTemplateColumns = `auto ${showCtaContainer ? 'min-content' : ''} ${showCloseContainer ? '12px' : ''}`;
    const clx = cn(appId, styles['kit-snackbar'], className, {
        'with-close-container': showCloseContainer,
        'with-cta-container': showCtaContainer
    });

    return (
        <div style={{...style, gridTemplateColumns}} className={clx}>
            <div className="kit-snackbar-grid kit-snackbar-grid-one">
                <div className="kit-snackbar-title">{message}</div>
            </div>
            {showCtaContainer && (
                <div className="kit-snackbar-grid kit-snackbar-grid-two">
                    <div
                        className="kit-snackbar-cta-container"
                        onClick={() => {
                            ctaOnClick();
                            closeSnackBar();
                        }}
                    >
                        <div className="kit-snackbar-cta">{ctaText}</div>
                    </div>
                </div>
            )}
            {showCloseContainer && (
                <div className="kit-snackbar-grid kit-snackbar-grid-three">
                    <div className="kit-snackbar-close-container" onClick={() => closeSnackBar()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default KitSnackBar;
