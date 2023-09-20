import React from 'react';
import {Tree as AntdTree} from 'antd';
import styled from 'styled-components';
import {KitTreeProps} from './types';
import {useKitTheme} from '@theme/theme-context';
import {KitTreeTheme} from '@theme/types/components/DataDisplay/Tree';

const StyledTree = styled(AntdTree)<{$theme: KitTreeTheme}>`
    .ant-tree-treenode {
        padding: 0;
        font-weight: ${({$theme}) => $theme.treenode.typography.fontWeight};

        &:hover {
            background-color: ${({$theme}) => $theme.treenode.colors.background.hover};
            color: ${({$theme}) => $theme.treenode.colors.typography.hover};
        }

        &.ant-tree-treenode-selected {
            background-color: ${({$theme}) => $theme.treenode.colors.background.selected};
        }

        &.ant-tree-treenode-disabled {
            color: ${({$theme}) => $theme.treenode.colors.typography.disabled};

            &:hover:not(.ant-tree-treenode-selected) {
                background-color: inherit;
            }

            .ant-tree-node-content-wrapper {
                color: ${({$theme}) => $theme.treenode.colors.typography.disabled};
            }
        }

        .ant-tree-indent {
            background-color: ${({$theme}) => $theme.treenode.colors.background.indent};
        }

        .ant-tree-switcher {
            min-height: 32px;
            line-height: 32px;
        }

        .ant-tree-checkbox {
            align-self: center;
            margin-top: 0px;
            margin-inline-end: 0px;

            .ant-tree-checkbox-inner {
                background-color: ${({$theme}) => $theme.checkbox.colors.background.default};
                border: 1px solid ${({$theme}) => $theme.checkbox.colors.border.default};
            }

            .ant-tree-checkbox-inner:after {
                border-color: ${({$theme}) => $theme.checkbox.colors.icon.default};
            }

            &:hover .ant-tree-checkbox-inner {
                border: 1px solid ${({$theme}) => $theme.checkbox.colors.border.hover};
            }

            &.ant-tree-checkbox-checked {
                .ant-tree-checkbox-inner:after {
                    border-color: ${({$theme}) => $theme.checkbox.colors.icon.checked};
                }

                .ant-tree-checkbox-inner {
                    background-color: ${({$theme}) => $theme.checkbox.colors.background.checked.default};
                    border: 1px solid ${({$theme}) => $theme.checkbox.colors.border.checked.default};
                }

                &:hover .ant-tree-checkbox-inner {
                    background-color: ${({$theme}) => $theme.checkbox.colors.background.checked.hover};
                    border-color: ${({$theme}) => $theme.checkbox.colors.border.checked.hover};
                }
            }

            &.ant-tree-checkbox-indeterminate {
                &:not(.ant-tree-checkbox-disabled) {
                    .ant-tree-checkbox-inner {
                        background-color: ${({$theme}) => $theme.checkbox.colors.background.checked.default};
                        border-color: ${({$theme}) => $theme.checkbox.colors.border.checked.default};
                    }

                    &:hover .ant-tree-checkbox-inner {
                        background-color: ${({$theme}) => $theme.checkbox.colors.background.checked.hover};
                        border-color: ${({$theme}) => $theme.checkbox.colors.border.checked.hover};
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
                color: ${({$theme}) => $theme.checkbox.colors.icon.disabled};

                .ant-tree-checkbox-inner {
                    background-color: ${({$theme}) => $theme.checkbox.colors.background.disabled};
                    border: 1px solid ${({$theme}) => $theme.checkbox.colors.border.disabled};
                }

                .ant-tree-checkbox-inner:after {
                    border-color: ${({$theme}) => $theme.checkbox.colors.icon.disabled};
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

export const KitTree: React.FunctionComponent<KitTreeProps> = ({...treeProps}) => {
    const {theme} = useKitTheme();

    return (
        <StyledTree
            $theme={theme.components.Tree}
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

KitTree.displayName = 'KitTree';
