export const convertToPixel = (cssToken: string, cssTokenFallback?: string | number): string => {
    const formattedFallback = typeof cssTokenFallback === 'string' ? `var(${cssTokenFallback})` : cssTokenFallback;

    return `calc(var(${cssToken}${cssTokenFallback != null ? `, ${formattedFallback}` : ''}) * 1px)`;
};
