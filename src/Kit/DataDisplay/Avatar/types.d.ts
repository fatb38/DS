import { AvatarProps } from "antd";
import { GroupProps } from "antd/es/avatar";

type AntdAvatarTypesToOmit = "";
type AntdAvatarGroupTypesToOmit = "maxStyle";

export type KitAvatarColorType = "default" | "blueInvert";

export interface KitAvatarProps
    extends Omit<AvatarProps, AntdAvatarTypesToOmit>,
        HTMLAttributes<HTMLSpanElement> {
    color?: KitAvatarColorType;
}

export interface KitAvatarGroupProps
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        HTMLAttributes<HTMLDivElement> {}
