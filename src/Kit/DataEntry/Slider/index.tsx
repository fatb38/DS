import {Slider as AntdSlider} from 'antd';
import styled from 'styled-components';

import React from 'react';
import {colorsPalette} from '../../..';

const KitSliderContainer = styled.div`
    position: relative;
`;

const StartIcon = styled.div`
    position: absolute;
    top: -2px;
    left: 0;
    color: ${colorsPalette.neutral.typography.black60};
`;

const EndIcon = styled.div`
    position: absolute;
    top: -2px;
    right: 0;
    color: ${colorsPalette.neutral.typography.black60};
`;

const StyledKitSlider = styled(AntdSlider)<{$isStartIcon: boolean; $isEndIcon: boolean}>`
    margin-left: ${({$isStartIcon}) => ($isStartIcon ? '30px' : '0px')};
    margin-right: ${({$isEndIcon}) => ($isEndIcon ? '30px' : '0px')};
    &.ant-slider:not(.ant-slider-disabled) {
        .ant-slider-handle {
            &:hover::after {
                background-color: ${colorsPalette.primary.blue100};
            }
            &::after {
                box-shadow: 0 0 0 2px ${colorsPalette.primary.blue400};
            }
            &:focus::after {
                background-color: ${colorsPalette.primary.blue400};
            }
        }

        &:hover {
            .ant-slider-dot:not(.ant-slider-dot-active) {
                border-color: ${colorsPalette.secondary.mediumGrey.mediumGrey200};
            }
        }

        .ant-slider-mark {
            top: 14px;
        }
    }
`;

export const KitSlider = ({startIcon, endIcon, ...props}: {[x: string]: any; startIcon?: any; endIcon?: any}) => {
    if (startIcon !== undefined || endIcon !== undefined) {
        return (
            <KitSliderContainer>
                <StartIcon>{startIcon}</StartIcon>
                <StyledKitSlider $isStartIcon={!!startIcon} $isEndIcon={!!endIcon} {...props} />
                <EndIcon>{endIcon}</EndIcon>
            </KitSliderContainer>
        );
    }

    return <StyledKitSlider $isStartIcon={false} $isEndIcon={false} {...props} />;
};
