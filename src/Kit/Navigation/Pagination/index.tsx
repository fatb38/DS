import React from 'react';
import { Pagination } from 'antd';
import styled from 'styled-components';
import { KitPaginationProps } from './types';
import { paginationTheme } from './theme';

const StyledAntdPagination = styled(Pagination)`
    &.kit-pagination-bordered:not(.ant-pagination-mini) {
        .ant-pagination-item:not(.ant-pagination-item-active) {
            border-color: ${paginationTheme.bordered.borderColor};
        }

        &:not(.ant-pagination-disabled) .ant-pagination-item:hover {
            border-color: ${paginationTheme.bordered.hoverBorderColor};
            background-color: ${paginationTheme.bordered.backgroundColor};
        }

        .ant-pagination-next, .ant-pagination-prev {
            background-color: ${paginationTheme.bordered.backgroundColor};
            border: 1px solid ${paginationTheme.bordered.borderColor};
        }
    }

    &.ant-pagination-mini:not(.ant-pagination-disabled) {
        .ant-pagination-item, .ant-pagination-item-active, .ant-pagination-next, .ant-pagination-pre {
            background: ${paginationTheme.miniActiveBackground};
        }
    }

    .ant-pagination-next, .ant-pagination-prev {
        .ant-pagination-item-link {
            font-size: 11px;
        }

        a {
            padding: 0 8px;
        }
    }

    &:not(.ant-pagination-disabled) {
        .ant-pagination-next, .ant-pagination-prev {
            background-color: ${paginationTheme.bordered.backgroundColor};
            border: 1px solid transparent;
    
            a {
                color: inherit;
            }

            &:hover {
                border-color: ${paginationTheme.bordered.hoverBorderColor};
                color: ${paginationTheme.hoverColor};
                
                .ant-pagination-item-link {
                    background-color: ${paginationTheme.bordered.backgroundColor};
                }
                
                a {
                    color: ${paginationTheme.hoverColor};
                }
            }

        }
    }

    &.ant-pagination-simple {
        .ant-pagination-next, .ant-pagination-prev {
            .ant-pagination-item-link {
                height: 22px;
            }
        }
    }

    &.ant-pagination-disabled {
        .ant-pagination-item-active a {
            color: ${paginationTheme.disabledActiveTextColor};
        }
    }

    & .kit-pagination-prev, & .kit-pagination-next {
        font-size: ${paginationTheme.fontSize *.75}px;
    }


    & .ant-pagination-options-quick-jumper {
        height: 24px;
        line-height: 24px;

        input {
            height: 24px;
            border-color: ${paginationTheme.bordered.borderColor};
        }
    } 

    & .ant-pagination-options-size-changer {
        height: 24px;

        .ant-select-selector {
            height: 24px;
            background: ${paginationTheme.bordered.backgroundColor};
            border-color: ${paginationTheme.bordered.borderColor};

            input, .ant-select-selection-item {
                height: 22px;
                line-height: 22px;
            }
        }

        .ant-select-dropdown {
            background: ${paginationTheme.bordered.backgroundColor};
        }
    }
`;


export const KitPagination: React.FunctionComponent<KitPaginationProps> = (
    paginationProps
) => {
    const itemRender: KitPaginationProps['itemRender'] = (_, type, originalElement) => {
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
        itemRender,
        className: `${paginationProps.bordered ? "kit-pagination-bordered" : ""} ${paginationProps.className || ""}`
    }
    return <StyledAntdPagination {...mergedProps} />;
};