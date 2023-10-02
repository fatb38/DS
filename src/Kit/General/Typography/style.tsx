import {KitTypographyTheme} from '@theme/types/components/General/Typography';
import {createGlobalStyle, css} from 'styled-components';

const fontBaseCss = ($theme: KitTypographyTheme) => css`
    font-family: 'Inter';
    line-height: ${$theme.typography.lineHeight};
    font-weight: ${$theme.typography.fontWeight};
    color: ${$theme.colors.typography.default};
`;

export const TypographyStyle = createGlobalStyle<{
    $theme: KitTypographyTheme;
}>`
    .ant-typography {
        ${({$theme}) => fontBaseCss($theme)};
    }

    a.ant-typography {
        color: ${({$theme}) => $theme.Link.colors.typography.default};

        &:hover {
            color: ${({$theme}) => $theme.Link.colors.typography.hover};
        }
    }

    h1.ant-typography {
        ${({$theme}) => fontBaseCss($theme)};

        font-size: ${({$theme}) => $theme.Title.level1.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level1.typography.lineHeight};
    }

    h2.ant-typography {
        ${({$theme}) => fontBaseCss($theme)};

        font-size: ${({$theme}) => $theme.Title.level2.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level2.typography.lineHeight};
    }

    h3.ant-typography {
        ${({$theme}) => fontBaseCss($theme)};

        font-size: ${({$theme}) => $theme.Title.level3.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level3.typography.lineHeight};
    }

    h4.ant-typography {
        ${({$theme}) => fontBaseCss($theme)};

        font-size: ${({$theme}) => $theme.Title.level4.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level4.typography.lineHeight};
    }

`;
