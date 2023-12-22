import {IKitRateCssTokens} from '@theme/types/components/DataEntry/Rate';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitRateCssTokens = generateCssTokens<IKitRateCssTokens>('--components-Rate', {
    colors: {star: {default: '', disabled: ''}}
});
