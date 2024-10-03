import {faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitTypography} from '@kit/General';
import {useKitLocale} from '@translation/useKitLocale';
import {FunctionComponent, ReactNode} from 'react';

export const AlertDetails: FunctionComponent<{content: ReactNode}> = ({content}) => {
    const {locale} = useKitLocale();

    return (
        <>
            <div className="divider" />
            <details className="actions">
                <summary>
                    <FontAwesomeIcon icon={faCaretDown} className="alert-details-caret-down" aria-hidden />
                    <FontAwesomeIcon icon={faCaretRight} className="alert-details-caret-right" aria-hidden />
                    <KitTypography.Text size="fontSize5">{locale.Alert?.showDetails}</KitTypography.Text>
                </summary>

                <div className="content">
                    <KitTypography.Text size="fontSize5">{content}</KitTypography.Text>
                </div>
            </details>
        </>
    );
};
