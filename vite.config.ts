import react from '@vitejs/plugin-react';
import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import {webpackStats} from 'rollup-plugin-webpack-stats';
import {uglify} from 'rollup-plugin-uglify';
import {visualizer} from 'rollup-plugin-visualizer';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import url from 'rollup-plugin-url';

import packageJson from './package.json';

const outputDir = './dist/';
const input = 'src/index.ts';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    'react/jsx-runtime': 'react/jsx-runtime',
    antd: 'antd',
    'react-hot-toast': 'toast',
    lodash: 'lodash',
    'color-convert': 'convert',
    'color-string': 'colorString',
    'antd/lib/notification': 'notification',
    '@fortawesome/react-fontawesome': 'reactFontawesome',
    '@fortawesome/free-solid-svg-icons': 'freeSolidSvgIcons',
    '@fortawesome/free-regular-svg-icons': 'freeRegularSvgIcons',
    'antd/locale/en_US': 'enUS1',
    'antd/locale/fr_FR': 'frFR1',
    'antd/lib/typography/Base': 'Base',
    classnames: 'cn',
    'rc-util/lib/omit': 'omit',
    'antd/lib/config-provider/': '_',
    'antd/lib/checkbox/style': 'useStyle',
    'rc-util/lib/hooks/useMergedState': 'useMergedState',
    'antd/lib/config-provider/SizeContext': 'SizeContext',
    'rc-util/lib/pickAttrs': 'pickAttrs',
    'antd/lib/radio/style': 'useStyle1',
    'use-debounce': 'useDebounce',
    'short-unique-id': 'ShortUniqueId',
    'react-modal': 'ReactModal',
    'react-dom/client': 'client',
    'antd/lib/locale': 'locale',
    'react-uuid': 'uuid'
};

const getExclusions = () => {
    return [
        /node_modules/,
        ...Object.keys(packageJson.dependencies),
        ...Object.keys(packageJson.devDependencies),
        'react/jsx-runtime',
        /lodash/,
        /rc-util/,
        /antd/,
        /react-dom/,
        /@ant-design/
    ];
};

const plugins = [
    react({
        jsxRuntime: 'classic'
    }),
    dts({
        insertTypesEntry: true,
        exclude: ['stories', 'package.json'],
        copyDtsFiles: true,
        outDir: outputDir
    }),
    uglify()
];

if (process.env.STATS) {
    plugins.push(webpackStats());
    plugins.push(visualizer());
}

export default defineConfig({
    publicDir: false,
    plugins: plugins,
    resolve: {
        alias: {
            '@kit': path.resolve(__dirname, './src/Kit'),
            '@theme': path.resolve(__dirname, './src/theme'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@translation': path.resolve(__dirname, './src/translation'),
            '@fonts': path.resolve(__dirname, './src/fonts')
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'design-system'
        },
        //minify: 'terser',
        rollupOptions: {
            external: getExclusions(),
            input: 'src/index.ts',
            plugins: [
                commonjs(),
                typescript({outDir: outputDir, exclude: ['stories/**']}),
                resolve(),
                multiInput(),
                url({
                    // by default, rollup-plugin-url will not handle font files
                    include: ['**/*.woff', '**/*.woff2'],
                    // setting infinite limit will ensure that the files
                    // are always bundled with the code, not copied to /dist
                    limit: Infinity
                })
            ],
            output: [
                {
                    format: 'umd',
                    name: 'design-system',
                    inlineDynamicImports: true,
                    preserveModules: false,
                    interop: 'compat',
                    plugins: [],
                    globals,
                    entryFileNames: () => {
                        return `index.umd.js`;
                    }
                },
                {
                    format: 'esm',
                    dir: outputDir,
                    preserveModules: true,
                    interop: 'compat',
                    globals,
                    inlineDynamicImports: false,
                    entryFileNames: file => {
                        const relative = path.relative('src', file.facadeModuleId);
                        if (`src/${relative}` === input) {
                            return 'index.es.js';
                        }
                        return `${file.name}.js`;
                    }
                }
            ]
        }
    }
});
