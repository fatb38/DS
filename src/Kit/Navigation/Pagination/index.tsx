import React from 'react';
import {Pagination} from 'antd';
import styled from 'styled-components';
import {IKitPagination} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {kitPaginationCssTokens} from '@theme/aristid/components/Navigation/Pagination';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdPagination = styled(Pagination)`
    &.kit-pagination-bordered:not(.ant-pagination-mini) {
        .ant-pagination-item:not(.ant-pagination-item-active) {
            border-color: var(
                ${kitPaginationCssTokens.pagination.border.default},
                var(${kitColorsPaletteCssTokens.neutral.black60})
            );
        }

        &:not(.ant-pagination-disabled) .ant-pagination-item:hover {
            border-color: var(
                ${kitPaginationCssTokens.pagination.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
            background-color: var(
                ${kitPaginationCssTokens.pagination.colors.background.hover},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );
        }

        .ant-pagination-next,
        .ant-pagination-prev {
            background-color: var(${kitPaginationCssTokens.prevNext.colors.background.default}, 'transparent');
            border: 1px solid var(${kitPaginationCssTokens.prevNext.colors.border.default}, 'transparent');
        }
    }

    &.ant-pagination-mini:not(.ant-pagination-disabled) {
        .ant-pagination-item,
        .ant-pagination-item-active {
            background: var(${kitPaginationCssTokens.pagination.colors.background.default}, 'transparent');
        }

        .ant-pagination-next,
        .ant-pagination-prev {
            background: var(${kitPaginationCssTokens.prevNext.colors.background.default}, 'transparent');
        }
    }

    .ant-pagination-next,
    .ant-pagination-prev {
        .ant-pagination-item-link {
            font-size: 11px;
        }

        a {
            padding: 0 8px;
        }
    }

    &:not(.ant-pagination-disabled) {
        .ant-pagination-next,
        .ant-pagination-prev {
            background-color: var(${kitPaginationCssTokens.prevNext.colors.background.default}, 'transparent');
            border: 1px solid var(${kitPaginationCssTokens.prevNext.colors.border.default}, 'transparent');

            a {
                color: inherit;
            }

            &:hover {
                border-color: var(
                    ${kitPaginationCssTokens.prevNext.colors.border.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
                color: var(
                    ${kitPaginationCssTokens.prevNext.colors.typography.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );

                .ant-pagination-item-link {
                    background-color: var(${kitPaginationCssTokens.prevNext.colors.background.default}, 'transparent');
                }

                button {
                    color: var(
                        ${kitPaginationCssTokens.prevNext.colors.typography.hover},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
                }
            }
        }
    }

    &.ant-pagination-simple {
        .ant-pagination-next,
        .ant-pagination-prev {
            .ant-pagination-item-link {
                height: 22px;
            }
        }
    }

    &.ant-pagination-disabled {
        .ant-pagination-item-active a {
            color: var(
                ${kitPaginationCssTokens.pagination.colors.typography.disabledActive},
                var(${kitColorsPaletteCssTokens.neutral.typography.white})
            );
        }
    }

    & .kit-pagination-prev,
    & .kit-pagination-next {
        font-size: ${convertToPixel(
            kitPaginationCssTokens.prevNext.typography.fontSize,
            typographyCssTokens.fontSize5
        )};
    }

    & .ant-pagination-options-quick-jumper {
        height: 24px;
        line-height: 24px;

        input {
            height: 24px;
            border-color: var(
                ${kitPaginationCssTokens.quickJumper.colors.border.default},
                var(${kitColorsPaletteCssTokens.neutral.black60})
            );
        }
    }

    & .ant-pagination-options-size-changer {
        height: 24px;

        .ant-select-selector {
            height: 24px;
            background: var(
                ${kitPaginationCssTokens.selector.colors.background.default},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );
            border-color: var(
                ${kitPaginationCssTokens.selector.colors.border.default},
                var(${kitColorsPaletteCssTokens.neutral.black60})
            );

            input,
            .ant-select-selection-item {
                height: 22px;
                line-height: 22px;
            }
        }
    }
`;

export const KitPagination: React.FunctionComponent<IKitPagination> = ({className, bordered, ...props}) => {
    const {appId} = useKitTheme();

    const _itemRender: IKitPagination['itemRender'] = (_, type, originalElement) => {
        return props.itemRender ? props.itemRender(_, type, originalElement) : originalElement;
    };

    return (
        <StyledAntdPagination
            {...props}
            itemRender={_itemRender}
            className={`${appId} ${className ?? ''} ${bordered ? 'kit-pagination-bordered' : ''}`}
        />
    );
};
