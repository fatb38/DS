import {IKitTypographyCssTokens} from '@theme/types/components/General/Typography';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitTypographyCssTokens = generateCssTokens<IKitTypographyCssTokens>('--components-Typography', {
    colors: {
        typography: {
            default: ''
        }
    },
    typography: {
        fontFamily: '',
        fontWeight: '',
        lineHeight: ''
    },
    Title: {
        level1: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        },
        level2: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        },
        level3: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        },
        level4: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        }
    },
    Text: {
        fontWeight: {
            regular: '',
            medium: '',
            bold: ''
        }
    },
    Paragraph: {
        fontWeight: {
            regular: '',
            medium: '',
            bold: ''
        }
    },
    Link: {
        colors: {
            typography: {
                default: '',
                hover: ''
            }
        },
        fontWeight: {
            regular: '',
            medium: '',
            bold: ''
        }
    }
});
