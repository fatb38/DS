import {IKitAvatarCssTokens, IKitAvatarGroupCssTokens} from '@theme/types/components/DataDisplay/Avatar';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const kitAvatarCssTokens = generateCssTokens<IKitAvatarCssTokens>('--components-Avatar', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            default: ''
        }
    }
});

export const kitAvatarGroupCssTokens = generateCssTokens<IKitAvatarGroupCssTokens>('--components-AvatarGroup', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            default: ''
        }
    }
});
