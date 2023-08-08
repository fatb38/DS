import React from 'react';
import {Rate as AntdRate} from 'antd';
import {KitRateColor, KitRateProps} from './types';
import styled, {css} from 'styled-components';
import theme from '@theme/index';

const StyledRate = styled(AntdRate)<{
    $color: KitRateColor;
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
`;

export const KitRate: React.FunctionComponent<KitRateProps> = ({color = 'default', ...rateProps}) => {
    return <StyledRate $color={color} {...rateProps} />;
};

KitRate.displayName = 'KitRate';
