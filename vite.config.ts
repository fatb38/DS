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
            '@icons': path.resolve(__dirname, './src/icons')
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
                    'react/jsx-runtime': 'react/jsx-runtime'
                }
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
