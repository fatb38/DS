import {
    IKitSelectColorBadgeCssTokens,
    IKitSelectCssTokens,
    IKitSelectDropDownCssTokens
} from '@theme/types/components/DataEntry/Select';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitSelectCssTokens = generateCssTokens<IKitSelectCssTokens>('--components-Select', {
    height: '',
    border: {
        radius: ''
    },
    colors: {
        border: {
            hover: '',
            focused: '',
            disabled: '',
            warning: '',
            error: ''
        },
        typography: {
            content: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            placeholder: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            }
        },
        icon: {
            arrow: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            clear: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            }
        },
        background: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: '',
        fontWeight: {
            content: '',
            placeholder: ''
        }
    }
});

export const kitSelectColorBadgeCssTokens = generateCssTokens<IKitSelectColorBadgeCssTokens>(
    '--components-Select-ColorBadge',
    {
        height: '',
        width: '',
        border: {
            radius: ''
        }
    }
);

export const kitSelectDropDownCssTokens = generateCssTokens<IKitSelectDropDownCssTokens>(
    '--components-Select-DropDown',
    {
        colors: {
            typography: {
                default: '',
                selected: '',
                active: '',
                group: ''
            },
            background: {
                default: '',
                selected: '',
                active: ''
            }
        },
        typography: {
            fontFamily: '',
            fontWeight: {
                default: '',
                selected: '',
                active: '',
                group: ''
            }
        },
        border: {
            radius: ''
        }
    }
);
