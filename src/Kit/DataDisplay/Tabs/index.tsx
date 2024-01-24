import React, {FunctionComponent} from 'react';
import {Tabs as AntTabs} from 'antd';
import styled from 'styled-components';
import {IKitTabs} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {kitTabsCssTokens} from '@theme/aristid/components/DataDisplay/Tabs';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {spacingCssTokens} from '@theme/aristid/general/spacing';
import {convertToPixel} from '@theme/utils/convert';

const StyledKitTabs = styled(AntTabs)`
    .ant-tabs-extra-content {
        .ant-btn {
            border-radius: ${convertToPixel(kitTabsCssTokens.extraContent.border.radius, borderCssTokens.radius.xxs)};
            border: 1px solid
                var(
                    ${kitTabsCssTokens.extraContent.colors.border.default},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey300})
                );
            padding-top: ${convertToPixel(kitTabsCssTokens.extraContent.padding.vertical, spacingCssTokens.xxs)};
            padding-bottom: ${convertToPixel(kitTabsCssTokens.extraContent.padding.vertical, spacingCssTokens.xxs)};
            padding-left: ${convertToPixel(kitTabsCssTokens.extraContent.padding.horizontal, spacingCssTokens.s)};
            padding-right: ${convertToPixel(kitTabsCssTokens.extraContent.padding.horizontal, spacingCssTokens.s)};
            height: 34px;
            color: var(
                ${kitTabsCssTokens.extraContent.colors.typography.default},
                var(${kitColorsPaletteCssTokens.neutral.typography.black})
            );
        }
    }

    &.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab {
        border-radius: ${convertToPixel(kitTabsCssTokens.card.border.radius, borderCssTokens.radius.s)}
            ${convertToPixel(kitTabsCssTokens.card.border.radius, borderCssTokens.radius.s)} 0 0;
        margin-top: 10px;
    }

    &.ant-tabs-top,
    &.ant-tabs-bottom {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-left: 0px;
            padding-right: ${convertToPixel(kitTabsCssTokens.extraContent.padding.horizontal, spacingCssTokens.s)};
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-left: ${convertToPixel(kitTabsCssTokens.extraContent.padding.horizontal, spacingCssTokens.s)};
            padding-right: 0px;
        }
    }

    &.ant-tabs-left,
    &.ant-tabs-right {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-top: 0px;
            padding-bottom: ${convertToPixel(kitTabsCssTokens.extraContent.padding.vertical, spacingCssTokens.s)};
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-top: ${convertToPixel(kitTabsCssTokens.extraContent.padding.vertical, spacingCssTokens.s)};
            padding-bottom: 0px;
        }
    }

    &.ant-tabs-left .ant-tabs-nav .ant-tabs-extra-content {
        padding-right: ${convertToPixel(kitTabsCssTokens.extraContent.padding.horizontal, spacingCssTokens.xxs)};
    }

    &.ant-tabs-right .ant-tabs-nav .ant-tabs-extra-content {
        padding-left: ${convertToPixel(kitTabsCssTokens.extraContent.padding.horizontal, spacingCssTokens.xxs)};
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
