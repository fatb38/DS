import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {kitDatePickerCssTokens} from '@theme/aristid/components/DataEntry/DatePicker';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitDatePickerTheme} from '@theme/types/components/DataEntry/DatePicker';

export const datePickerKitTokenToAntdToken = (kitDatePickerTheme: IKitDatePickerTheme) => ({
    colorBgContainer: `var(${kitDatePickerCssTokens.colors.background.default}, var(${kitColorsPaletteCssTokens.neutral.white}))`,
    colorBgContainerDisabled: `var(${kitDatePickerCssTokens.colors.background.disabled}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100}))`,
    colorBorder: `var(${kitDatePickerCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    colorPrimary: `var(${kitDatePickerCssTokens.colors.border.active}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorPrimaryHover: `var(${kitDatePickerCssTokens.colors.border.hover}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorLink: `var(${kitDatePickerCssTokens.colors.link.default}, var(${kitColorsPaletteCssTokens.primary.primary400}))`,
    colorLinkHover: `var(${kitDatePickerCssTokens.colors.link.hover}, var(${kitColorsPaletteCssTokens.primary.primary500}))`,
    controlItemBgHover: `var(${kitDatePickerCssTokens.colors.item.hover}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200}))`,
    controlItemBgActive: `var(${kitDatePickerCssTokens.colors.item.active}, var(${kitColorsPaletteCssTokens.primary.primary100}))`,
    colorTextPlaceholder: `var(${kitDatePickerCssTokens.colors.typography.placeholder.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}))`,
    colorText: `var(${kitDatePickerCssTokens.colors.typography.content.default}, var(${kitColorsPaletteCssTokens.primary.primary300}))`,
    borderRadius: kitDatePickerTheme.border.radius,
    borderRadiusSM: KitAristidThemeGeneral.border.radius.xxs,
    fontFamily: `var(${kitDatePickerCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}))`,
    fontSize: kitDatePickerTheme.typography.fontSize
});
