import {IKitDatePickerCssTokens} from '@theme/types/components/DataEntry/DatePicker';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitDatePickerCssTokens = generateCssTokens<IKitDatePickerCssTokens>('--components-DatePicker', {
    colors: {
        icon: {
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
        background: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        },
        border: {
            default: '',
            hover: '',
            focus: {
                default: '',
                warning: '',
                error: ''
            },
            active: '',
            disabled: '',
            warning: '',
            error: ''
        },
        link: {
            default: '',
            hover: ''
        },
        item: {
            hover: '',
            active: ''
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
        }
    },
    typography: {
        fontFamily: '',
        fontSize: '',
        fontWeight: {
            content: '',
            placeholder: ''
        }
    },
    border: {
        radius: ''
    },
    RangePicker: {
        colors: {
            separator: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            icon: {
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
            background: {
                warning: '',
                error: ''
            },
            border: {
                disabled: '',
                warning: '',
                error: ''
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
            fontFamily: '',
            fontWeight: {
                content: '',
                placeholder: ''
            }
        }
    },
    DropDown: {
        colors: {
            button: {
                now: {
                    typography: {
                        default: '',
                        hover: ''
                    }
                },
                ok: {
                    background: {
                        default: '',
                        hover: '',
                        active: '',
                        disabled: ''
                    },
                    border: {
                        default: '',
                        hover: '',
                        active: '',
                        disabled: ''
                    },
                    typography: {
                        default: '',
                        disabled: ''
                    }
                }
            }
        }
    }
});
