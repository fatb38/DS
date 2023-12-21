import {IKitCollapseCssTokens} from '@theme/types/components/DataDisplay/Collapse';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitCollapseCssTokens = generateCssTokens<IKitCollapseCssTokens>('--components-Collapse', {
    border: {radius: ''},
    colors: {background: {active: '', default: ''}, border: {active: '', default: ''}}
});
