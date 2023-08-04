import React from "react";
import { Avatar as AntdAvatar } from "antd";
import { KitAvatarGroupProps } from "./types";
import theme from "@theme/index";

const KitAvatarGroup: React.FunctionComponent<KitAvatarGroupProps> = (
    avatarGroupProps
) => {
    return (
        <AntdAvatar.Group
            maxStyle={{
                background: theme.color.primary.blue100,
                color: theme.color.secondary.blue.blue200,
                cursor:
                    avatarGroupProps.maxPopoverTrigger === "click"
                        ? "pointer"
                        : "initial",
            }}
            {...avatarGroupProps}
        />
    );
};

export default KitAvatarGroup;
