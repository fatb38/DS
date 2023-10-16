import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitDatePickerTheme} from '@theme/types/components/DataEntry/DatePicker';

export const mapDatePickerKitTokenToAntdToken = (kitDatePickerTheme: IKitDatePickerTheme) => {
    const {colors, typography, border} = kitDatePickerTheme;

    return {
        colorBgContainer: colors.background.default,
        colorBgContainerDisabled: colors.background.disabled,
        colorBorder: colors.border.default,
        colorPrimary: colors.border.active,
        colorPrimaryHover: colors.border.hover,
        colorLink: colors.link.default,
        colorLinkHover: colors.link.hover,
        controlItemBgHover: colors.item.hover,
        controlItemBgActive: colors.item.active,
        colorTextPlaceholder: colors.typography.placeholder.default,
        colorText: colors.typography.content.default,
        borderRadius: border.radius,
        borderRadiusSM: KitAristidThemeGeneral.border.radius.xxs,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize
    };
};
