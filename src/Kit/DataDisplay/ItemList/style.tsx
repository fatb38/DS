import {styled} from 'styled-components';
import {IStyledKitItemList} from './types';
import {kitItemListCssTokens} from '@theme/aristid/components/DataDisplay/ItemList';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {convertToPixel} from '@theme/utils/convert';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const StyledItemList = styled.div<IStyledKitItemList>`
    display: grid;
    grid-template-columns: ${({$gridTemplateColumns}) => $gridTemplateColumns};
    align-items: center;
    min-height: 75px;
    padding: 0px 8px;
    margin: 2px;
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
    border-radius: ${convertToPixel(kitItemListCssTokens.itemList.border.radius.toString(), borderCssTokens.radius.s)};

    &:hover {
        border: 1px solid
            var(
                ${kitItemListCssTokens.itemList.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
    }

    &:focus:not(.kit-item-list-disabled),
    &:focus-visible:not(.kit-item-list-disabled),
    &:focus-within:not(.kit-item-list-disabled) {
        margin: 0;
        border: 3px solid var(${kitColorsPaletteCssTokens.primary.primary200});
        outline: none;
    }

    &.kit-item-list-clickable {
        cursor: pointer;
    }

    &.kit-item-list-selected {
        margin: 0;
        border: 3px solid var(${kitColorsPaletteCssTokens.primary.primary400});
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
                font-size: ${convertToPixel(
                    kitItemListCssTokens.title.typography.fontSize,
                    typographyCssTokens.fontSize5
                )};
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
                font-size: ${convertToPixel(
                    kitItemListCssTokens.description.typography.fontSize,
                    typographyCssTokens.fontSize5
                )};
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
