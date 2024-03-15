import {Meta} from '@storybook/react';
import {KitHeader} from '@kit/Navigation';
import {toggleOptions, logoOptions} from './commons';

export const argTypes: Meta<typeof KitHeader>['argTypes'] = {
    menu: {
        name: 'menu',
        description: 'Menu content',
        control: {type: 'boolean'},
        options: toggleOptions,
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Header'
        }
    },
    logo: {
        name: 'logo',
        description: 'Logo',
        control: {type: 'select', defaultValue: logoOptions.Omnipublish},
        options: logoOptions,
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Header'
        }
    },
    profile: {
        name: 'profile',
        description: 'User profile',
        control: {type: 'boolean'},
        options: toggleOptions,
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Header'
        }
    },
    langSwitcher: {
        name: 'langSwitcher',
        description: 'Lang switcher',
        control: {type: 'boolean'},
        options: toggleOptions,
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Header'
        }
    },
    children: {
        name: 'children',
        description: 'Header content',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Header'
        }
    }
};
