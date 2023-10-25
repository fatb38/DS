import {Slider as AntdSlider} from 'antd';
import styled from 'styled-components';
import React, {FunctionComponent, forwardRef} from 'react';
import {IStyledKitSlider, IKitSliderRange, IKitSliderSingle} from './types';
import {IKitSliderTheme} from '@theme/types/components/DataEntry/Slider';
import {useKitTheme} from '@theme/theme-context';
import {SliderMarks} from 'antd/lib/slider';
import type {SliderRef} from 'rc-slider/lib/Slider';

const KitSliderContainer = styled.div`
    position: relative;
`;

const StartIcon = styled.div<{$theme: IKitSliderTheme}>`
    position: absolute;
    top: -2px;
    left: 0;
    color: ${({$theme}) => $theme.startIcon.colors.default};
`;

const EndIcon = styled.div<{$theme: IKitSliderTheme}>`
    position: absolute;
    top: -2px;
    right: 0;
    color: ${({$theme}) => $theme.endIcon.colors.default};
`;

const StyledKitSlider = styled(AntdSlider)<IStyledKitSlider>`
    margin-left: ${({$isStartIcon}) => ($isStartIcon ? '30px' : '0px')};
    margin-right: ${({$isEndIcon}) => ($isEndIcon ? '30px' : '0px')};
    &.ant-slider:not(.ant-slider-disabled) {
        .ant-slider-handle {
            &:hover::after {
                background-color: ${({$theme}) => $theme.handle.colors.background.hover};
            }
            &::after {
                box-shadow: 0 0 0 2px ${({$theme}) => $theme.handle.colors.border.default};
            }
            &:focus::after {
                background-color: ${({$theme}) => $theme.handle.colors.background.focus};
            }
        }

        &:hover {
            .ant-slider-dot:not(.ant-slider-dot-active) {
                border-color: ${({$theme}) => $theme.dot.colors.border.default};
            }
        }

        .ant-slider-mark .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
            color: ${({$theme}) => $theme.dot.colors.border.default};
        }

        .ant-slider-mark {
            top: 14px;
        }
    }

    &.ant-slider-disabled {
        .ant-slider-handle::after {
            box-shadow: 0 0 0 2px ${({$theme}) => $theme.handle.colors.border.disabled};
        }
    }
`;

export const KitSlider = forwardRef<SliderRef, IKitSliderSingle | IKitSliderRange>(
    ({startIcon, endIcon, marks, ...props}, ref) => {
        const {theme} = useKitTheme();
        const internalMarks = marks as SliderMarks;
        if (startIcon !== undefined || endIcon !== undefined) {
            return (
                <KitSliderContainer>
                    <StartIcon $theme={theme.components.Slider}>{startIcon}</StartIcon>
                    <StyledKitSlider
                        $theme={theme.components.Slider}
                        $isStartIcon={!!startIcon}
                        $isEndIcon={!!endIcon}
                        marks={internalMarks}
                        ref={ref}
                        {...props}
                    />
                    <EndIcon $theme={theme.components.Slider}>{endIcon}</EndIcon>
                </KitSliderContainer>
            );
        }

        return (
            <StyledKitSlider
                marks={internalMarks}
                $theme={theme.components.Slider}
                $isStartIcon={false}
                $isEndIcon={false}
                ref={ref}
                {...props}
            />
        );
    }
);
