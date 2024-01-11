import React, {FunctionComponent} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {IKitCollapse} from './types';
import styled from 'styled-components';
import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const StyledCollapse = styled(AntdCollapse)`
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
    border: none;

    .ant-collapse-item {
        border: 1px solid
            var(
                ${kitCollapseCssTokens.colors.border.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
            );
        padding: 2px;

        .ant-collapse-expand-icon svg {
            transition: transform 0.3s ease-in-out;
            transform: rotate(0deg);
        }

        &.ant-collapse-item-active {
            // TODO: add css variable outline-width: cards-border-stroke
            border: 3px solid
                var(${kitCollapseCssTokens.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}));
            padding: 0;

            .ant-collapse-expand-icon svg {
                transition: transform 0.3s ease-in-out;
                transform: rotate(180deg);
            }

            > .ant-collapse-content {
                border-color: var(
                    ${kitCollapseCssTokens.colors.border.active},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }

            & + .ant-collapse-item-active {
                border-top: none;
                padding-top: 2px;
            }

            & + .ant-collapse-item:not(.ant-collapse-item-active) {
                border-top: none;
            }
        }

        &:not(.ant-collapse-item-active):not(:last-of-type) {
            border-bottom: none;
        }

        .ant-collapse-header {
            align-items: center;
        }

        .ant-collapse-content {
            border-top: none;
        }

        &:first-of-type,
        &:first-of-type .ant-collapse-header {
            border-top-left-radius: calc(
                var(${kitCollapseCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px
            );
            border-top-right-radius: calc(
                var(${kitCollapseCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px
            );
        }

        &:last-of-type {
            &,
            & .ant-collapse-header {
                border-bottom-left-radius: calc(
                    var(${kitCollapseCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px
                );
                border-bottom-right-radius: calc(
                    var(${kitCollapseCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px
                );
            }

            &.ant-collapse-item-active .ant-collapse-header {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }
`;

const _getDefaultExpandIcon = () => {
    return <FontAwesomeIcon icon={faChevronDown} />;
};

export const KitCollapse: FunctionComponent<IKitCollapse> = ({className, expandIcon, ...collapseProps}) => {
    const {appId} = useKitTheme();

    return (
        <StyledCollapse
            {...collapseProps}
            className={`${appId} ${className ?? ''}`}
            expandIcon={expandIcon ?? _getDefaultExpandIcon}
            expandIconPosition="end"
        />
    );
};

KitCollapse.displayName = 'KitCollapse';

export default KitCollapse;
