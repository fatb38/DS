import { css } from "styled-components";
import theme from "@theme/index";
import cn from "classnames";

export const TITLE_ELE_LIST = [1, 2, 3, 4, 5, 6, 7] as const;

export const fontBaseCss = css`
    &.ant-typography {
        font-family: "Inter";
        line-height: 1.2;
        font-weight: ${theme.typography.defaultFontWeight};
        color: ${theme.color.neutral.typography.black};
    }
`;

export const sizeTofontSize = {
    large: 5,
    medium: 6,
    small: 7,
};

export const getWeightClassname = (props) =>
    cn(props.className, {
        "ant-typography-regular": props.weight === "regular",
        "ant-typography-medium": props.weight === "medium",
        "ant-typography-bold": props.weight === "bold",
    });

export const textStyles = css<{
    size: number;
    weight: string;
}>`
    ${fontBaseCss};
    font-size: ${(props) =>
        props.size
            ? theme.typography["fontSize" + sizeTofontSize[props.size]]
            : theme.typography.fontSize6}px;
    line-height: ${(props) =>
        props.size
            ? theme.typography["lineHeight" + sizeTofontSize[props.size]]
            : theme.typography.lineHeight6};
`;
