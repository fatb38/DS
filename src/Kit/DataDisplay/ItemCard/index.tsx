import {forwardRef} from 'react';
import {IKitItemCard} from './types';
import cn from 'classnames';
import {KitTypography} from '@kit/General';
import {KitCheckbox, KitSwitch} from '@kit/DataEntry';
import {KitBreadcrumb} from '@kit/Navigation';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTag} from '@kit/DataDisplay/Tag';

import styles from './styles.module.scss';
import {ItemCardActions} from './ItemCardActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';

export const KitItemCard = forwardRef<HTMLDivElement, IKitItemCard>(
    (
        {
            className,
            style,
            display = 'card',
            disabled = false,
            imageAlt = '',
            imageSrc,
            icon,
            tagGroup,
            breadcrumbItems,
            title,
            description,
            draggableHandler,
            selected,
            onSelect,
            activateLabel,
            activated,
            onActivate,
            extra,
            actions
        },
        ref
    ) => {
        const {appId} = useKitTheme();

        const shouldDisplayCheckbox = onSelect !== undefined;
        const shouldDisplayDraggableHandler = draggableHandler !== undefined;
        const shouldDisplayImage = imageSrc !== undefined;
        const shouldDisplayIcon = icon !== undefined;
        const shouldDisplayTags = tagGroup !== undefined;
        const shouldDisplayBreadcrumb = breadcrumbItems !== undefined;
        const shouldDisplayContent = title !== undefined || description !== undefined;
        const shouldDisplayExtra = extra !== undefined;
        const shouldDisplaySwitch = onActivate !== undefined;
        const shouldDisplayActions = actions !== undefined;

        const dataDisplayedOnDifferentRows = [shouldDisplayTags, shouldDisplayBreadcrumb, shouldDisplayExtra];
        const numberOfDataDisplayedOnDifferentRows = dataDisplayedOnDifferentRows.filter(Boolean).length;

        const isDisplayedAsList = display === 'list';
        const isDisplayedAsCard = display === 'card';

        const clx = cn(styles['kit-item-card'], className, appId, `kit-item-card-display-${display}`, {
            [`kit-item-card-display-list-with-${numberOfDataDisplayedOnDifferentRows}-rows`]:
                isDisplayedAsList && numberOfDataDisplayedOnDifferentRows > 0,
            'kit-item-card-display-card-checkbox-or-draggable-handler':
                isDisplayedAsCard && (shouldDisplayCheckbox || shouldDisplayDraggableHandler),
            'kit-item-card-disabled': disabled,
            'kit-item-card-selected': selected,
            'kit-item-card-with-actions': shouldDisplayActions
        });

        if (disabled && shouldDisplayTags) {
            tagGroup.tags = tagGroup.tags.map(tag => ({...tag, disabled}));
            tagGroup.othersTagDisabled = true;
        }

        const kitItemCardCheckbox = (
            <div className="kit-item-card-checkbox">
                <KitCheckbox onChange={onSelect} checked={selected} disabled={disabled} />
            </div>
        );

        const kitItemCardDraggableHandler = <div className="kit-item-card-draggable-handler">{draggableHandler}</div>;

        return (
            <div tabIndex={disabled ? -1 : 0} className={clx} style={style} ref={ref}>
                {isDisplayedAsCard ? (
                    <>
                        {shouldDisplayCheckbox && kitItemCardCheckbox}
                        {shouldDisplayDraggableHandler && kitItemCardDraggableHandler}
                    </>
                ) : (
                    <>
                        {shouldDisplayDraggableHandler && kitItemCardDraggableHandler}
                        {shouldDisplayCheckbox && kitItemCardCheckbox}
                    </>
                )}

                <div className="kit-item-card-image">
                    {shouldDisplayImage ? (
                        <img src={imageSrc} alt={imageAlt} />
                    ) : (
                        <div className="kit-item-card-image-placeholder">
                            {shouldDisplayIcon ? icon : <FontAwesomeIcon icon={faImage} />}
                        </div>
                    )}
                    <div className="kit-item-card-actions-mask" />
                    {shouldDisplayActions && isDisplayedAsCard && (
                        <ItemCardActions actions={actions} disabled={disabled} display={display} />
                    )}
                </div>

                {shouldDisplayTags && (
                    <div className="kit-item-card-tags">
                        <KitTag.Group
                            tags={tagGroup.tags}
                            othersTagType={tagGroup.othersTagType}
                            othersTagDisabled={tagGroup.othersTagDisabled}
                        />
                    </div>
                )}
                {shouldDisplayBreadcrumb && (
                    <div className="kit-item-card-breadcrumb">
                        <KitBreadcrumb items={breadcrumbItems} />
                    </div>
                )}
                {shouldDisplayContent && (
                    <div className="kit-item-card-content">
                        {title && (
                            <KitTypography.Title level="h3" ellipsis={{tooltip: true, rows: 2}} disabled={disabled}>
                                {title}
                            </KitTypography.Title>
                        )}
                        {description && (
                            <KitTypography.Paragraph ellipsis={{tooltip: true, rows: 2}} disabled={disabled}>
                                {description}
                            </KitTypography.Paragraph>
                        )}
                    </div>
                )}
                {shouldDisplayExtra && <div className="kit-item-card-extra">{extra}</div>}
                {shouldDisplayActions && isDisplayedAsList && (
                    <ItemCardActions actions={actions} disabled={disabled} display={display} />
                )}
                {shouldDisplaySwitch && (
                    <div className="kit-item-card-switch">
                        <KitSwitch onChange={onActivate} checked={activated} disabled={disabled} />
                        <KitTypography.Text disabled={disabled} ellipsis={{tooltip: true}}>
                            {activateLabel}
                        </KitTypography.Text>
                    </div>
                )}
            </div>
        );
    }
);

KitItemCard.displayName = 'KitItemCard';
