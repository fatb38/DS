import React from 'react';
import {Tour} from 'antd';
import {FunctionComponent} from 'react';
import {styled} from 'styled-components';
import {IKitTour} from './types';

const StyledTour = styled(Tour)`
    .ant-tour-inner {
        background-color: #c6c6;
    }
`;

export const KitTour: FunctionComponent<IKitTour> = ({...tourProps}) => {
    return <StyledTour {...tourProps} />;
};
