import theme from '@theme/index';
import {KitSelectTheme} from './types';

const primaryTheme: KitSelectTheme = {
    borderRadius: '7px',
    optionHeight: 32,
    dropdownBgColor: theme.color.secondary.mediumGrey.mediumGrey100,
    selectedOptionBg: theme.color.primary.blue100,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.mediumfontWeight,
    groupsFontWeight: theme.typography.boldFontWeight,
    selectionFontWeight: theme.typography.boldFontWeight,
    selectionColor: theme.color.neutral.typography.black,
    selectedItemColor: theme.color.primary.blue400,
    itemsColor: theme.color.secondary.mediumGrey.mediumGrey500,
    groupsColor: theme.color.neutral.typography.black,
    disabledBgColor: theme.color.primary.blue100,
    disabledColor: theme.color.primary.blue200,
    highlightColor: theme.color.primary.blue400
};

export const headerTheme: KitSelectTheme = {
    borderRadius: '7px',
    optionHeight: 32,
    dropdownBgColor: theme.color.secondary.mediumGrey.mediumGrey100,
    selectedOptionBg: theme.color.secondary.mediumGrey.mediumGrey200,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.mediumfontWeight,
    groupsFontWeight: theme.typography.boldFontWeight,
    selectionFontWeight: theme.typography.mediumfontWeight,
    selectionColor: theme.color.secondary.mediumGrey.mediumGrey500,
    selectedItemColor: theme.color.secondary.mediumGrey.mediumGrey500,
    itemsColor: theme.color.secondary.mediumGrey.mediumGrey500,
    groupsColor: theme.color.neutral.typography.black,
    disabledBgColor: theme.color.primary.blue100,
    disabledColor: theme.color.primary.blue200,
    highlightColor: theme.color.primary.blue400
};

export default primaryTheme;
