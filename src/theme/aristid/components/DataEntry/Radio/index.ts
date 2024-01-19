import {IKitRadioCssTokens} from '@theme/types/components/DataEntry/Radio';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitRadioCssTokens = generateCssTokens<IKitRadioCssTokens>('--components-Radio', {
    colors: {
        background: {checked: '', danger: {default: '', hover: ''}, default: '', disabled: '', hover: ''},
        border: {
            checked: '',
            danger: {default: '', hover: '', focus: ''},
            default: '',
            disabled: '',
            hover: '',
            focus: ''
        },
        bullet: {danger: {default: '', hover: ''}, default: '', disabled: '', hover: ''},
        typography: {danger: {disabled: ''}, disabled: ''}
    },
    typography: {fontFamily: '', fontSize: '', fontWeight: '', lineHeight: ''}
});
