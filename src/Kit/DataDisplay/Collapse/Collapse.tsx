import React from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {KitCollapseProps} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';

const StyledCollapse = styled(AntdCollapse)<{
    $theme: IKitCollapseTheme;
}>`
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);

    .ant-collapse-item .ant-collapse-header {
        align-items: center;
    }

    .ant-collapse-item:first-of-type,
    .ant-collapse-item:first-of-type .ant-collapse-header {
        border-top-left-radius: ${({$theme}) => $theme.border.radius}px;
        border-top-right-radius: ${({$theme}) => $theme.border.radius}px;
    }

    .ant-collapse-item:last-of-type {
        &:not(.ant-collapse-item-active),
        &:not(.ant-collapse-item-active) .ant-collapse-header {
            border-bottom-left-radius: ${({$theme}) => $theme.border.radius}px;
            border-bottom-right-radius: ${({$theme}) => $theme.border.radius}px;
        }

        &.ant-collapse-item-active .ant-collapse-header {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }

    .ant-collapse-item-active {
        outline: solid 1px ${({$theme}) => $theme.colors.border.active};
        border-bottom: none;

        > .ant-collapse-header {
            background-color: ${({$theme}) => $theme.colors.background.active};
        }

        > .ant-collapse-content {
            border-color: ${({$theme}) => $theme.colors.border.active};
        }
    }
`;

export const KitCollapse: React.FunctionComponent<KitCollapseProps> = collapseProps => {
    const {theme} = useKitTheme();

    return <StyledCollapse $theme={theme.components.Collapse} {...collapseProps} />;
};

KitCollapse.displayName = 'KitCollapse';

export default KitCollapse;
