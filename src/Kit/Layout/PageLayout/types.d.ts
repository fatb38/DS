import {IKitHeader} from '@kit/Navigation/Header/types';
import {IKitSideMenu} from '@kit/Navigation/SideMenu/types';

interface IKitPageLayout {
    headerProps: IKitHeader;
    sideMenuProps?: IKitSideMenu;
    backgroundColor?: string;
}
