import React, {FunctionComponent, ReactElement, ReactNode, cloneElement, useState} from 'react';
import cn from 'classnames';
import IKitItemCard from './types';
import KitColorbar from './ColorBar';
import {KitTypography, KitButton} from '@kit/General/';
import {IKitImage} from '@kit/DataDisplay/Image/types';
import {IKitIcon} from '@kit/General/Icon/types';
import {IKitAvatar} from '../Avatar/types';
import {KitCheckbox} from '@kit/DataEntry';
import {KitTag} from '@kit/DataDisplay/Tag';
import type {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {useKitTheme} from '@theme/useKitTheme';
import {useKitLocale} from '@translation/useKitLocale';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {IKitButton} from '@kit/General/Button/types';

import styles from './styles.module.scss';

// TODO Add More /less button to description
const _getPicture = (picture, fullWidthAvatar) => {
    if (!picture) {
        return null;
    }

    const pictureJsx = picture as JSX.Element;

    let noBorder = false;
    let cloneProps = {};
    let itemProps: IKitImage | IKitAvatar | IKitIcon;
    let wrapperClassName = 'kit-card-icon';

    switch ((pictureJsx.type as FunctionComponent).displayName) {
        case 'KitImage':
            itemProps = (picture as ReactElement).props as IKitImage;
            cloneProps = {
                preview: {
                    ...((itemProps.preview as Record<string, unknown>) ?? {}),
                    mask: <FontAwesomeIcon icon={faEye} />
                },
                width: '100%',
                height: '100%',
                rootClassName: (itemProps.rootClassName ?? '') + ' kit-card-image-image'
            };
            wrapperClassName = 'kit-card-image';
            break;
        case 'KitIcon':
            noBorder = true;
            cloneProps = {
                on: true
            };
            break;
        case 'KitAvatar':
            if (fullWidthAvatar) {
                itemProps = (picture as ReactElement).props as IKitAvatar;
                cloneProps = {
                    className: (itemProps.className || '') + ' avatar-full'
                };
            }
            break;
        default:
            return null;
    }
    const Component = cloneElement(pictureJsx, cloneProps as IKitImage & IKitIcon & IKitAvatar);
    return <div className={`${wrapperClassName} ${noBorder ? 'noBorder' : ''}`}>{Component}</div>;
};

const _getActions = (actions: ReactNode[] | undefined, disabled: boolean): ReactNode[] | null => {
    if (!actions) {
        return null;
    }

    return actions.map((button, index) => {
        const ReactNode: IKitButton = (button as ReactElement).props as IKitButton;
        return cloneElement(button as ReactElement, {
            key: index,
            type: 'default',
            disabled: disabled,
            className: `${ReactNode.className ?? ''} kit-card-select-button`
        });
    });
};

const _getWrapperClassName = (appId: string, vertical: boolean | undefined, disabled: boolean, className: string) =>
    cn(appId, styles['kit-item-card'], 'kit-card-wrapper', className, {
        'kit-card-vertical': vertical,
        'kit-card-horizontal': !vertical,
        'kit-card-disabled': disabled
    });

export const KitItemCard: FunctionComponent<IKitItemCard> = ({
    vertical,
    colors,
    fullWidthAvatar,
    picture,
    title,
    description,
    extrainfo,
    tags,
    actions,
    className,
    onSelectChange,
    onEdit,
    disabled = false,
    ...props
}) => {
    const {appId} = useKitTheme();
    const {locale} = useKitLocale();
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [isDescriptionEllipsis, setIsDescriptionEllipsis] = useState(false);

    return (
        <div className={_getWrapperClassName(appId, vertical, disabled, className ?? '')} {...props}>
            {(onSelectChange || onEdit || actions) && (
                <div className="kit-card-select">
                    {onSelectChange && (
                        <KitCheckbox
                            onChange={(e: CheckboxChangeEvent) => onSelectChange && onSelectChange(e)}
                            disabled={disabled}
                        />
                    )}
                    {onEdit && (
                        <KitButton
                            className="kit-card-select-button"
                            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => onEdit && onEdit(e)}
                            disabled={disabled}
                        >
                            <FontAwesomeIcon icon={faPencil} />
                        </KitButton>
                    )}
                    {_getActions(actions, disabled)}
                </div>
            )}
            {_getPicture(picture, fullWidthAvatar)}
            {colors && <KitColorbar colors={colors} vertical={!vertical} className={`kit-card-colorbar`} />}
            <div className="kit-card-data">
                <KitTypography.Text className="kit-card-title" ellipsis={{tooltip: true}}>
                    {title}
                </KitTypography.Text>
                <div className="kit-card-description-container">
                    <KitTypography.Paragraph
                        className="kit-card-desc"
                        ellipsis={
                            descriptionVisible
                                ? false
                                : {
                                      rows: 2,
                                      expandable: true,
                                      onEllipsis: () => setIsDescriptionEllipsis(true)
                                  }
                        }
                    >
                        {description}
                        {descriptionVisible && (
                            <KitTypography.Link
                                className="kit-card-description-collexp kit-card-description-collapse"
                                onClick={e => {
                                    e.stopPropagation();
                                    setDescriptionVisible(false);
                                }}
                            >
                                {locale.ItemCard?.less}
                            </KitTypography.Link>
                        )}
                    </KitTypography.Paragraph>
                    {isDescriptionEllipsis && !descriptionVisible && (
                        <KitTypography.Link
                            className="kit-card-description-collexp kit-card-description-expand"
                            onClick={e => {
                                e.stopPropagation();
                                setDescriptionVisible(true);
                            }}
                        >
                            {locale.ItemCard?.more}
                        </KitTypography.Link>
                    )}
                </div>
                <KitTypography.Text className="kit-card-footer">{extrainfo}</KitTypography.Text>
                {tags && (
                    <div className="kit-card-tags">
                        {tags.map(tag => (
                            <KitTag key={tag as string} color="blue">
                                {tag}
                            </KitTag>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

KitItemCard.displayName = 'KitItemCard';
