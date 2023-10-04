import React from 'react';
import {Pagination} from 'antd';
import styled from 'styled-components';
import {IKitPagination, IStyledAntdPagination} from './types';
import {useKitTheme} from '@theme/theme-context';

const StyledAntdPagination = styled(Pagination)<IStyledAntdPagination>`
    &.kit-pagination-bordered:not(.ant-pagination-mini) {
        .ant-pagination-item:not(.ant-pagination-item-active) {
            border-color: ${({$theme}) => $theme.pagination.border.default};
        }

        &:not(.ant-pagination-disabled) .ant-pagination-item:hover {
            border-color: ${({$theme}) => $theme.pagination.border.hover};
            background-color: ${({$theme}) => $theme.pagination.colors.background.hover};
        }

        .ant-pagination-next,
        .ant-pagination-prev {
            background-color: ${({$theme}) => $theme.prevNext.colors.background.default};
            border: 1px solid ${({$theme}) => $theme.prevNext.colors.border.default};
        }
    }

    &.ant-pagination-mini:not(.ant-pagination-disabled) {
        .ant-pagination-item,
        .ant-pagination-item-active {
            background: ${({$theme}) => $theme.pagination.colors.background.default};
        }

        .ant-pagination-next,
        .ant-pagination-pre {
            background: ${({$theme}) => $theme.prevNext.colors.background.default};
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
            background-color: ${({$theme}) => $theme.prevNext.colors.background.default};
            border: 1px solid ${({$theme}) => $theme.prevNext.colors.border.default};

            a {
                color: inherit;
            }

            &:hover {
                border-color: ${({$theme}) => $theme.prevNext.colors.border.hover};
                color: ${({$theme}) => $theme.prevNext.colors.typography.hover};

                .ant-pagination-item-link {
                    background-color: ${({$theme}) => $theme.prevNext.colors.background.default};
                }

                button {
                    color: ${({$theme}) => $theme.prevNext.colors.typography.hover};
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
            color: ${({$theme}) => $theme.pagination.colors.typography.disabledActive};
        }
    }

    & .kit-pagination-prev,
    & .kit-pagination-next {
        font-size: ${({$theme}) => $theme.prevNext.typography.fontSize * 0.75}px;
    }

    & .ant-pagination-options-quick-jumper {
        height: 24px;
        line-height: 24px;

        input {
            height: 24px;
            border-color: ${({$theme}) => $theme.quickJumper.colors.border.default};
        }
    }

    & .ant-pagination-options-size-changer {
        height: 24px;

        .ant-select-selector {
            height: 24px;
            background: ${({$theme}) => $theme.selector.colors.background.default};
            border-color: ${({$theme}) => $theme.selector.colors.border.default};

            input,
            .ant-select-selection-item {
                height: 22px;
                line-height: 22px;
            }
        }
    }
`;

export const KitPagination: React.FunctionComponent<IKitPagination> = paginationProps => {
    const {theme} = useKitTheme();

    const _itemRender: IKitPagination['itemRender'] = (_, type, originalElement) => {
        // if (type === 'prev') {
        //     return <KitIcon icon={<KitDropdownOutlined />} className="kit-pagination-prev"/>;
        // }
        // if (type === 'next') {
        // return <KitIcon icon={<KitDropdownOutlined />}  className="kit-pagination-next"/>;
        // }
        return paginationProps.itemRender ? paginationProps.itemRender(_, type, originalElement) : originalElement;
    };

    const mergedProps = {
        ...paginationProps,
        itemRender: _itemRender,
        className: `${paginationProps.bordered ? 'kit-pagination-bordered' : ''} ${paginationProps.className || ''}`
    };
    return <StyledAntdPagination $theme={theme.components.Pagination} {...mergedProps} />;
};
