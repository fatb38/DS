import React, {FunctionComponent} from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {IKitCollapse} from './types';
import styled from 'styled-components';
import {kitCollapseCssTokens} from '@theme/aristid/components/DataDisplay/Collapse';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';

const StyledCollapse = styled(AntdCollapse)`
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);

    .ant-collapse-item .ant-collapse-header {
        align-items: center;
    }

    .ant-collapse-item:first-of-type,
    .ant-collapse-item:first-of-type .ant-collapse-header {
        border-top-left-radius: calc(
            var(${kitCollapseCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px
        );
        border-top-right-radius: calc(
            var(${kitCollapseCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px
        );
    }

    .ant-collapse-item:last-of-type {
        &:not(.ant-collapse-item-active),
        &:not(.ant-collapse-item-active) .ant-collapse-header {
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

    .ant-collapse-item-active {
        outline: solid 1px
            var(${kitCollapseCssTokens.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}));
        border-bottom: none;

        > .ant-collapse-header {
            background-color: var(
                ${kitCollapseCssTokens.colors.background.active},
                var(${kitColorsPaletteCssTokens.primary.primary100})
            );
        }

        > .ant-collapse-content {
            border-color: var(
                ${kitCollapseCssTokens.colors.border.active},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }
`;

export const KitCollapse: FunctionComponent<IKitCollapse> = ({className, ...collapseProps}) => {
    const {appId} = useKitTheme();

    return <StyledCollapse {...collapseProps} className={`${appId} ${className ?? ''}`} />;
};

KitCollapse.displayName = 'KitCollapse';

export default KitCollapse;
