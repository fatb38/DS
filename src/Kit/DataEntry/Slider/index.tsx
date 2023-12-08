import {Slider as AntdSlider} from 'antd';
import styled from 'styled-components';
import React, {forwardRef} from 'react';
import {IStyledKitSlider, IKitSliderRange, IKitSliderSingle} from './types';
import {useKitTheme} from '@theme/theme-context';
import type {SliderRef} from 'rc-slider/lib/Slider';
import {kitSliderCssTokens} from '@theme/aristid/components/DataEntry/Slider';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const KitSliderContainer = styled.div`
    position: relative;
    display: flex;
    align-items: baseline;
`;

const StartIcon = styled.div`
    color: var(${kitSliderCssTokens.startIcon.colors.default}, var(${kitColorsPaletteCssTokens.neutral.black60}));
`;

const EndIcon = styled.div`
    color: var(${kitSliderCssTokens.endIcon.colors.default}, var(${kitColorsPaletteCssTokens.neutral.black60}));
`;

const StyledKitSlider = styled(AntdSlider)<IStyledKitSlider>`
    flex-grow: 1;
    margin-left: ${({$isStartIcon}) => ($isStartIcon ? '20px' : '0px')};
    margin-right: ${({$isEndIcon}) => ($isEndIcon ? '20px' : '0px')};
    &.ant-slider:not(.ant-slider-disabled) {
        .ant-slider-handle {
            &:hover::after {
                background-color: var(
                    ${kitSliderCssTokens.handle.colors.background.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary100})
                );
            }
            &::after {
                box-shadow: 0 0 0 2px
                    var(
                        ${kitSliderCssTokens.handle.colors.border.default},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
            }
            &:focus::after {
                background-color: var(
                    ${kitSliderCssTokens.handle.colors.background.focus},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }
        }

        &:hover {
            .ant-slider-dot:not(.ant-slider-dot-active) {
                border-color: var(
                    ${kitSliderCssTokens.dot.colors.border.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
                );
            }
        }

        .ant-slider-mark .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
            color: var(
                ${kitSliderCssTokens.dot.colors.border.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }

        .ant-slider-mark {
            top: 14px;
        }
    }

    &.ant-slider-disabled {
        .ant-slider-handle::after {
            box-shadow: 0 0 0 2px
                var(
                    ${kitSliderCssTokens.handle.colors.border.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
                );
        }
    }
`;

export const KitSlider = forwardRef<SliderRef, IKitSliderSingle | IKitSliderRange>(
    ({startIcon, endIcon, marks, className, ...props}, ref) => {
        const {appId} = useKitTheme();

        if (startIcon !== undefined || endIcon !== undefined) {
            return (
                <KitSliderContainer>
                    <StartIcon>{startIcon}</StartIcon>
                    <StyledKitSlider
                        {...props}
                        $isStartIcon={!!startIcon}
                        $isEndIcon={!!endIcon}
                        marks={marks}
                        ref={ref}
                        className={`${appId} ${className ?? ''}`}
                    />
                    <EndIcon>{endIcon}</EndIcon>
                </KitSliderContainer>
            );
        }

        return (
            <StyledKitSlider
                {...props}
                marks={marks}
                $isStartIcon={false}
                $isEndIcon={false}
                ref={ref}
                className={`${appId} ${className ?? ''}`}
            />
        );
    }
);
