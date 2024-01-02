import React, {FunctionComponent, MouseEvent, ReactElement, cloneElement, useState} from 'react';
import {styled} from 'styled-components';
import {IKitItemList, IStyledKitItemList} from './types';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitTag} from '@kit/DataDisplay/';
import {KitTypography} from '@kit/General/';
import {useKitTheme} from '@theme/useKitTheme';
import {useKitLocale} from '@translation/useKitLocale';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import useSecureClick from '@hooks/useSecureClick';
import {kitItemListCssTokens} from '@theme/aristid/components/DataDisplay/ItemList';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitImage} from '../Image/types';
import {IKitAvatar} from '../Avatar/types';
import {IKitIcon} from '@kit/General/Icon/types';

const StyledItemList = styled.div<IStyledKitItemList>`
    display: grid;
    grid-template-columns: ${({$gridTemplateColumns}) => $gridTemplateColumns};
    align-items: center;
    min-height: 75px;
    padding: 0px 8px;
    background-color: var(
        ${kitItemListCssTokens.itemList.colors.background.default},
        var(${kitColorsPaletteCssTokens.neutral.white})
    );
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid
        var(
            ${kitItemListCssTokens.itemList.colors.border.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );
    border-radius: calc(var(${kitItemListCssTokens.itemList.border.radius}, var(${borderCssTokens.radius.s})) * 1px);

    &:hover {
        border: 1px solid
            var(
                ${kitItemListCssTokens.itemList.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
    }

    &:focus {
        border-style: dashed;
    }

    &.kit-item-list-clickable {
        cursor: pointer;
    }

    .kit-item-list-picture-container {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        &:not(:first-child) {
            margin: 0px 0px 0px 10px;
        }

        &.noBorder {
            border-color: transparent;
        }

        &.kit-item-list-icon {
            .kit-icon {
                font-size: 1.5rem;
                width: 34px;
                height: 34px;
            }
        }

        .kit-item-list-image-container {
            display: flex;
            align-items: center;
            justify-content: center;

            img,
            svg {
                width: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .kit-item-list-text-container {
        display: flex;
        padding: 10px 20px;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;

        &.kit-item-list-text-container-with-gap {
            gap: 5px;
        }

        .kit-item-list-text {
            margin-bottom: 0px;

            &.kit-item-list-title {
                font-weight: var(
                    ${kitItemListCssTokens.title.typography.fontWeight},
                    var(${typographyCssTokens.boldFontWeight})
                );
                font-size: calc(
                    var(${kitItemListCssTokens.title.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px
                );
                color: var(
                    ${kitItemListCssTokens.title.colors.default},
                    var(${kitColorsPaletteCssTokens.primary.primary600})
                );
            }

            &.kit-item-list-description {
                font-weight: var(
                    ${kitItemListCssTokens.description.typography.fontWeight},
                    var(${typographyCssTokens.regularFontWeight})
                );
                font-size: calc(
                    var(${kitItemListCssTokens.description.typography.fontSize}, var(${typographyCssTokens.fontSize5})) *
                        1px
                );
                color: var(
                    ${kitItemListCssTokens.description.colors.default},
                    var(${kitColorsPaletteCssTokens.primary.primary600})
                );

                .ant-typography-expand {
                    visibility: hidden;
                }
            }
        }

        .kit-item-list-description-container {
            position: relative;
        }

        .kit-item-list-description-collexp {
            color: var(
                ${kitItemListCssTokens.collexp.colors.default},
                var(${kitColorsPaletteCssTokens.primary.primary600})
            );

            &:hover {
                color: var(
                    ${kitItemListCssTokens.collexp.colors.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }

            &.kit-item-list-description-collapse {
                float: right;
            }

            &.kit-item-list-description-expand {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }

    .kit-item-list-tag {
        &:last-child .ant-tag {
            margin-inline-end: 0px;
        }

        &:not(:last-child) .ant-tag {
            margin-inline-end: 10px;
        }
    }

    .kit-item-list-rafter {
        color: var(
            ${kitItemListCssTokens.rafter.colors.default},
            var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
        );
        font-size: 14px;

        &:hover {
            color: var(
                ${kitItemListCssTokens.rafter.colors.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            cursor: pointer;
        }
    }

    &.kit-item-list-disabled {
        background-color: var(
            ${kitItemListCssTokens.itemList.colors.background.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
        );
        border: 1px solid
            var(
                ${kitItemListCssTokens.itemList.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        pointer-events: none;

        .kit-item-list-image-container img {
            opacity: 0.5;
        }

        .kit-item-list-text-container {
            .kit-item-list-text {
                &.kit-item-list-title {
                    color: var(
                        ${kitItemListCssTokens.title.colors.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }

                &.kit-item-list-description {
                    color: var(
                        ${kitItemListCssTokens.description.colors.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }
            }

            .kit-item-list-description-collexp {
                color: var(
                    ${kitItemListCssTokens.collexp.colors.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }

        .kit-item-list-tag,
        .kit-item-list-icon {
            opacity: 0.4;
        }
    }
`;

export const KitItemList: FunctionComponent<IKitItemList> = ({
    title,
    description,
    picture,
    onSelectChange,
    tagNumber,
    onRafterClick,
    disabled = false,
    onClick,
    className,
    disableSecureClick,
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
    const isSelectable = onSelectChange !== undefined;
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
                            onSelectChange && onSelectChange(e);
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

        return <div className={`${wrapperClassName} ${noBorder ? 'noBorder' : ''}`}>{Component}</div>;
    };

    const _getContent = () => {
        let classes = 'kit-item-list-text-container';
        classes += hasTitle && hasDescription ? ' kit-item-list-text-container-with-gap' : '';

        return (
            <div className={classes}>
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

    const _getClasses = () => {
        let classes = className;

        classes += disabled ? ' kit-item-list-disabled' : '';
        classes += isClickable ? ' kit-item-list-clickable' : '';

        return classes;
    };

    const _handleClickItemList = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick && onClick();
    };

    const _handleClickItemListSecured = useSecureClick(_handleClickItemList);

    return (
        <StyledItemList
            className={`${appId} ${_getClasses()}`}
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
