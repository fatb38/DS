import React from "react";
import { Image as AntdImage } from "antd";
import { KitImageProps } from "./types";
import styled from "styled-components";
import theme from "./theme";

interface StyledKitImageProps extends KitImageProps {
    $rounded?: boolean;
    $bordered?: boolean;
}

const StyledImage = styled(AntdImage)<StyledKitImageProps>`
    border-radius: ${(props) => (props.$rounded ? theme.borderRadius : 0)}px;
    border: ${(props) =>
        props.$bordered ? "1px solid " + theme.borderColor : "none"};

    + .ant-image-mask {
        border-radius: ${(props) =>
            props.$rounded ? theme.borderRadius : 0}px;
        border: ${(props) =>
            props.$bordered ? "1px solid " + theme.borderColor : "none"};
    }
`;

type CompoundedComponent = React.FunctionComponent<KitImageProps> & {
    PreviewGroup: typeof AntdImage.PreviewGroup;
};

const Image: React.FunctionComponent<KitImageProps> = ({
    rounded,
    bordered,
    ...props
}) => {
    return <StyledImage $rounded={rounded} $bordered={bordered} {...props} />;
};

export const KitImage = (Image as unknown) as CompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
// @ts-ignore
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = "KitImage";
