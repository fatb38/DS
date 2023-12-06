import {IKitThemeGeneral} from '@theme/types';
import {IKitImageCssTokens, IKitImageTheme} from '@theme/types/components/DataDisplay/Image';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const getKitImageTokens = (generalTokens: IKitThemeGeneral): IKitImageTheme => {
    const {colors, border} = generalTokens;

    return {
        colors: {
            border: {
                none: 'none',
                default: colors.neutral.black60
            }
        },
        border: {
            radius: {
                default: border.radius.square,
                rounded: border.radius.s
            }
        }
    };
};

export const kitImageCssTokens = generateCssTokens<IKitImageCssTokens>('--components-Image', {
    border: {radius: {default: '', rounded: ''}},
    colors: {border: {default: '', none: ''}}
});
