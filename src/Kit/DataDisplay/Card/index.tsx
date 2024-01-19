import React, {FunctionComponent} from 'react';
import {styled} from 'styled-components';
import {IKitCard, IStyledKitCard} from './types';
import cn from 'classnames';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {KitButton, KitTypography} from '@kit/General';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {KitCheckbox, KitSwitch} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {KitDropDown} from '@kit/Navigation';
import {kitCardCssTokens} from '@theme/aristid/components/DataDisplay/Card';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTag} from '@kit/DataDisplay';
import {convertToPixel} from '@theme/utils/convert';

const StyledCard = styled.div<IStyledKitCard>`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(
        ${kitCardCssTokens.colors.background.default},
        var(${kitColorsPaletteCssTokens.neutral.white})
    );
    border: 1px solid
        var(
            ${kitCardCssTokens.colors.border.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );
    margin: 2px;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    width: 300px;

    &.kit-card-disabled {
        background-color: var(
            ${kitCardCssTokens.colors.background.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
        );
        .kit-card-picture {
            border-color: var(
                ${kitCardCssTokens.colors.separator.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }

        .kit-card-content {
            .kit-card-title {
                color: var(
                    ${kitCardCssTokens.colors.typography.title.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
            .kit-card-description {
                color: var(
                    ${kitCardCssTokens.colors.typography.description.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
            .kit-card-extra {
                color: var(
                    ${kitCardCssTokens.colors.typography.extra.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }
    }

    &.kit-card-selected {
        margin: 0;
        border: 3px solid
            var(${kitCardCssTokens.colors.border.selected}, var(${kitColorsPaletteCssTokens.primary.primary400}));
    }

    .kit-card-content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: ${convertToPixel(spacingCssTokens.xs)};
        padding: ${convertToPixel(spacingCssTokens.s)};

        .kit-card-title {
            font-size: ${convertToPixel(kitCardCssTokens.typography.title.fontSize, typographyCssTokens.fontSize3)};
            font-weight: var(
                ${kitCardCssTokens.typography.title.fontWeight},
                var(${typographyCssTokens.boldFontWeight})
            );
            color: var(
                ${kitCardCssTokens.colors.typography.title.default},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }

        .kit-card-description {
            font-size: ${convertToPixel(
                kitCardCssTokens.typography.description.fontSize,
                typographyCssTokens.fontSize5
            )};
            font-weight: var(
                ${kitCardCssTokens.typography.description.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
            color: var(
                ${kitCardCssTokens.colors.typography.description.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey600})
            );
        }

        .kit-card-extra {
            font-size: ${convertToPixel(kitCardCssTokens.typography.extra.fontSize, typographyCssTokens.fontSize4)};
            font-weight: var(
                ${kitCardCssTokens.typography.extra.fontWeight},
                var(${typographyCssTokens.boldFontWeight})
            );
            color: var(
                ${kitCardCssTokens.colors.typography.extra.default},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }

    .kit-card-picture {
        display: flex;
        justify-content: center;
        height: 200px;
        padding: 10px;
        overflow: hidden;
        position: relative;
        border-bottom: 4px solid
            ${({$brandingBar}) =>
                $brandingBar
                    ? `var(${kitCardCssTokens.colors.separator.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`
                    : 'transparent'};

        img {
            height: 100%;
            transition-duration: 500ms;
            transition-property: transform;
        }

        .kit-card-checkbox {
            position: absolute;
            top: 10px;
            left: 10px;
        }

        .kit-card-switch {
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .kit-card-buttons {
            position: absolute;
            bottom: 10px;
            right: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    &:focus:not(.kit-card-disabled),
    &:focus-visible:not(.kit-card-disabled),
    &:focus-within:not(.kit-card-disabled) {
        margin: 0;
        border: 3px solid
            var(${kitCardCssTokens.colors.border.focus}, var(${kitColorsPaletteCssTokens.primary.primary200}));
        outline: none;
    }

    &:hover:not(.kit-card-disabled) {
        margin: 0;
        border: 3px solid
            var(${kitCardCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}));

        .kit-card-picture {
            border-color: transparent;

            img {
                transform: scale(1.3);
            }
        }
    }
`;

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
    const _getClassName = () => {
        return cn(className, appId, {
            'kit-card-selected': selected,
            'kit-card-disabled': disabled
        });
    };

    const isMoreThenTwoActions = actions && actions.length > 2;
    const isOneOrTwoActions = actions && actions.length <= 2;

    return (
        <StyledCard tabIndex={disabled ? -1 : 0} className={_getClassName()} style={style} $brandingBar={brandingBar}>
            <div className="kit-card-picture">
                {/*Change with Empty component when ready*/}
                <img src={previewSrc ?? 'public/images/no-preview.png'} />
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
                    {isOneOrTwoActions && (
                        <>
                            {actions.map(action => (
                                <KitButton
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
        </StyledCard>
    );
};

KitCard.displayName = 'KitCard';
