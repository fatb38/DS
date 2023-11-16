import React from 'react';
import {Tour} from 'antd';
import {FunctionComponent} from 'react';
import {styled} from 'styled-components';
import {IKitTour} from './types';

const StyledTour = styled(Tour)``;

export const KitTour: FunctionComponent<IKitTour> = ({...tourProps}) => {
    return <StyledTour {...tourProps} />;
};
