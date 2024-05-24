import React, {FunctionComponent} from 'react';
import {IKitCard} from './types';
import cn from 'classnames';
import {KitButton, KitTypography} from '@kit/General';
import {KitCheckbox, KitSwitch} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {KitDropDown} from '@kit/Navigation';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTag} from '@kit/DataDisplay/Tag';

import styles from './styles.module.scss';

export const KitCard: FunctionComponent<IKitCard> = ({
    actions,
    description,
    className,
    style,
    title,
    extra,
    previewSrc,
    tags,
    onActivate,
    onSelect,
    brandingBar = false,
    selected = false,
    activated = false,
    disabled = false
}) => {
    const {appId} = useKitTheme();
    const clx = cn(styles['kit-card'], className, appId, {
        'kit-card-selected': selected,
        'kit-card-disabled': disabled
    });

    const isMoreThenTwoActions = actions && actions.length > 2;
    const isLessThanThreeActions = actions && actions.length <= 2;

    return (
        <div tabIndex={disabled ? -1 : 0} className={clx} style={style}>
            <div className={`kit-card-picture ${brandingBar ? 'brandingBar' : ''}`}>
                {/*Change with Empty component when ready*/}
                <img src={previewSrc ?? 'public/images/no-preview.png'} alt="" />
                {onSelect && (
                    <KitCheckbox
                        className="kit-card-checkbox"
                        onChange={onSelect}
                        checked={selected}
                        disabled={disabled}
                    />
                )}
                {onActivate && (
                    <KitSwitch
                        className="kit-card-switch"
                        onChange={onActivate}
                        checked={activated}
                        disabled={disabled}
                    />
                )}
                <div className="kit-card-buttons">
                    {isLessThanThreeActions && (
                        <>
                            {actions.map(action => (
                                <KitButton
                                    key={action.key}
                                    type="segmented"
                                    icon={action.icon}
                                    onClick={action.onClick}
                                    disabled={disabled}
                                />
                            ))}
                        </>
                    )}
                    {isMoreThenTwoActions && (
                        <>
                            <KitButton
                                type="segmented"
                                icon={actions[0].icon}
                                onClick={actions[0].onClick}
                                disabled={disabled}
                            />
                            <KitDropDown menu={{items: actions.slice(1)}} disabled={disabled}>
                                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faEllipsis} />} />
                            </KitDropDown>
                        </>
                    )}
                </div>
            </div>

            <div className="kit-card-content">
                {tags && <KitTag.Group tags={tags} />}
                {title && <KitTypography.Text className="kit-card-title">{title}</KitTypography.Text>}
                {description && <KitTypography.Text className="kit-card-description">{description}</KitTypography.Text>}
                {extra && (
                    <KitTypography.Text className="kit-card-extra" ellipsis={{tooltip: true}}>
                        {extra}
                    </KitTypography.Text>
                )}
            </div>
        </div>
    );
};

KitCard.displayName = 'KitCard';
