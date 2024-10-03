import pkg from '../../package.json';

const cleanSource = (src: string) => {
    var regexp = /['"]@kit.*['"]/g;
    const cleaned = src.replace(regexp, `'${pkg.name}'`);
    return cleaned;
};

export default cleanSource;
