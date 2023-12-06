import React, {FunctionComponent} from 'react';
import {Tabs as AntTabs} from 'antd';
import styled from 'styled-components';
import {IKitTabs} from './types';
import {useKitTheme} from '@theme/theme-context';
import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';

const StyledKitTabs = styled(AntTabs)`
    .ant-tabs-extra-content {
        .ant-btn {
            border-radius: calc(
                var(${kitTabsCssTokens.extraContent.border.radius}, var(${borderCssTokens.radius.xxs})) * 1px
            );
            border: 1px solid
                var(
                    ${kitTabsCssTokens.extraContent.colors.border.default},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey300})
                );
            padding-top: calc(
                var(${kitTabsCssTokens.extraContent.padding.vertical}, var(${spacingCssTokens.xxs})) * 1px
            );
            padding-bottom: calc(
                var(${kitTabsCssTokens.extraContent.padding.vertical}, var(${spacingCssTokens.xxs})) * 1px
            );
            padding-left: calc(
                var(${kitTabsCssTokens.extraContent.padding.horizontal}, var(${spacingCssTokens.s})) * 1px
            );
            padding-right: calc(
                var(${kitTabsCssTokens.extraContent.padding.horizontal}, var(${spacingCssTokens.s})) * 1px
            );
            height: 34px;
            color: var(
                ${kitTabsCssTokens.extraContent.colors.typography.default},
                var(${kitColorsPaletteCssTokens.neutral.typography.black})
            );
        }
    }

    &.ant-tabs-top,
    &.ant-tabs-bottom {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-left: 0px;
            padding-right: calc(
                var(${kitTabsCssTokens.extraContent.margin.horizontal}, var(${spacingCssTokens.s})) * 1px
            );
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-left: calc(
                var(${kitTabsCssTokens.extraContent.margin.horizontal}, var(${spacingCssTokens.s})) * 1px
            );
            padding-right: 0px;
        }
    }

    &.ant-tabs-left,
    &.ant-tabs-right {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-top: 0px;
            padding-bottom: calc(
                var(${kitTabsCssTokens.extraContent.margin.vertical}, var(${spacingCssTokens.s})) * 1px
            );
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-top: calc(var(${kitTabsCssTokens.extraContent.margin.vertical}, var(${spacingCssTokens.s})) * 1px);
            padding-bottom: 0px;
        }
    }

    &.ant-tabs-left .ant-tabs-nav .ant-tabs-extra-content {
        padding-right: calc(
            var(${kitTabsCssTokens.extraContent.margin.horizontal}, var(${spacingCssTokens.xxs})) * 1px
        );
    }

    &.ant-tabs-right .ant-tabs-nav .ant-tabs-extra-content {
        padding-left: calc(var(${kitTabsCssTokens.extraContent.margin.horizontal}, var(${spacingCssTokens.xxs})) * 1px);
    }
`;

const KitTabs: FunctionComponent<IKitTabs> = ({className, popupClassName, ...tabsProps}) => {
    const {appId} = useKitTheme();

    return (
        <StyledKitTabs
            className={`${appId} ${className ?? ''}`}
            popupClassName={`${appId} ${popupClassName ?? ''}`}
            {...tabsProps}
        />
    );
};

export {KitTabs};

KitTabs.displayName = 'KitTabs';
