import {IKitCardCssTokens} from '@theme/types/components/DataDisplay/Card';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const kitCardCssTokens = generateCssTokens<IKitCardCssTokens>(
  '--components-Card',
  {
    colors: {
        actions: {default: '', disabled: '', hover: ''},
        background: {default: '', disabled: ''},
        border: {default: '', disabled: '', focus: '', hover: ''},
        separator: {default: ''},
        shadow: {default: '', disabled: '', focus: '', hover: ''},
        typography: {
            contentTitle: {default: '', disabled: ''},
            description: {default: '', disabled: ''},
            extra: {default: '', disabled: '', hover: ''},
            headerTitle: {default: '', disabled: ''}
        }
    },
    typography: {
        contentTitle: {fontSize: '', fontWeight: ''},
        description: {fontSize: '', fontWeight: ''},
        fontFamily: '',
        headerTitle: {fontSize: '', fontWeight: ''},
        linkIcon: {fontSize: ''}
    }
});
