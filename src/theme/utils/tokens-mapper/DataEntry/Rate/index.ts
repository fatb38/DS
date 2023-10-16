import {IKitRateTheme} from '@theme/types/components/DataEntry/Rate';

export const mapRateKitTokenToAntdToken = (kitRateTheme: IKitRateTheme) => {
    const {colors} = kitRateTheme;

    return {
        starColor: colors.star.active.default
    };
};
