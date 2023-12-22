export function generateCssTokens<T>(prefix: string, object: Partial<T>, parentKey: string = '') {
    return Object.keys(object || []).reduce((acc, key) => {
        const path = parentKey ? `${parentKey}-${key}` : key;
        if (object && typeof object[key] === 'object' && object[key] !== null) {
            acc[key] = generateCssTokens(prefix, object[key] as unknown as Partial<T>, path);
        } else {
            acc[key] = `${prefix}-${path}`;
        }
        return acc;
    }, {}) as T;
}
