import react from '@vitejs/plugin-react';
import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import {webpackStats} from 'rollup-plugin-webpack-stats';
import {uglify} from 'rollup-plugin-uglify';
import {visualizer} from 'rollup-plugin-visualizer';

import packageJson from './package.json';

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
        copyDtsFiles: true
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
            '@translation': path.resolve(__dirname, './src/translation')
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'design-system',
            formats: ['es', 'umd'],
            fileName: format => {
                if (format === 'es') return `index.es.js`;
                else return `index.js`;
            }
        },
        //minify: 'terser',
        rollupOptions: {
            external: getExclusions(),
            output: {
                globals: {
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
                },
                interop: 'compat'
                // preserveModules: true,
                // preserveModulesRoot: "src",
                // inlineDynamicImports: false,
                // entryFileNames: ({ name: fileName }) => {
                //     return `${fileName}.js`;
                // },
            }
        }
    }
});
