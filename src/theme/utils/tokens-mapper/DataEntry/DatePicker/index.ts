import {kitDatePickerCssTokens} from '@theme/aristid/components/DataEntry/DatePicker';
import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {utilitiesCssTokens} from '@theme/aristid/general/utilities';

export const datePickerKitTokenToAntdToken = {
    colorBgContainer: `var(${kitDatePickerCssTokens.colors.background.default}, var(${utilitiesCssTokens.light}))`,
    colorBgContainerDisabled: `var(${kitDatePickerCssTokens.colors.background.disabled}, var(${utilitiesCssTokens.neutral.light}))`,
    colorBorder: `var(${kitDatePickerCssTokens.colors.border.default}, var(${utilitiesCssTokens.border}))`,
    colorPrimary: `var(${kitDatePickerCssTokens.colors.border.active}, var(${utilitiesCssTokens.main.default}))`,
    colorPrimaryHover: `var(${kitDatePickerCssTokens.colors.border.hover}, var(${utilitiesCssTokens.main.default}))`,
    colorLink: `var(${kitDatePickerCssTokens.colors.link.default}, var(${utilitiesCssTokens.main.default}))`,
    colorLinkHover: `var(${kitDatePickerCssTokens.colors.link.hover}, var(${utilitiesCssTokens.main.dark}))`,
    controlItemBgHover: `var(${kitDatePickerCssTokens.colors.item.hover}, var(${utilitiesCssTokens.neutral.medium}))`,
    controlItemBgActive: `var(${kitDatePickerCssTokens.colors.item.active}, var(${utilitiesCssTokens.main.light}))`,
    colorTextPlaceholder: `var(${kitDatePickerCssTokens.colors.typography.placeholder.default}, var(${utilitiesCssTokens.text.disabled}))`,
    colorText: `var(${kitDatePickerCssTokens.colors.typography.content.default}, var(${utilitiesCssTokens.text.primary}))`,
    borderRadiusSM: KitAristidThemeGeneral.border.radius.xxs,
    fontFamily: `var(${kitDatePickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`
};
