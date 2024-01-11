export const convertToPixel = (cssToken: string, cssTokenFallback?: string): string =>
    `calc(var(${cssToken}${cssTokenFallback != null ? `, var(${cssTokenFallback})` : ''}) * 1px)`;
