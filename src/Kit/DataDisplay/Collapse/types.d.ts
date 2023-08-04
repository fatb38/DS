import { CollapseProps } from "antd";
import { HTMLAttributes } from "react";

type AntdCollapseTypesToOmit = "bordered" | "expandIconPosition" | "ghost";

export interface KitCollapseProps
    extends Omit<CollapseProps, AntdCollapseTypesToOmit>,
        HTMLAttributes<HTMLDivElement> {}
