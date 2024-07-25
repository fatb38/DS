import cn from 'classnames';
import styles from './styles.module.scss';
import {forwardRef} from 'react';
import {useKitTheme} from '@theme/useKitTheme';
import {IKitRedirectCard} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {KitIcon, KitTypography} from '@kit/General';
import {KitDivider} from '@kit/Layout';

export const KitRedirectCard = forwardRef<HTMLDivElement, IKitRedirectCard>(
    ({className, style, title, description, icon, imageAlt = '', imageSrc, disabled, onClick}, ref) => {
        const {appId} = useKitTheme();
        const clx = cn(styles['kit-redirect-card'], className, appId, {
            'kit-redirect-card-disabled': disabled,
            'kit-redirect-card-image': imageSrc
        });

        const shouldDisplayIcon = icon && !imageSrc;
        const shouldDisplayImage = imageSrc;
        const descriptionMaxLines = 2;

        return (
            <div className={clx} tabIndex={disabled ? -1 : 0} style={style} onClick={onClick} ref={ref}>
                {shouldDisplayIcon && <KitIcon className="kit-redirect-card-icon" icon={icon} />}
                {shouldDisplayImage && (
                    <>
                        <img alt={imageAlt} src={imageSrc} />
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
