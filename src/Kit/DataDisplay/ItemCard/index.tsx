import React, {FunctionComponent, ReactElement, ReactNode, cloneElement, useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import IKitItemCard, {IStyledKitItemCard} from './types';
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
import {kitItemCardCssTokens} from '@theme/aristid/components/DataDisplay/ItemCard';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {borderCssTokens} from '@theme/aristid/general/border';
import {IKitButton} from '@kit/General/Button/types';
import {convertToPixel} from '@theme/utils/convert';

const ItemCardWrapper = styled.div<IStyledKitItemCard>`
    display: grid;
    padding: 16px;
    font-family: var(${kitItemCardCssTokens.card.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
    background: var(
        ${kitItemCardCssTokens.card.colors.background.default},
        var(${kitColorsPaletteCssTokens.neutral.white})
    );
    border-radius: ${convertToPixel(kitItemCardCssTokens.card.border.radius, borderCssTokens.radius.s)};
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
    min-width: 248px;
    width: 248px;
    border: 1px solid
        var(
            ${kitItemCardCssTokens.card.colors.border.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );

    &:not(.kit-card-disabled):hover {
        border: 1px solid
            var(${kitItemCardCssTokens.card.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}));
    }

    .kit-card-select-button-wrapper {
        line-height: 1.2;
        font-size: 0.6rem;
    }

    &:not(.kit-card-disabled) {
        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: 0.6rem;
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: var(
                ${kitItemCardCssTokens.select.colors.typography.default},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }

    &.kit-card-disabled {
        background: var(
            ${kitItemCardCssTokens.card.colors.background.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
        );
        pointer-events: none;

        .kit-card-data {
            .kit-card-title {
                color: var(
                    ${kitItemCardCssTokens.title.colors.typography.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
            .kit-card-desc {
                color: var(
                    ${kitItemCardCssTokens.description.colors.typography.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
            .kit-card-footer {
                color: var(
                    ${kitItemCardCssTokens.footer.colors.typography.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }

        .kit-card-select-button {
            border-radius: 3.5px;
            font-size: 0.6rem;
            background: var(
                ${kitItemCardCssTokens.select.colors.background.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );
            padding: 0;
            width: 16px;
            height: 16px;
            min-width: 16px;
            color: var(
                ${kitItemCardCssTokens.select.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }

        .kit-card-tags .ant-tag,
        .kit-card-icon {
            opacity: 0.4;
        }
    }

    &.kit-card-vertical {
        grid-template:
            'picto picto'
            'select colors'
            'content content';
        grid-template-columns: max-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-bottom: 8px;
        }

        .kit-card-colorbar {
            align-self: center;
        }

        .kit-card-image,
        .kit-card-icon,
        .kit-card-icon .kit-icon {
            width: 100%;
            height: 80px;
        }

        .kit-card-select {
            grid-auto-columns: min-content;
            column-gap: 8px;
            margin-right: 8px;
            display: flex;
            flex-direction: row;
        }
    }

    &.kit-card-horizontal {
        grid-template: 'select picto colors content';
        grid-template-columns: min-content min-content min-content 1fr;

        .kit-card-select,
        .kit-card-image,
        .kit-card-icon,
        .kit-card-colorbar {
            margin-right: 8px;
        }

        .kit-card-select {
            grid-auto-rows: min-content;
            row-gap: 8px;
        }

        .kit-card-image,
        .kit-card-icon .kit-icon {
            width: 64px;
        }

        .kit-card-icon .kit-icon {
            height: 64px;
        }

        .kit-card-colorbar {
            height: 60px;
            flex-basis: 1fr;
        }
    }

    .kit-card-select,
    .kit-card-image,
    .kit-card-picto,
    .kit-card-colorbar {
        flex: 0 0 auto;
    }

    .kit-card-select {
        grid-area: select;
        display: grid;
    }

    .kit-card-image {
        grid-area: picto;
        height: 64px;
        border-radius: ${convertToPixel(kitItemCardCssTokens.image.border.radius, borderCssTokens.radius.s)};
        opacity: ${({$disabled}) => ($disabled ? 0.5 : 1)};
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid
            var(${kitItemCardCssTokens.image.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}));

        .kit-card-image-image {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .kit-card-icon {
        grid-area: picto;
        height: 64px;
        width: 64px;
        border-radius: ${convertToPixel(kitItemCardCssTokens.icon.border.radius, borderCssTokens.radius.s)};
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid
            var(${kitItemCardCssTokens.icon.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}));

        &.noBorder {
            border-color: transparent;
        }

        svg {
            font-size: 2rem;
            text-align: center;
            width: 100%;
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .kit-icon {
            padding: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
        }

        .avatar-full {
            width: 100%;
            height: 100%;
            border-radius: 0;
            display: flex;
            align-items: center;
        }
    }

    .kit-card-colorbar {
        grid-area: colors;
    }

    .kit-card-data {
        grid-area: content;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        > :not(:last-child) {
            margin-bottom: 5px;
        }

        .kit-card-description-container {
            position: relative;
        }

        .kit-card-title {
            font-size: ${convertToPixel(
                kitItemCardCssTokens.title.typography.fontSize.toString(),
                typographyCssTokens.fontSize6
            )};
            font-weight: var(
                ${kitItemCardCssTokens.title.typography.fontWeight},
                var(${typographyCssTokens.boldFontWeight})
            );
            color: var(
                ${kitItemCardCssTokens.title.colors.typography.default},
                var(${kitColorsPaletteCssTokens.primary.primary600})
            );
        }
        .kit-card-desc {
            font-size: ${convertToPixel(
                kitItemCardCssTokens.description.typography.fontSize,
                typographyCssTokens.fontSize5
            )};
            font-weight: var(
                ${kitItemCardCssTokens.description.typography.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
            color: var(
                ${kitItemCardCssTokens.description.colors.typography.default},
                var(${kitColorsPaletteCssTokens.primary.primary600})
            );

            .ant-typography-expand {
                visibility: hidden;
            }
        }
        .kit-card-footer {
            font-size: ${convertToPixel(
                kitItemCardCssTokens.footer.typography.fontSize,
                typographyCssTokens.fontSize5
            )};
            font-weight: var(
                ${kitItemCardCssTokens.footer.typography.fontWeight},
                var(${typographyCssTokens.boldFontWeight})
            );
            color: var(
                ${kitItemCardCssTokens.footer.colors.typography.default},
                var(${kitColorsPaletteCssTokens.primary.primary600})
            );
        }

        .kit-card-description-collexp {
            color: ${({$disabled}) =>
                $disabled
                    ? `var(
                ${kitItemCardCssTokens.expend.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.primary.primary600})
            )`
                    : `var(
                ${kitItemCardCssTokens.expend.colors.typography.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            )`};

            &:hover {
                color: var(
                    ${kitItemCardCssTokens.expend.colors.typography.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }

            &.kit-card-description-collapse {
                float: right;
            }

            &.kit-card-description-expand {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
`;

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
            className: `${ReactNode.className ?? ''} kit-card-select-button`,
            wrapperClassName: `${ReactNode.wrapperClassName ?? ''} kit-card-select-button-wrapper`
        });
    });
};

const _getSWrapperClassName = (vertical: boolean | undefined, disabled: boolean, className: string) =>
    cn(className, 'kit-card-wrapper', {
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
        <ItemCardWrapper
            $disabled={disabled}
            className={`${appId} ${_getSWrapperClassName(vertical, disabled, className ?? '')}`}
            {...props}
        >
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
                            wrapperClassName="kit-card-select-button-wrapper"
                            className="kit-card-select-button"
                            onClick={e => onEdit && onEdit(e)}
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
        </ItemCardWrapper>
    );
};

KitItemCard.displayName = 'KitItemCard';
