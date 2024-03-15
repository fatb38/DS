import {UserConfig, defineConfig} from 'vite';
import path from 'path';
import {fileURLToPath} from 'node:url';
import glob from 'glob';
import {libInjectCss} from 'vite-plugin-lib-inject-css';

import config, {globals} from './vite.common';

const input = 'src/index.ts';

const inputs = Object.fromEntries(
    glob
        .sync('src/**/*index.{ts,tsx}', {ignore: 'src/**/*.d.ts'})
        .map(file => [
            path.relative('src', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url))
        ])
);

const esConfig: UserConfig = {
    ...config,
    plugins: [...config.plugins, libInjectCss()]
};
//@ts-ignore
esConfig.build.rollupOptions.input = inputs;
//@ts-ignore
esConfig.build.rollupOptions.output = {
    format: 'es',
    interop: 'compat',
    hoistTransitiveImports: false,
    globals,
    chunkFileNames: 'chunks/[name].[hash].js',
    assetFileNames: 'assets/[name][extname]',
    entryFileNames: file => {
        const relPath = path.relative('src', file.facadeModuleId as string);
        if (`src/${relPath}` === input) {
            return 'index.es.js';
        }
        return `${file.name}.js`;
    }
};

// https://vitejs.dev/config/
export default defineConfig(esConfig);
