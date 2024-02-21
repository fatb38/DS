import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {IKitButtonCssTokens} from '@theme/types/components/General/Button';

export const kitButtonDefaultCssTokens: IKitButtonCssTokens = {
    typography: {
        fontFamily: typographyCssTokens.fontFamily,
        fontSize: typographyCssTokens.fontSize5,
        lineHeight: typographyCssTokens.lineHeight5,
        iconSize: {
            xs: typographyCssTokens.fontSize7,
            s: typographyCssTokens.fontSize6,
            m: typographyCssTokens.fontSize5,
            l: typographyCssTokens.fontSize4,
            xl: typographyCssTokens.fontSize3
        }
    },
    border: {
        radius: {
            default: borderCssTokens.radius.pills,
            compact: '10px'
        }
    }
};
