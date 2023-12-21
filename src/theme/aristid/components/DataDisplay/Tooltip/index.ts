import {IKitTooltipCssTokens} from '@theme/types/components/DataDisplay/Tooltip';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitTooltipCssToken = generateCssTokens<IKitTooltipCssTokens>('--components-Tooltip', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            default: ''
        }
    },
    border: {
        radius: ''
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    }
});
