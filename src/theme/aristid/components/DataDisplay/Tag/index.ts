import {IKitTagCssTokens} from '@theme/types/components/DataDisplay/Tag';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitTagCssTokens = generateCssTokens<IKitTagCssTokens>('--components-Tag', {
    border: {radius: ''},
    colors: {default: {background: {default: ''}, typography: {default: ''}}},
    typography: {fontFamily: '', fontSize: '', fontWeight: ''}
});
