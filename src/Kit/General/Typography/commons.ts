import {css} from 'styled-components';
import cn from 'classnames';
import {KitTypographyTheme} from '@theme/types/components/General/Typography';

export const TITLE_ELE_LIST = [1, 2, 3, 4, 5, 6, 7] as const;

export const fontBaseCss = ($theme: KitTypographyTheme) => css`
    &.ant-typography {
        font-family: 'Inter';
        line-height: ${$theme.typography.lineHeight};
        font-weight: ${$theme.typography.fontWeight};
        color: ${$theme.colors.typography.default};
    }
`;

export const sizeTofontSize = {
    large: 5,
    medium: 6,
    small: 7
};

export const getWeightClassname = ({className, weight}) =>
    cn(className, {
        'ant-typography-regular': weight === 'regular',
        'ant-typography-medium': weight === 'medium',
        'ant-typography-bold': weight === 'bold'
    });
