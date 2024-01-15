import {
    IKitInputPasswordCssTokens,
    IKitTextAreaThemeCssTokens,
    IKitInputWrapperCssTokens,
    IKitInputCssTokens
} from '@theme/types/components/DataEntry/Input';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitInputPasswordCssTokens = generateCssTokens<IKitInputPasswordCssTokens>('--components-Input-Password', {
    colors: {
        background: {error: '', warning: ''},
        border: {
            disabled: '',
            error: '',
            warning: '',
            focus: {
                default: '',
                warning: '',
                error: ''
            }
        },
        clearIcon: {default: '', disabled: '', error: '', warning: ''},
        passwordIcon: {default: '', disabled: '', error: '', warning: ''},
        prefix: {default: '', disabled: '', error: '', warning: ''},
        showCount: {default: '', disabled: '', error: '', warning: ''},
        suffix: {default: '', disabled: '', error: '', warning: ''},
        typography: {
            content: {disabled: '', error: '', warning: ''},
            placeholder: {disabled: '', error: '', warning: ''}
        }
    },
    typography: {
        content: {fontWeight: ''},
        placeholder: {fontWeight: ''},
        showCount: {fontSize: '', fontWeight: ''}
    }
});

export const kitInputWrapperCssTokens = generateCssTokens<IKitInputWrapperCssTokens>('--components-InputWrapper', {
    colors: {
        typography: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        }
    },
    gap: {
        label: '',
        helper: ''
    }
});

export const kitTextAreaCssTokens = generateCssTokens<IKitTextAreaThemeCssTokens>('--components-Input-TextArea', {
    colors: {
        background: {
            warning: '',
            error: ''
        },
        prefix: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        suffix: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        clearIcon: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        showCount: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        border: {
            disabled: '',
            warning: '',
            error: '',
            focus: {
                default: '',
                warning: '',
                error: ''
            }
        },
        typography: {
            content: {
                disabled: '',
                warning: '',
                error: ''
            },
            placeholder: {
                disabled: '',
                warning: '',
                error: ''
            }
        }
    },
    typography: {
        content: {
            fontWeight: ''
        },
        placeholder: {
            fontWeight: ''
        },
        showCount: {
            fontSize: '',
            fontWeight: ''
        }
    }
});

export const kitInputCssTokens = generateCssTokens<IKitInputCssTokens>('--components-Input', {
    border: {radius: ''},
    colors: {
        background: {default: '', disabled: '', error: '', warning: ''},
        border: {
            default: '',
            disabled: '',
            error: '',
            hover: '',
            warning: '',
            focus: {
                default: '',
                warning: '',
                error: ''
            }
        },
        clearIcon: {default: '', disabled: '', error: '', warning: ''},
        prefix: {default: '', disabled: '', error: '', warning: ''},
        showCount: {default: '', disabled: '', error: '', warning: ''},
        suffix: {default: '', disabled: '', error: '', warning: ''},
        typography: {
            content: {default: '', disabled: '', error: '', warning: ''},
            placeholder: {default: '', disabled: '', error: '', warning: ''}
        }
    },
    typography: {
        content: {fontWeight: ''},
        fontFamily: '',
        fontSize: '',
        placeholder: {fontWeight: ''},
        showCount: {fontSize: '', fontWeight: ''}
    }
});
