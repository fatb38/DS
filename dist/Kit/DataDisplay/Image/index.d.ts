import React from "react";
import { Image as AntdImage } from "antd";
import { KitImageProps } from "./types";
type CompoundedComponent = React.FunctionComponent<KitImageProps> & {
    PreviewGroup: typeof AntdImage.PreviewGroup;
};
export declare const KitImage: CompoundedComponent;
export {};
