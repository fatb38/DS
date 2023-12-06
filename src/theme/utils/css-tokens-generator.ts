export function generateCssTokens<T extends Object>(prefix: string, object: T, parentKey: string = '') {
    return Object.keys(object).reduce((acc, key) => {
        const path = parentKey ? `${parentKey}-${key}` : key;
        if (typeof object[key] === 'object' && object[key] !== null) {
            acc[key] = generateCssTokens(prefix, object[key], path);
        } else {
            acc[key] = `${prefix}-${path}`;
        }
        return acc;
    }, {}) as T;
}
