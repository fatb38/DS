import React from 'react';
import {Collapse as AntdCollapse} from 'antd';
import {KitCollapseProps} from './types';
import styled from 'styled-components';

const StyledCollapse = styled(AntdCollapse)``;

export const KitCollapse: React.FunctionComponent<KitCollapseProps> = collapseProps => {
    return <StyledCollapse {...collapseProps} />;
};

KitCollapse.displayName = 'KitCollapse';
