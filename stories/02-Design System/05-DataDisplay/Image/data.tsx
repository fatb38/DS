import React from 'react';
import {KitImage} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

export const argTypes = {
    rounded: {
        name: 'rounded',
        control: {
            type: 'boolean'
        },
        description: 'Add a border radius to the image',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    bordered: {
        name: 'bordered',
        control: {
            type: 'boolean'
        },
        description: 'Add a border around the image',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    alt: {
        name: 'alt',
        control: {
            type: 'text'
        },
        description: 'Image description',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    fallback: {
        name: 'fallback',
        control: {
            type: 'text'
        },
        description: 'Load failure fault-tolerant src',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    placeholder: {
        name: 'placeholder',
        control: {
            type: 'boolean'
        },
        description: 'Load placeholder, use default placeholder when set `true`',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    src: {
        name: 'src',
        control: {
            type: 'text'
        },
        description: 'Image path',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    width: {
        name: 'width',
        control: {
            type: 'text'
        },
        description: 'Image width',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    height: {
        name: 'height',
        control: {
            type: 'text'
        },
        description: 'Image height',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    preview: {
        name: 'preview',
        control: {
            type: 'boolean'
        },
        description: 'preview config, disabled when `false`',
        table: {
            type: {
                summary: 'boolean | [previewType]'
            },
            defaultValue: {summary: 'true'},
            category: 'Image'
        },
        defaultValue: 'true'
    },
    rootClassName: {
        name: 'rootClassName',
        control: {
            type: 'text'
        },
        description: 'add custom className for image root DOM and preview mode root DOM',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        },
        defaultValue: '-'
    },
    onError: {
        name: 'onError',
        description: '',
        table: {
            type: {
                summary: "'(event: Event) => void'"
            },
            defaultValue: {summary: '-'},
            category: 'Image'
        }
    }
};

export const Template = (args) => {
    return (
        <KitSpace>
            <KitImage {...args} />
        </KitSpace>
    );
};
