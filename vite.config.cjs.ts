import {LibraryOptions, defineConfig} from 'vite';
import replace from '@rollup/plugin-replace';

import config, {globals} from './vite.common';

const cjsConfig = {
    ...config
};
(cjsConfig.build.lib as LibraryOptions).formats = ['umd'];
(cjsConfig.build.lib as LibraryOptions).name = 'aristid-ds';
cjsConfig.build.rollupOptions.output = {
    format: 'umd',
    name: 'design-system',
    inlineDynamicImports: true,
    preserveModules: false,
    interop: 'compat',
    plugins: [
        replace({
            '/es/': '/lib/'
        })
    ],
    globals,
    entryFileNames: () => {
        return `index.umd.js`;
    }
};

export default defineConfig(cjsConfig);
