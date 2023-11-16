import React from 'react';
import styled from 'styled-components';
import {Icons} from '@storybook/components';

const StyledIcon = styled(Icons)`
    margin-right: 8px;
    margin-left: 0px;
    margin-top: -2px;
    height: 12px;
    width: 12px;
    border: 'none';
    display: 'inline-block';
`;

const Icon: typeof Icons = ({icon}) => {
    return <StyledIcon icon={icon} />;
};

export default Icon;
