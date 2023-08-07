import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';
import {KitTextProps} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import theme from '@theme/index';

const StyledKitParagraph = styled(Typography.Paragraph)<KitTextProps>`
    &.ant-typography {
        font-family: 'Inter';
        line-height: 1.2;
        font-weight: ${theme.typography.defaultFontWeight};
        color: ${theme.color.neutral.typography.black};
    }

    &.ant-typography-regular {
        font-weight: ${theme.typography.regularFontWeight};
    }
    &.ant-typography-medium {
        font-weight: ${theme.typography.mediumfontWeight};
    }
    &.ant-typography-bold {
        font-weight: ${theme.typography.boldFontWeight};
    }

    font-size: ${props =>
        props.size ? theme.typography['fontSize' + sizeTofontSize[props.size]] : theme.typography.fontSize6}px;
    line-height: ${props =>
        props.size ? theme.typography['lineHeight' + sizeTofontSize[props.size]] : theme.typography.lineHeight6};
`;

const KitParagraph = React.forwardRef<HTMLElement, KitTextProps>((props, ref) => {
    return <StyledKitParagraph ref={ref} {...props} className={getWeightClassname(props)} />;
});

export default KitParagraph;
