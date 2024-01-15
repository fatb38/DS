import React, {FunctionComponent, ReactElement, cloneElement} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {IKitCollapse} from './types';
import styled from 'styled-components';
import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {convertToPixel} from '@theme/utils/convert';

const StyledCollapse = styled(AntdCollapse)`
    border: none;

    &&& > .ant-collapse-item {
        border: 1px solid
            var(
                ${kitCollapseCssTokens.colors.border.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
            );
        padding: 2px;

        &.ant-collapse-item-disabled {
            background-color: var(
                ${kitCollapseCssTokens.colors.background.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );

            .ant-collapse-expand-icon,
            .ant-collapse-header-text {
                color: var(
                    ${kitCollapseCssTokens.colors.icon.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }

        &.ant-collapse-item-active,
        &:hover:not(.ant-collapse-item-disabled),
        &:not(.ant-collapse-item-disabled):has(.ant-collapse-header:focus) {
            // TODO: add css variable outline-width: cards-border-stroke
            border: 3px solid
                var(${kitCollapseCssTokens.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}));
            padding: 0;

            &:not(.ant-collapse-item-active):not(.ant-collapse-item-disabled):has(.ant-collapse-header:focus) {
                border-color: var(
                    ${kitCollapseCssTokens.colors.border.active},
                    var(${kitColorsPaletteCssTokens.primary.primary200})
                );
            }

            & + .ant-collapse-item.ant-collapse-item-active {
                border-top: none;
                padding-top: 2px;
            }

            & + .ant-collapse-item:not(.ant-collapse-item-active) {
                border-top: none;

                &:hover,
                &:not(.ant-collapse-item-active):not(.ant-collapse-item-disabled):has(.ant-collapse-header:focus) {
                    padding-top: 2px;
                }
            }
        }

        &:not(.ant-collapse-item-active):not(.ant-collapse-item-disabled):not(:last-of-type) {
            &:not(.pseudo-hover):hover {
                border-bottom: 3px solid
                    var(
                        ${kitCollapseCssTokens.colors.border.active},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
            }

            &:not(.ant-collapse-item-active):not(.ant-collapse-item-disabled):has(.ant-collapse-header:focus) {
                border-bottom: 3px solid
                    var(
                        ${kitCollapseCssTokens.colors.border.active},
                        var(${kitColorsPaletteCssTokens.primary.primary200})
                    );
            }
        }

        &.ant-collapse-item-disabled:not(.ant-collapse-item-active):not(:last-of-type),
        &:not(.ant-collapse-item-active):not(:last-of-type):not(:hover) {
            border-bottom: none;
        }

        .ant-collapse-header {
            align-items: center;
            padding: ${convertToPixel(spacingCssTokens.s)};

            .ant-collapse-expand-icon {
                padding-inline-start: ${convertToPixel(spacingCssTokens.s)};
                padding-inline-end: ${convertToPixel(spacingCssTokens.s)};

                svg {
                    transition: transform 0.3s ease-in-out;
                    transform: rotate(0deg);
                }
            }
        }

        &.ant-collapse-item-active .ant-collapse-header .ant-collapse-expand-icon svg {
            transition: transform 0.3s ease-in-out;
            transform: rotate(180deg);
        }

        .ant-collapse-content {
            border-top: none;

            .ant-collapse-content-box {
                padding: 0 ${convertToPixel(spacingCssTokens.s)} ${convertToPixel(spacingCssTokens.s)}
                    ${convertToPixel(spacingCssTokens.s)};
                margin-top: ${convertToPixel(spacingCssTokens.xxs)};
            }
        }

        &:first-of-type,
        &:first-of-type .ant-collapse-header {
            border-top-left-radius: ${convertToPixel(kitCollapseCssTokens.border.radius, borderCssTokens.radius.s)};
            border-top-right-radius: ${convertToPixel(kitCollapseCssTokens.border.radius, borderCssTokens.radius.s)};
        }

        &:last-of-type {
            &,
            & .ant-collapse-header {
                border-bottom-left-radius: ${convertToPixel(
                    kitCollapseCssTokens.border.radius,
                    borderCssTokens.radius.s
                )};
                border-bottom-right-radius: ${convertToPixel(
                    kitCollapseCssTokens.border.radius,
                    borderCssTokens.radius.s
                )};
            }

            &.ant-collapse-item-active .ant-collapse-header {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }
`;

const _getDefaultExpandIcon: FunctionComponent = () => <FontAwesomeIcon icon={faChevronDown} />;

export const KitCollapse: FunctionComponent<IKitCollapse> = ({
    className,
    expandIcon,
    items,
    collapsible,
    ...collapseProps
}) => {
    const {appId} = useKitTheme();

    if (collapsible === 'disabled') {
        items?.forEach(item => {
            if (item.label !== undefined) {
                const headerElement = item.label as ReactElement;
                const extraHeaderElement = item.extra as ReactElement;

                if (
                    headerElement !== undefined &&
                    (headerElement.type as FunctionComponent)?.displayName === 'KitHeader'
                ) {
                    item.label = cloneElement(headerElement, {
                        disabled: true
                    });
                }

                if (
                    extraHeaderElement !== undefined &&
                    (extraHeaderElement.type as FunctionComponent)?.displayName === 'KitHeaderExtra'
                ) {
                    item.extra = cloneElement(extraHeaderElement, {
                        disabled: true
                    });
                }
            }
        });
    }

    return (
        <StyledCollapse
            {...collapseProps}
            className={`${appId} ${className ?? ''}`}
            expandIcon={expandIcon ?? _getDefaultExpandIcon}
            expandIconPosition="end"
            collapsible={collapsible}
            items={items}
        />
    );
};

KitCollapse.displayName = 'KitCollapse';

export default KitCollapse;
