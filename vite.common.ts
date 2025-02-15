import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from 'rollup-plugin-url';
import {UserConfig} from 'vite';

import packageJson from './package.json';

const outputDir = './dist/';
const input = 'src/index.ts';

export const globals = {
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
        'antd',
        'react',
        'react/jsx-runtime',
        /lodash/,
        /rc-util/,
        /antd/,
        /react-dom/,
        /@ant-design/
    ];
};

const plugins = [react(), dts({include: ['src'], copyDtsFiles: true})];

const config: UserConfig = {
    publicDir: false,
    plugins,
    css: {
        modules: {
            scopeBehaviour: 'global'
        }
    },
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
        copyPublicDir: false,
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'index.es.js'
        },
        rollupOptions: {
            external: getExclusions(),
            input,
            plugins: [
                commonjs(),
                typescript({outDir: outputDir, exclude: ['stories/**']}),
                resolve(),
                url({
                    // by default, rollup-plugin-url will not handle font files
                    include: ['**/*.woff', '**/*.woff2'],
                    // setting infinite limit will ensure that the files
                    // are always bundled with the code, not copied to /dist
                    limit: Infinity
                })
            ],
            output: {
                interop: 'compat',
                hoistTransitiveImports: false,
                globals,
                chunkFileNames: 'chunks/[name].[hash].js',
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: file => {
                    const relPath = path.relative('src', file.facadeModuleId as string);
                    console.log(file.name, relPath);
                    if (`src/${relPath}` === input) {
                        return 'index.es.js';
                    }
                    return `${file.name}.js`;
                }
            }
        }
    }
};

export default config;
