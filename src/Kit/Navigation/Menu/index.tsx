import InternalMenu from "./Menu";
import InternalItemMenu from "./ItemMenu";
import { KitItemMenuProps, KitMenuProps } from "./types";

type CompoundedComponent = React.FunctionComponent<KitMenuProps> & {
    Item: React.FunctionComponent<KitItemMenuProps>;
};

export const KitMenu = (InternalMenu as unknown) as CompoundedComponent;
KitMenu.displayName = "KitMenu";
KitMenu.Item = InternalItemMenu;
