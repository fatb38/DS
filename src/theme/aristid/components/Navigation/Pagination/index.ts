import {IKitPaginationCssTokens} from '@theme/types/components/Navigation/Pagination';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitPaginationCssTokens = generateCssTokens<IKitPaginationCssTokens>('--components-Pagination', {
    colors: {
        background: {
            container: {
                default: '',
                disabled: ''
            }
        }
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    },
    pagination: {
        colors: {
            background: {
                default: '',
                hover: ''
            },
            typography: {
                disabledActive: ''
            }
        },
        border: {
            default: '',
            hover: ''
        }
    },
    prevNext: {
        colors: {
            background: {
                default: ''
            },
            border: {
                default: '',
                hover: ''
            },
            typography: {
                hover: ''
            }
        },
        typography: {
            fontSize: ''
        }
    },
    selector: {
        colors: {
            background: {
                default: ''
            },
            border: {
                default: ''
            }
        }
    },
    quickJumper: {
        colors: {
            border: {
                default: ''
            }
        }
    }
});
