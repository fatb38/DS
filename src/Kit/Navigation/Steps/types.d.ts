import { StepsProps, StepProps } from "antd";
import { HTMLAttributes } from "react";

type AntdStepTypesToOmit = "subTitle" | "icon";

interface KitStepProps extends Omit<StepProps, AntdStepTypesToOmit> {}

type AntdStepsTypesToOmit =
    | "type"
    | "progressDot"
    | "size"
    | "percent"
    | "labelPlacement";

export interface KitStepsProps
    extends Omit<StepsProps, AntdStepsTypesToOmit>,
        HTMLAttributes<HTMLDivElement> {
    items?: KitStepProps[];
}
