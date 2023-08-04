import React from "react";
import { Space as AntdSpace } from "antd";
import type { KitSpaceProps } from "./types";
import { theme } from "./theme";
import { SpaceCompactProps } from "antd/es/space/Compact";

const spaceSize: {
    small: number;
    middle: number;
    large: number;
} = {
    small: theme.smallGap,
    middle: theme.middleGap,
    large: theme.largeGap,
};

const Space: React.FunctionComponent<KitSpaceProps> = (props) => {
    let { size, ...rest } = props;
    const gapSize = React.useMemo(() => {
        return typeof size === "string" ? spaceSize[size] : size;
    }, [size]);

    return <AntdSpace size={gapSize} {...rest} />;
};

type CompoundedComponent = React.FunctionComponent<KitSpaceProps> & {
    Compact: React.FunctionComponent<SpaceCompactProps>;
};

export const KitSpace = (Space as unknown) as CompoundedComponent;
KitSpace.displayName = "KitSpace";
KitSpace.Compact = AntdSpace.Compact;
