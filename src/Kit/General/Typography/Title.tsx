import React, {useMemo} from 'react';
import {styled} from 'styled-components';
import Base from 'antd/lib/typography/Base';
import {TITLE_ELE_LIST, fontBaseCss} from './commons';
import {KitTypographyTheme} from '@theme/types/components/General/Typography';
import {KitTitleProps} from './types';
import {useKitTheme} from '@theme/theme-context';

// TODO: global style

const StyledH1 = styled.h1<{$theme: KitTypographyTheme}>`
    ${({$theme}) => fontBaseCss($theme)};

    &.ant-typography {
        font-size: ${({$theme}) => $theme.Title.level1.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level1.typography.lineHeight};
    }
`;

const StyledH2 = styled.h2<{$theme: KitTypographyTheme}>`
    ${({$theme}) => fontBaseCss($theme)};

    &.ant-typography {
        font-size: ${({$theme}) => $theme.Title.level2.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level2.typography.lineHeight};
    }
`;

const StyledH3 = styled.h3<{$theme: KitTypographyTheme}>`
    ${({$theme}) => fontBaseCss($theme)};

    &.ant-typography {
        font-size: ${({$theme}) => $theme.Title.level3.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level3.typography.lineHeight};
    }
`;

const StyledH4 = styled.h4<{$theme: KitTypographyTheme}>`
    ${({$theme}) => fontBaseCss($theme)};

    &.ant-typography {
        font-size: ${({$theme}) => $theme.Title.level4.typography.fontSize}px;
        line-height: ${({$theme}) => $theme.Title.level4.typography.lineHeight};
    }
`;

const KitTitle = React.forwardRef<HTMLElement, KitTitleProps>((props, ref) => {
    const {theme: kitTheme} = useKitTheme();
    const theme = kitTheme.components.Typography;

    // TODO: renvoyer h1, h2, h3  et h4
    const levels = useMemo(
        () => [
            // <StyledH1 $theme={theme} />,
            // <StyledH2 $theme={theme} />,
            // <StyledH3 $theme={theme} />,
            // <StyledH4 $theme={theme} />,
            // <StyledH5 $theme={theme} />,
            // <StyledH6 $theme={theme} />,
            // <StyledH7 $theme={theme} />
            // StyledH1({$theme: theme}),
            // StyledH2({$theme: theme}),
            // StyledH3({$theme: theme}),
            // StyledH4({$theme: theme}),
            // StyledH5({$theme: theme}),
            // StyledH6({$theme: theme}),
            // StyledH7({$theme: theme})
            // StyledH1,
            // StyledH2,
            // StyledH3,
            // StyledH4,
            // StyledH5,
            // StyledH6,
            // StyledH7
        ],
        [theme]
    );

    const {level = 1, ...restProps} = props;
    let component: keyof JSX.IntrinsicElements = levels[0] as unknown as keyof JSX.IntrinsicElements;

    if (TITLE_ELE_LIST.includes(level)) {
        component = levels[level - 1] as unknown as keyof JSX.IntrinsicElements;
    }

    // error come from ant
    // @ts-ignore
    return <Base ref={ref} {...restProps} component={component} />;
});

export default KitTitle;
