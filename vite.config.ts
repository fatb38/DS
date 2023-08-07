import react from '@vitejs/plugin-react';
import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import {webpackStats} from 'rollup-plugin-webpack-stats';
import {uglify} from 'rollup-plugin-uglify';

// import packageJson from './package.json';

// const getExclusions = () => {
//     return [
//         ...Object.keys(packageJson.dependencies),
//         ...Object.keys(packageJson.devDependencies),
//         'react/jsx-runtime'
//     ]
// };

export default defineConfig({
    publicDir: false,
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        dts({
            insertTypesEntry: true
        }),
        uglify(),
        webpackStats()
    ],
    resolve: {
        alias: {
            '@kit': path.resolve(__dirname, './src/Kit'),
            '@theme': path.resolve(__dirname, './src/theme'),
            '@icons': path.resolve(__dirname, './src/icons')
        }
    },
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'design-system',
            formats: ['es', 'umd'],
            fileName: format => `design-system.${format}.js`
        },
        rollupOptions: {
            external: [
                /node_modules/,
                'react/jsx-runtime',
                'antd',
                'react',
                'react-dom',
                'styled-components',
                'react-hot-toast',
                'react-modal',
                'react-uuid',
                'remark-gfm',
                'react-jsx-runtime'
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                    'react/jsx-runtime': 'react/jsx-runtime'
                }
            }
        }
    }
});
