import cn from 'classnames';
import styles from './styles.module.scss';
import {forwardRef} from 'react';
import {useKitTheme} from '@theme/useKitTheme';
import {IKitRedirectCard} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {KitIcon, KitTypography} from '@kit/General';
import {KitDivider} from '@kit/Layout';
import {RedirectCardActions} from './RedirectCardActions';

export const KitRedirectCard = forwardRef<HTMLDivElement, IKitRedirectCard>(
    ({className, style, title, description, icon, coverSrc, disabled, actions, onClick, coverAlt = ''}, ref) => {
        const shouldDisplayIcon = icon !== undefined && coverSrc === undefined;
        const shouldDisplayCover = coverSrc !== undefined;
        const shouldDisplayActions = actions !== undefined;
        const descriptionMaxLines = 2;

        const {appId} = useKitTheme();

        const clx = cn(styles['kit-redirect-card'], className, appId, {
            'kit-redirect-card-disabled': disabled,
            'kit-redirect-card-with-cover': shouldDisplayCover,
            'kit-redirect-card-with-actions': shouldDisplayActions
        });

        return (
            <div className={clx} tabIndex={disabled ? -1 : 0} style={style} onClick={onClick} ref={ref}>
                {shouldDisplayActions && shouldDisplayIcon && (
                    <RedirectCardActions actions={actions} disabled={disabled} />
                )}
                {shouldDisplayIcon && <KitIcon className="kit-redirect-card-icon" icon={icon} />}
                {shouldDisplayCover && (
                    <>
                        <div className="kit-redirect-card-cover">
                            <img alt={coverAlt} src={coverSrc} />
                            <div className="kit-redirect-card-actions-mask" />
                            {shouldDisplayActions && <RedirectCardActions actions={actions} disabled={disabled} />}
                        </div>
                        <KitDivider noMargin />
                    </>
                )}
                <div className="kit-redirect-card-content">
                    <section>
                        <KitTypography.Title ellipsis={{tooltip: true}} level="h3" disabled={disabled}>
                            {title}
                        </KitTypography.Title>
                        {description && (
                            <KitTypography.Paragraph
                                ellipsis={{rows: descriptionMaxLines, tooltip: description}}
                                disabled={disabled}
                            >
                                {description}
                            </KitTypography.Paragraph>
                        )}
                    </section>
                    <KitIcon
                        className="kit-redirect-card-redirect-icon"
                        icon={<FontAwesomeIcon icon={faArrowRight} />}
                    />
                </div>
            </div>
        );
    }
);

KitRedirectCard.displayName = 'KitRedirectCard';
