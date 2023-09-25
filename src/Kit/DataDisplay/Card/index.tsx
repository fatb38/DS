import React from 'react';
import {Card as AntdCard} from 'antd';
import {styled} from 'styled-components';
import IKitCardProps from './types';

const StyledCard = styled(AntdCard)``;

export const KitCard: React.FunctionComponent<IKitCardProps> = () => {
    return <StyledCard />;
};

KitCard.displayName = 'KitCard';
