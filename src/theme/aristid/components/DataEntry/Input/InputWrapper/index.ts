import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {KitInputWrapperThemeStyled} from '@theme/types/components/DataEntry/Input/InputWrapper';

const {colors, spacing} = KitAristidThemeGeneral;

const kitInputWrapperStyled: KitInputWrapperThemeStyled = {
    colors: {
        typography: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            disabled: colors.secondary.mediumGrey.mediumGrey400,
            warning: colors.secondary.orange.orange400,
            error: colors.secondary.red.red400
        }
    },
    gap: {
        label: spacing.xs,
        helper: spacing.xs
    }
};

export const KitInputWrapperTheme = {
    ...kitInputWrapperStyled
};
