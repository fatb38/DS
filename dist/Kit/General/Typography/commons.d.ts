import { TitleLevel, TypographyWeight, TypographyWeightKeys } from './types';
export declare const sizeTofontSize: {
    large: number;
    medium: number;
    small: number;
};
export declare const getWeightClassname: ({ className, weight }: {
    className?: string | undefined;
    weight?: TypographyWeightKeys | undefined;
}) => string;
export declare const TYPOGRAPHY_WEIGHT: TypographyWeight;
export declare const TITLE_LEVEL: TitleLevel;
