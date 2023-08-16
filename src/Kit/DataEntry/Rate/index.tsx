import React from 'react';
import {Rate as AntdRate} from 'antd';
import {KitRateColor, KitRateProps} from './types';
import styled, {css} from 'styled-components';
import theme from '@theme/index';

const StyledRate = styled(AntdRate)<{
    $color: KitRateColor;
    $disabledStarTransparency: string;
}>`
    ${props => {
        switch (props.$color) {
            case 'default':
                // Use default one from theme
                return;
            case 'red':
                return css`
                    color: ${theme.color.secondary.red.red300};
                `;
            case 'green':
                return css`
                    color: ${theme.color.secondary.green.green300};
                `;
            case 'blue':
                return css`
                    color: ${theme.color.secondary.blue.blue300};
                `;
        }
    }}

    &.ant-rate .ant-rate-star {
        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first {
                color: ${theme.color.secondary.mediumGrey.mediumGrey100};
            }
        }

        &:not(.ant-rate-star-full) {
            .ant-rate-star-second {
                color: ${theme.color.secondary.mediumGrey.mediumGrey100};
            }
        }
    }

    &.ant-rate-disabled {
        cursor: not-allowed;

        .ant-rate-star {
            cursor: not-allowed;

            &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
                div[role='radio']::after,
                div[role='radio']::before {
                    content: '';
                    position: absolute;
                    width: 2px;
                    height: 95%;
                    background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
                    transform-origin: 0 0;
                    transform: rotate(320deg);
                    left: 0;
                }

                div[role='radio']::after {
                    top: 2px;
                    padding-bottom: 4px;
                    border-radius: 2px;
                }

                div[role='radio']::before {
                    background-color: ${props => {
                        return props.$disabledStarTransparency;
                    }};
                    top: 5px;
                }
            }
        }
    }
`;

export const KitRate: React.FunctionComponent<KitRateProps> = ({
    color = 'default',
    disabledStarTransparency = theme.color.neutral.typography.white,
    ...rateProps
}) => {
    return <StyledRate $color={color} $disabledStarTransparency={disabledStarTransparency} {...rateProps} />;
};

KitRate.displayName = 'KitRate';
