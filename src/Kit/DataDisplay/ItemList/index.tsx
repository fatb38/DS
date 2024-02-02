import React, {FunctionComponent, MouseEvent, ReactElement, cloneElement, useState} from 'react';
import {IKitItemList} from './types';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitTag} from '@kit/DataDisplay/Tag';
import {KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/useKitTheme';
import {useKitLocale} from '@translation/useKitLocale';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import useSecureClick from '@hooks/useSecureClick';
import {IKitImage} from '../Image/types';
import {IKitAvatar} from '../Avatar/types';
import {IKitIcon} from '@kit/General/Icon/types';
import {StyledItemList} from './style';
import cn from 'classnames';

export const KitItemList: FunctionComponent<IKitItemList> = ({
    title,
    description,
    picture,
    onSelect,
    tagNumber,
    onRafterClick,
    onClick,
    className,
    disableSecureClick,
    selected = false,
    disabled = false,
    ...props
}) => {
    const {appId} = useKitTheme();
    const {locale} = useKitLocale();

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [isDescriptionEllipsis, setIsDescriptionEllipsis] = useState(false);

    const hasTitle = title !== undefined;
    const hasDescription = description !== undefined;
    const hasPicture = picture !== undefined;
    const hasTag = tagNumber !== undefined;
    const isClickable = onClick !== undefined;
    const isSelectable = onSelect !== undefined;
    const hasRafter = onRafterClick !== undefined;

    const _generateGridTemplateColumns = () => {
        let gridTemplateColumns = '';

        // Checkbox
        gridTemplateColumns += isSelectable ? ' min-content' : '';

        // Picture
        gridTemplateColumns += hasPicture ? ' min-content' : '';

        // Text (Use minmax to fix ellipsis)
        gridTemplateColumns += ' minmax(0px, auto)';

        // Tag
        gridTemplateColumns += hasTag ? ' min-content' : '';

        // Rafter
        gridTemplateColumns += hasRafter ? ' min-content' : '';

        return gridTemplateColumns;
    };

    const _getCheckbox = () => {
        return (
            isSelectable && (
                <div>
                    <KitCheckbox
                        disabled={disabled}
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                            onSelect && onSelect(e);
                        }}
                    />
                </div>
            )
        );
    };

    const _getPicture = () => {
        const pictureJsx = picture as JSX.Element;

        if (!pictureJsx || !pictureJsx.type) {
            return null;
        }

        let noBorder = false;
        let cloneProps = {};
        let itemProps: IKitImage | IKitAvatar | IKitIcon;
        let wrapperClassName = 'kit-item-list-picture-container';

        switch ((pictureJsx.type as FunctionComponent).displayName) {
            case 'KitImage':
                itemProps = (pictureJsx as ReactElement).props as IKitImage;
                cloneProps = {
                    preview: {
                        ...((itemProps.preview as Record<string, unknown>) ?? {}),
                        mask: <FontAwesomeIcon icon={faEye} />
                    },
                    width: '100%',
                    height: '100%',
                    bordered: true,
                    rounded: true,
                    rootClassName: (itemProps.rootClassName || '') + ' kit-item-list-image-container'
                };
                wrapperClassName += ' kit-item-list-image';
                break;
            case 'KitIcon':
                noBorder = true;
                cloneProps = {
                    on: true
                };
                wrapperClassName += ' kit-item-list-icon';
                break;
            case 'KitAvatar':
                break;
        }

        const Component = cloneElement(pictureJsx, cloneProps);

        return <div className={cn(wrapperClassName, {noBorder: noBorder})}>{Component}</div>;
    };

    const _getContent = () => {
        const contentClassName = cn('kit-item-list-text-container', {
            'kit-item-list-text-container-with-gap': hasTitle && hasDescription
        });

        return (
            <div className={contentClassName}>
                <KitTypography.Text
                    className="kit-item-list-text kit-item-list-title"
                    size="large"
                    weight="bold"
                    ellipsis={{tooltip: true}}
                >
                    {title}
                </KitTypography.Text>

                <div className="kit-item-list-description-container">
                    <KitTypography.Paragraph
                        className="kit-item-list-text kit-item-list-description"
                        size="large"
                        weight="regular"
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
                                className="kit-item-list-description-collexp kit-item-list-description-collapse"
                                onClick={e => {
                                    e.stopPropagation();
                                    setDescriptionVisible(false);
                                }}
                            >
                                {locale.ItemList?.less}
                            </KitTypography.Link>
                        )}
                    </KitTypography.Paragraph>
                    {isDescriptionEllipsis && !descriptionVisible && (
                        <KitTypography.Link
                            className="kit-item-list-description-collexp kit-item-list-description-expand"
                            onClick={e => {
                                e.stopPropagation();
                                setDescriptionVisible(true);
                            }}
                        >
                            {locale.ItemList?.more}
                        </KitTypography.Link>
                    )}
                </div>
            </div>
        );
    };

    const _getTag = () => {
        return (
            hasTag && (
                <div className="kit-item-list-tag">
                    <KitTag color="blue">{tagNumber}</KitTag>
                </div>
            )
        );
    };

    const _handleClickRafter = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onRafterClick && onRafterClick();
    };

    const _handleClickRafterSecured = useSecureClick(_handleClickRafter);

    const _getRafter = () => {
        return (
            hasRafter && (
                <div
                    className="kit-item-list-rafter"
                    onClick={disableSecureClick ? _handleClickRafter : _handleClickRafterSecured}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            )
        );
    };

    const _getClassName = () => {
        return cn(className, appId, {
            'kit-item-list-disabled': disabled,
            'kit-item-list-clickable': isClickable,
            'kit-item-list-selected': selected
        });
    };

    const _handleClickItemList = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick && onClick();
    };

    const _handleClickItemListSecured = useSecureClick(_handleClickItemList);

    return (
        <StyledItemList
            tabIndex={disabled ? -1 : 0}
            className={_getClassName()}
            $gridTemplateColumns={_generateGridTemplateColumns()}
            onClick={disableSecureClick ? _handleClickItemList : _handleClickItemListSecured}
            {...props}
        >
            {_getCheckbox()}
            {_getPicture()}
            {_getContent()}
            {_getTag()}
            {_getRafter()}
        </StyledItemList>
    );
};

KitItemList.displayName = 'KitItemList';
