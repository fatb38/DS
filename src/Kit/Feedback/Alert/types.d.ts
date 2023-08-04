import { AlertProps } from "antd";
import { HTMLAttributes } from "react";

type AntdAlertTypesToOmit = "closeText" | "closeIcon" | "action" | "icon";

export interface KitAlertProps
    extends Omit<AlertProps, AntdAlertTypesToOmit>,
        HTMLAttributes<HTMLDivElement> {}
