import React from "react";
import { Tree as AntdTree } from "antd";
import styled from "styled-components";
import { KitTreeProps } from "./types";
import theme from "@theme/index";

const StyledTree = styled(AntdTree)`
    .ant-tree-treenode {
        padding: 0;
        font-weight: ${theme.typography.regularFontWeight};

        &:hover {
            background-color: ${theme.color.primary.blue100};
            color: ${theme.color.primary.blue400};
        }

        &.ant-tree-treenode-selected {
            background-color: ${theme.color.primary.blue100};
        }

        &.ant-tree-treenode-disabled {
            color: ${theme.color.neutral.typography.black60};

            &:hover {
                background-color: inherit;
            }

            .ant-tree-node-content-wrapper {
                color: ${theme.color.neutral.typography.black60};
            }
        }

        .ant-tree-indent {
            background-color: ${theme.color.neutral.typography.white};
        }

        .ant-tree-switcher {
            min-height: 32px;
            line-height: 32px;
        }

        .ant-tree-checkbox {
            margin-inline-end: 0px;

            .ant-tree-checkbox-inner {
                background-color: ${theme.color.neutral.typography.white};
                border: 1px solid ${theme.color.neutral.typography.black60};
            }

            .ant-tree-checkbox-inner:after {
                border-color: ${theme.color.neutral.typography.black60};
            }

            &:hover .ant-tree-checkbox-inner {
                border: 1px solid ${theme.color.primary.blue400};
            }

            &.ant-tree-checkbox-checked {
                color: ${theme.color.neutral.typography.white};

                .ant-tree-checkbox-inner {
                    background-color: ${theme.color.primary.blue400};
                    border: 1px solid ${theme.color.primary.blue400};
                }

                .ant-tree-checkbox-inner:after {
                    border-color: ${theme.color.neutral.typography.white};
                }

                &:hover .ant-tree-checkbox-inner {
                    background-color: ${theme.color.primary.blue500};
                    border-color: ${theme.color.primary.blue500};
                }
            }

            &.ant-tree-checkbox-indeterminate {
                &:not(.ant-tree-checkbox-disabled) {
                    .ant-tree-checkbox-inner {
                        background-color: ${theme.color.primary.blue400};
                        border-color: ${theme.color.primary.blue400};
                    }

                    &:hover .ant-tree-checkbox-inner {
                        background-color: ${theme.color.primary.blue500};
                        border-color: ${theme.color.primary.blue500};
                    }

                    .ant-tree-checkbox-inner:after {
                        width: 8px;
                        height: 0px;
                        border: 1px solid white;
                        transform: translate("-4px", "-1px");
                    }
                }
            }

            &.ant-tree-checkbox-disabled {
                color: ${theme.color.neutral.typography.black60};

                .ant-tree-checkbox-inner {
                    background-color: ${theme.color.neutral.typography.white};
                    border: 1px solid ${theme.color.neutral.typography.black60};
                }

                .ant-tree-checkbox-inner:after {
                    border-color: ${theme.color.neutral.typography.black60};
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
`;

export const KitTree: React.FunctionComponent<KitTreeProps> = ({
    ...treeProps
}) => {
    return (
        <StyledTree
            {...treeProps}
            blockNode={true}
            draggable={false}
            onDragEnd={undefined}
            onDragEnter={undefined}
            onDragLeave={undefined}
            onDragOver={undefined}
            onDragStart={undefined}
            onDrop={undefined}
        />
    );
};

KitTree.displayName = "KitTree";
