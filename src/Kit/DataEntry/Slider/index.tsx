import {Slider as AntdSlider} from 'antd';
import styled from 'styled-components';
import {KitSliderProps} from './types';
import React from 'react';

const StyledKitSlider = styled(AntdSlider)``;

export const KitSlider: React.FunctionComponent<KitSliderProps> = ({...props}) => {
    return <StyledKitSlider {...props} />;
};
