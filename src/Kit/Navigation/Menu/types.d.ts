import { KitInputProps } from "../../DataEntry/Input/types";
import { KitButtonProps } from "../../General/Button/types";
import { HTMLAttributes, ReactElement, ReactNode } from "react";

export interface KitMenuProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    segmentedButton?: ReactElement<KitButtonProps>;
    primaryInput?: ReactElement<KitInputProps>;
    secondaryInput?: ReactElement<KitInputProps>;
    onCloseClick?: Function;
}

interface KitItemMenuAction {
    icon: ReactNode;
    isActive?: boolean;
    label: string;
    onClick: MenuClickEventHandler;
}

export interface KitItemMenuActions extends Array<KitItemMenuAction> {}

export type KitItemMenuType = "default" | "cta" | "ctaDanger";

export interface KitItemMenuProps extends HTMLAttributes<HTMLDivElement> {
    type?: KitItemMenuType;
    title?: string;
    icon?: ReactNode;
    value?: string;
    actions?: KitItemMenuActions;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    onRafterClick?: Function;
    isSelected?: boolean;
    onClick?: Function;
}
