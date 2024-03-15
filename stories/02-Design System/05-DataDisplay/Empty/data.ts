import {KitEmpty} from '@kit/DataDisplay';

const asset = [
    KitEmpty.ASSET_FOLDER,
    KitEmpty.ASSET_LIST,
    KitEmpty.ASSET_MODAL,
    KitEmpty.ASSET_PAGE,
    KitEmpty.ASSET_RESULT
];

const TemplateArgTypes = {
    title: {
        name: 'title',
        description: 'Customize the title',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Empty'
        }
    },
    description: {
        name: 'description',
        description: 'Customize the description',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Empty'
        }
    },
    image: {
        name: 'image',
        description: 'Customize the image. Will treat as image url when string provided',
        options: asset,
        control: {type: 'select', defaultValue: KitEmpty.ASSET_RESULT},
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: 'KitEmpty.ASSET_RESULT'},
            category: 'Empty'
        }
    },
    button: {
        name: 'button',
        description: 'Display buttons',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Empty'
        }
    },
    imageStyle: {
        name: 'imageStyle',
        description: 'The style of image',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Empty'
        }
    }
};

export const argTypes = {
    ...TemplateArgTypes
};
