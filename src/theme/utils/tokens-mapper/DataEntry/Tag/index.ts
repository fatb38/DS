import { kitTagCssTokens } from "@theme/aristid/components/DataDisplay/Tag";
import { kitColorsPaletteCssTokens } from "@theme/aristid/general/colors";
import { borderCssTokens } from "@theme/aristid/general/border";

export const tagKitTokenToAntdToken = {
        defaultBg: `var(${kitTagCssTokens.colors.default.background.default}, var(${kitColorsPaletteCssTokens.primary.primary100}))`,
        defaultColor: `var(${kitTagCssTokens.colors.default.typography.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`,
        borderRadiusSM: `calc(var(${kitTagCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)` as unknown as number
};
