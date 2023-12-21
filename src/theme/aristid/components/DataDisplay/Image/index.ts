import {IKitImageCssTokens} from '@theme/types/components/DataDisplay/Image';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitImageCssTokens = generateCssTokens<IKitImageCssTokens>('--components-Image', {
    border: {radius: {default: '', rounded: ''}},
    colors: {border: {default: '', none: ''}}
});
