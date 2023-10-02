import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitPaginationTheme} from '@theme/types/components/Navigation/Pagination';

export const mapPaginationKitTokenToAntdToken = (kitPaginationTheme: IKitPaginationTheme) => {
    const {typography, colors} = kitPaginationTheme;

    return {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontSizeSM: KitAristidThemeGeneral.typography.fontSize5,
        colorBgContainer: colors.background.container.default,
        colorBgContainerDisabled: colors.background.container.disabled,
        fontWeightStrong: KitAristidThemeGeneral.typography.mediumfontWeight as number,
        controlHeight: 32,
        controlHeightSM: 24,
        colorPrimary: KitAristidThemeGeneral.colors.primary.blue400,
        colorPrimaryBorder: KitAristidThemeGeneral.colors.primary.blue400,
        colorPrimaryHover: KitAristidThemeGeneral.colors.primary.blue400,
        colorBgTextActive: KitAristidThemeGeneral.colors.neutral.typography.black60,
        colorTextDisabled: KitAristidThemeGeneral.colors.neutral.typography.black60
    };
};
