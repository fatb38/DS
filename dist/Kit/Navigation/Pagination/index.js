import r from "react";
import { Pagination as d } from "antd";
import p from "styled-components";
import { paginationTheme as o } from "./theme.js";
const g = p(d)`
    &.kit-pagination-bordered:not(.ant-pagination-mini) {
        .ant-pagination-item:not(.ant-pagination-item-active) {
            border-color: ${o.bordered.borderColor};
        }

        &:not(.ant-pagination-disabled) .ant-pagination-item:hover {
            border-color: ${o.bordered.hoverBorderColor};
            background-color: ${o.bordered.backgroundColor};
        }

        .ant-pagination-next,
        .ant-pagination-prev {
            background-color: ${o.bordered.backgroundColor};
            border: 1px solid ${o.bordered.borderColor};
        }
    }

    &.ant-pagination-mini:not(.ant-pagination-disabled) {
        .ant-pagination-item,
        .ant-pagination-item-active,
        .ant-pagination-next,
        .ant-pagination-pre {
            background: ${o.miniActiveBackground};
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
            background-color: ${o.bordered.backgroundColor};
            border: 1px solid transparent;

            a {
                color: inherit;
            }

            &:hover {
                border-color: ${o.bordered.hoverBorderColor};
                color: ${o.hoverColor};

                .ant-pagination-item-link {
                    background-color: ${o.bordered.backgroundColor};
                }

                a {
                    color: ${o.hoverColor};
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
            color: ${o.disabledActiveTextColor};
        }
    }

    & .kit-pagination-prev,
    & .kit-pagination-next {
        font-size: ${0.75 * o.fontSize}px;
    }

    & .ant-pagination-options-quick-jumper {
        height: 24px;
        line-height: 24px;

        input {
            height: 24px;
            border-color: ${o.bordered.borderColor};
        }
    }

    & .ant-pagination-options-size-changer {
        height: 24px;

        .ant-select-selector {
            height: 24px;
            background: ${o.bordered.backgroundColor};
            border-color: ${o.bordered.borderColor};

            input,
            .ant-select-selection-item {
                height: 22px;
                line-height: 22px;
            }
        }

        .ant-select-dropdown {
            background: ${o.bordered.backgroundColor};
        }
    }
`, h = (n) => {
  var t = { ...n, itemRender: (i, e, a) => n.itemRender ? n.itemRender(i, e, a) : a, className: `${n.bordered ? "kit-pagination-bordered" : ""} ` + (n.className || "") };
  return r.createElement(g, { ...t });
};
export {
  h as KitPagination
};
//# sourceMappingURL=index.js.map
