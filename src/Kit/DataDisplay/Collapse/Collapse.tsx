import React from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {KitCollapseProps} from './types';
import styled from 'styled-components';
import {theme} from '../../..';

const StyledCollapse = styled(AntdCollapse)`
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);

    .ant-collapse-item .ant-collapse-header {
        align-items: center;
    }

    .ant-collapse-item:first-of-type,
    .ant-collapse-item:first-of-type .ant-collapse-header {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .ant-collapse-item:last-of-type {
        &:not(.ant-collapse-item-active),
        &:not(.ant-collapse-item-active) .ant-collapse-header {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        &.ant-collapse-item-active .ant-collapse-header {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }

    .ant-collapse-item-active {
        outline: solid 1px ${theme.color.primary.blue400};
        border-bottom: none;

        > .ant-collapse-header {
            background-color: ${theme.color.primary.blue100};
        }

        > .ant-collapse-content {
            border-color: ${theme.color.primary.blue400};
        }
    }
`;

export const KitCollapse: React.FunctionComponent<KitCollapseProps> = collapseProps => {
    return <StyledCollapse {...collapseProps} />;
};

KitCollapse.displayName = 'KitCollapse';

export default KitCollapse;
