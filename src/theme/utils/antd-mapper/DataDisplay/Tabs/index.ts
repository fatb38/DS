import {IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';

export const mapTabsKitTokenToAntdToken = (kitTabsTheme: IKitTabsTheme) => {
    const {card, typography} = kitTabsTheme;

    return {
        fontFamily: typography.fontFamily,
        titleFontSizeSM: typography.fontSize.s,
        titleFontSize: typography.fontSize.m,
        titleFontSizeLG: typography.fontSize.l,
        cardBg: card.colors.background.default,
        colorBorderSecondary: card.colors.border.default,
        inkBarColor: card.colors.border.active,
        cardPadding: card.padding,
        cardPaddingLG: card.padding,
        cardPaddingSM: card.padding,
        borderRadius: card.border.radius,
        colorTextDisabled: typography.colors.disabled,
        itemActiveColor: typography.colors.active,
        itemHoverColor: typography.colors.hover,
        itemSelectedColor: typography.colors.selected
    };
};
