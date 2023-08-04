import { InputProps } from "antd";
import { PasswordProps, TextAreaProps } from "antd/es/input";
import { HTMLAttributes } from "react";

type AntdInputTypesToOmit =
    | "styles"
    | "type"
    | "bordered"
    | "size"
    | "addonBefore"
    | "addonAfter";

export interface KitInputProps
    extends Omit<InputProps, AntdInputTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {}

export interface KitTextAreaProps
    extends Omit<TextAreaProps, AntdInputTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {}

export interface KitPasswordProps
    extends Omit<PasswordProps, AntdInputTypesToOmit>,
        HTMLAttributes<HTMLSpanElement | HTMLInputElement> {}
