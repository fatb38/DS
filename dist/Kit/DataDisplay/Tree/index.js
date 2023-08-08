import o from "react";
import { Tree as t } from "antd";
import n from "styled-components";
import e from "../../../theme/index.js";
const a = n(t)`
    .ant-tree-treenode {
        padding: 0;
        font-weight: ${e.typography.regularFontWeight};

        &:hover {
            background-color: ${e.color.primary.blue100};
            color: ${e.color.primary.blue400};
        }

        &.ant-tree-treenode-selected {
            background-color: ${e.color.primary.blue100};
        }

        &.ant-tree-treenode-disabled {
            color: ${e.color.neutral.typography.black60};

            &:hover {
                background-color: inherit;
            }

            .ant-tree-node-content-wrapper {
                color: ${e.color.neutral.typography.black60};
            }
        }

        .ant-tree-indent {
            background-color: ${e.color.neutral.typography.white};
        }

        .ant-tree-switcher {
            min-height: 32px;
            line-height: 32px;
        }

        .ant-tree-checkbox {
            margin-inline-end: 0px;

            .ant-tree-checkbox-inner {
                background-color: ${e.color.neutral.typography.white};
                border: 1px solid ${e.color.neutral.typography.black60};
            }

            .ant-tree-checkbox-inner:after {
                border-color: ${e.color.neutral.typography.black60};
            }

            &:hover .ant-tree-checkbox-inner {
                border: 1px solid ${e.color.primary.blue400};
            }

            &.ant-tree-checkbox-checked {
                color: ${e.color.neutral.typography.white};

                .ant-tree-checkbox-inner {
                    background-color: ${e.color.primary.blue400};
                    border: 1px solid ${e.color.primary.blue400};
                }

                .ant-tree-checkbox-inner:after {
                    border-color: ${e.color.neutral.typography.white};
                }

                &:hover .ant-tree-checkbox-inner {
                    background-color: ${e.color.primary.blue500};
                    border-color: ${e.color.primary.blue500};
                }
            }

            &.ant-tree-checkbox-indeterminate {
                &:not(.ant-tree-checkbox-disabled) {
                    .ant-tree-checkbox-inner {
                        background-color: ${e.color.primary.blue400};
                        border-color: ${e.color.primary.blue400};
                    }

                    &:hover .ant-tree-checkbox-inner {
                        background-color: ${e.color.primary.blue500};
                        border-color: ${e.color.primary.blue500};
                    }

                    .ant-tree-checkbox-inner:after {
                        width: 8px;
                        height: 0px;
                        border: 1px solid white;
                        transform: translate('-4px', '-1px');
                    }
                }
            }

            &.ant-tree-checkbox-disabled {
                color: ${e.color.neutral.typography.black60};

                .ant-tree-checkbox-inner {
                    background-color: ${e.color.neutral.typography.white};
                    border: 1px solid ${e.color.neutral.typography.black60};
                }

                .ant-tree-checkbox-inner:after {
                    border-color: ${e.color.neutral.typography.black60};
                }
            }
        }

        .ant-tree-node-content-wrapper {
            transition: none;
            background-color: inherit;
            min-height: 32px;
            line-height: 32px;
            padding: 0 8px;

            .ant-tree-iconEle {
                min-height: 32px;
                line-height: 32px;
                margin-inline-end: 10px;
                font-size: 16px;
            }

            &:hover,
            &.ant-tree-node-selected {
                background-color: inherit;
                transition: none;
            }
        }

        &.ant-tree-treenode-leaf-last {
            .ant-tree-switcher-leaf-line:before {
                height: 18px !important;
            }
        }

        .ant-tree-switcher-leaf-line {
            &:after {
                height: 18px;
            }
        }
    }
`, c = ({ ...r }) => o.createElement(a, { ...r, blockNode: !0, draggable: !1, onDragEnd: void 0, onDragEnter: void 0, onDragLeave: void 0, onDragOver: void 0, onDragStart: void 0, onDrop: void 0 });
c.displayName = "KitTree";
export {
  c as KitTree
};
//# sourceMappingURL=index.js.map
