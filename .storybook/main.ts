import type {StorybookConfig} from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import {mergeConfig} from 'vite';
import turbosnap from 'vite-plugin-turbosnap';

const config: StorybookConfig = {
    stories: ['../stories/Root/Introduction.mdx', '../stories/!(template)/**/*.mdx', '../stories/!(template)/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        },
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-pseudo-states'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    core: {
        enableCrashReports: false,
        disableTelemetry: true
    },
    staticDirs: [{from: '../public', to: '/public'}],
    docs: {
        autodocs: true,
        docsMode: true
    },
    async viteFinal(config, {configType}) {
        return mergeConfig(config, {
            plugins:
                configType === 'PRODUCTION'
                    ? [
                          turbosnap({
                              // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                              rootDir: config.root ?? process.cwd()
                          })
                      ]
                    : []
        });
    }
};
export default config;
