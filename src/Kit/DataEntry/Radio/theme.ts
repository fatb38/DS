import theme from '@theme/index';
import {KitRadioTheme} from './types';

const primaryTheme: KitRadioTheme = {
    fontWeight: {
        default: theme.typography.mediumfontWeight,
        checked: theme.typography.boldFontWeight
    },
    borderWidth: '1px',
    color: {
        default: theme.color.neutral.typography.black,
        enabled: theme.color.neutral.typography.black,
        disabled: theme.color.secondary.mediumGrey.mediumGrey400,
        danger: {
            default: theme.color.neutral.typography.black,
            disabled: theme.color.secondary.red.red200
        }
    },
    backgroundColor: {
        default: theme.color.neutral.typography.white,
        checked: theme.color.neutral.typography.white,
        hover: theme.color.neutral.typography.white,
        disabled: theme.color.secondary.mediumGrey.mediumGrey100,
        danger: {
            default: theme.color.secondary.red.red200,
            hover: theme.color.secondary.red.red200,
            disabled: theme.color.secondary.red.red400
        }
    },
    borderColor: {
        default: theme.color.neutral.typography.black60,
        checked: theme.color.primary.blue400,
        hover: theme.color.primary.blue500,
        disabled: theme.color.secondary.mediumGrey.mediumGrey200,
        danger: {
            default: theme.color.secondary.red.red400,
            hover: theme.color.secondary.red.red500,
            disabled: theme.color.secondary.red.red200
        }
    },
    bulletColor: {
        default: theme.color.primary.blue400,
        hover: theme.color.primary.blue500,
        disabled: theme.color.secondary.mediumGrey.mediumGrey200,
        danger: {
            default: theme.color.secondary.red.red400,
            hover: theme.color.secondary.red.red500,
            disabled: theme.color.secondary.red.red400
        }
    }
};

export default primaryTheme;
