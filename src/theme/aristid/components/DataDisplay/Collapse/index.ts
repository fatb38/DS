import {IKitThemeGeneral} from '@theme/types';
import {IKitCollapseCssTokens, IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';
import {generateCssTokens} from '@theme/utils/css-tokens-generator.ts';

export const getKitCollapseTokens = (generalTokens: IKitThemeGeneral): IKitCollapseTheme => {
    const {colors, border} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.background,
                active: colors.primary.primary100
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                active: colors.primary.primary400
            }
        },
        border: {
            radius: border.radius.s
        }
    };
};

export const kitCollapseCssTokens = generateCssTokens<IKitCollapseCssTokens>('--components-Collapse', {
    border: {radius: ''},
    colors: {background: {active: '', default: ''}, border: {active: '', default: ''}}
});
