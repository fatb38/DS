import {kitDatePickerCssTokens} from '@theme/aristid/components/DataEntry/DatePicker';
import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const datePickerKitTokenToAntdToken = {
    colorBgContainer: `var(${kitDatePickerCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`,
    colorBgContainerDisabled: `var(${kitDatePickerCssTokens.colors.background.disabled}, var(${utilitiesCssTokens.neutral.neutralLight}))`,
    colorBorder: `var(${kitDatePickerCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimary: `var(${kitDatePickerCssTokens.colors.border.active}, var(${utilitiesCssTokens.main.mainColor}))`,
    colorPrimaryHover: `var(${kitDatePickerCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.mainColor}))`,
    colorLink: `var(${kitDatePickerCssTokens.colors.link.default}, var(${utilitiesCssTokens.main.mainColor}))`,
    colorLinkHover: `var(${kitDatePickerCssTokens.colors.link.hover}, var(${utilitiesCssTokens.main.mainDark}))`,
    controlItemBgHover: `var(${kitDatePickerCssTokens.colors.item.hover}, var(${utilitiesCssTokens.neutral.neutralMedium}))`,
    controlItemBgActive: `var(${kitDatePickerCssTokens.colors.item.active}, var(${utilitiesCssTokens.main.mainLight}))`,
    colorTextPlaceholder: `var(${kitDatePickerCssTokens.colors.typography.placeholder.default}, var(${utilitiesCssTokens.text.textDisabled}))`,
    colorText: `var(${kitDatePickerCssTokens.colors.typography.content.default}, var(${utilitiesCssTokens.text.textPrimary}))`,
    borderRadiusSM: KitAristidThemeGeneral.border.radius.xxs,
    fontFamily: `var(${kitDatePickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
