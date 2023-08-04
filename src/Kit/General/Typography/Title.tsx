import * as React from "react";
import { styled } from "styled-components";
import Base from "antd/lib/typography/Base";
import { TITLE_ELE_LIST, fontBaseCss } from "./commons";
import type { KitTitleProps } from "./types";
import theme from "@theme/index";
import { typographyHeaders } from "@theme/typography";

const StyledH1 = styled.h1`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${typographyHeaders.fontSize1}px;
        line-height: ${typographyHeaders.lineHeight1};
    }
`;

const StyledH2 = styled.h1`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${typographyHeaders.fontSize2}px;
        line-height: ${typographyHeaders.lineHeight2};
    }
`;

const StyledH3 = styled.h3`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${typographyHeaders.fontSize3}px;
        line-height: ${typographyHeaders.lineHeight3};
    }
`;

const StyledH4 = styled.h4`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${typographyHeaders.fontSize4}px;
        line-height: ${typographyHeaders.lineHeight4};
    }
`;

const StyledH5 = styled.h5<KitTitleProps>`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${theme.typography.fontSize5}px;
        line-height: ${theme.typography.lineHeight5};
        font-weight: ${(props) =>
            props.regular
                ? theme.typography.regularFontWeight
                : theme.typography.mediumfontWeight};
    }
`;

const StyledH6 = styled.h6<KitTitleProps>`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${theme.typography.fontSize6}px;
        line-height: ${theme.typography.lineHeight6};
        font-weight: ${(props) =>
            props.regular
                ? theme.typography.regularFontWeight
                : theme.typography.mediumfontWeight};
    }
`;

const StyledH7 = styled.p<KitTitleProps>`
    ${fontBaseCss};
    &.ant-typography {
        font-size: ${theme.typography.fontSize7}px;
        line-height: ${theme.typography.lineHeight7};
        font-weight: ${(props) =>
            props.regular
                ? theme.typography.regularFontWeight
                : theme.typography.mediumfontWeight};
    }
`;

const levels = [
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
    StyledH6,
    StyledH7,
];

const KitTitle = React.forwardRef<HTMLElement, KitTitleProps>((props, ref) => {
    const { level = 1, ...restProps } = props;
    let component: keyof JSX.IntrinsicElements = (levels[0] as unknown) as keyof JSX.IntrinsicElements;

    if (TITLE_ELE_LIST.includes(level)) {
        component = (levels[
            level - 1
        ] as unknown) as keyof JSX.IntrinsicElements;
    }

    // error come from ant
    // @ts-ignore
    return <Base ref={ref} {...restProps} component={component} />;
});

export default KitTitle;
