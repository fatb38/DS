import pkg from '../../package.json';

const replaceAll = (str: string, search: string, replacement: string) => {
    return str.split(search).join(replacement);
};

const cleanSource = (src: string) => {
    var regexp = /'@kit.*'/g;
    const cleaned = src.replace(regexp, `'${pkg.name}'`);
    return cleaned;
}

export default cleanSource;