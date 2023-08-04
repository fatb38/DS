import type { ImageProps } from "antd";
import { Image } from "antd";
import { HTMLAttributes, ReactElement } from "react";

export interface KitImageProps
    extends ImageProps,
        HTMLAttributes<HTMLDivElement> {
    rounded?: boolean;
    bordered?: boolean;
    PreviewGroup?: ReactElement<Image.PreviewGroup>;
}

export interface themeProps {
    borderRadius: number;
    borderColor: string;
}
