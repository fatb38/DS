import React, {FunctionComponent} from 'react';
import {Tree as AntdTree} from 'antd';
import styled from 'styled-components';
import {IKitTree} from './types';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitTreeCssTokens} from '@theme/aristid/components/DataDisplay/Tree';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';

const StyledTree = styled(AntdTree)`
    .ant-tree-treenode {
        padding: 0;
        font-weight: var(
            ${kitTreeCssTokens.treenode.typography.fontWeight},
            var(${typographyCssTokens.regularFontWeight})
        );

        &:hover {
            background-color: var(
                ${kitTreeCssTokens.treenode.colors.background.hover},
                var(${kitColorsPaletteCssTokens.primary.primary100})
            );
            color: var(
                ${kitTreeCssTokens.treenode.colors.typography.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }

        &.ant-tree-treenode-selected {
            background-color: var(
                ${kitTreeCssTokens.treenode.colors.background.selected},
                var(${kitColorsPaletteCssTokens.primary.primary100})
            );
        }

        &.ant-tree-treenode-disabled {
            color: var(
                ${kitTreeCssTokens.treenode.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.neutral.typography.black60})
            );

            &:hover:not(.ant-tree-treenode-selected) {
                background-color: inherit;
            }

            .ant-tree-node-content-wrapper {
                color: var(
                    ${kitTreeCssTokens.treenode.colors.typography.disabled},
                    var(${kitColorsPaletteCssTokens.neutral.typography.black60})
                );
            }
        }

        .ant-tree-indent {
            background-color: var(
                ${kitTreeCssTokens.treenode.colors.background.indent},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );
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
                background-color: var(
                    ${kitTreeCssTokens.checkbox.colors.background.default},
                    var(${kitColorsPaletteCssTokens.neutral.white})
                );
                border: 1px solid
                    var(
                        ${kitTreeCssTokens.checkbox.colors.border.default},
                        var(${kitColorsPaletteCssTokens.neutral.black60})
                    );
            }

            .ant-tree-checkbox-inner:after {
                border-color: var(
                    ${kitTreeCssTokens.checkbox.colors.icon.default},
                    var(${kitColorsPaletteCssTokens.neutral.black60})
                );
            }

            &:hover .ant-tree-checkbox-inner {
                border: 1px solid
                    var(
                        ${kitTreeCssTokens.checkbox.colors.border.hover},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
            }

            &.ant-tree-checkbox-checked {
                .ant-tree-checkbox-inner:after {
                    border-color: var(
                        ${kitTreeCssTokens.checkbox.colors.icon.checked},
                        var(${kitColorsPaletteCssTokens.neutral.white})
                    );
                }

                .ant-tree-checkbox-inner {
                    background-color: var(
                        ${kitTreeCssTokens.checkbox.colors.background.checked.default},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
                    border: 1px solid
                        var(
                            ${kitTreeCssTokens.checkbox.colors.border.checked.default},
                            var(${kitColorsPaletteCssTokens.primary.primary400})
                        );
                }

                &:hover .ant-tree-checkbox-inner {
                    background-color: var(
                        ${kitTreeCssTokens.checkbox.colors.background.checked.hover},
                        var(${kitColorsPaletteCssTokens.primary.primary500})
                    );
                    border-color: var(
                        ${kitTreeCssTokens.checkbox.colors.border.checked.hover},
                        var(${kitColorsPaletteCssTokens.primary.primary500})
                    );
                }
            }

            &.ant-tree-checkbox-indeterminate {
                &:not(.ant-tree-checkbox-disabled) {
                    .ant-tree-checkbox-inner {
                        background-color: var(
                            ${kitTreeCssTokens.checkbox.colors.background.checked.default},
                            var(${kitColorsPaletteCssTokens.primary.primary400})
                        );
                        border-color: var(
                            ${kitTreeCssTokens.checkbox.colors.border.checked.default},
                            var(${kitColorsPaletteCssTokens.primary.primary400})
                        );
                    }

                    &:hover .ant-tree-checkbox-inner {
                        background-color: var(
                            ${kitTreeCssTokens.checkbox.colors.background.checked.hover},
                            var(${kitColorsPaletteCssTokens.primary.primary500})
                        );
                        border-color: var(
                            ${kitTreeCssTokens.checkbox.colors.border.checked.hover},
                            var(${kitColorsPaletteCssTokens.primary.primary500})
                        );
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
                color: var(
                    ${kitTreeCssTokens.checkbox.colors.icon.disabled},
                    var(${kitColorsPaletteCssTokens.neutral.black60})
                );

                .ant-tree-checkbox-inner {
                    background-color: var(
                        ${kitTreeCssTokens.checkbox.colors.background.disabled},
                        var(${kitColorsPaletteCssTokens.neutral.white})
                    );
                    border: 1px solid
                        var(
                            ${kitTreeCssTokens.checkbox.colors.border.disabled},
                            var(${kitColorsPaletteCssTokens.neutral.black60})
                        );
                }

                .ant-tree-checkbox-inner:after {
                    border-color: var(
                        ${kitTreeCssTokens.checkbox.colors.icon.disabled},
                        var(${kitColorsPaletteCssTokens.neutral.black60})
                    );
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

export const KitTree: FunctionComponent<IKitTree> = ({className, ...treeProps}) => {
    const {appId} = useKitTheme();
    return (
        <StyledTree
            {...treeProps}
            className={`${appId} ${className ?? ''}`}
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
