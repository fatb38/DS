import {KitCard} from '@kit/DataDisplay/Card';
import React from 'react';

export const KitTemplate: React.FunctionComponent = () => {
    return null;
};

const CardArgTypes = {
    actions: {
        name: 'actions',
        description: 'The action list, shows at the bottom of the Card',
        table: {
            type: {
                summary: 'Array<ReactNode>'
            },
            category: 'Card'
        }
    },
    bodyStyle: {
        name: 'bodyStyle',
        description: 'Inline style to apply to the card content',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Card'
        }
    },
    cover: {
        name: 'cover',
        description: 'Card cover',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Card'
        }
    },
    contentTitle: {
        name: 'contentTitle',
        control: {type: 'text'},
        description: 'Title of the Card content',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    contentDescription: {
        name: 'contentDescription',
        control: {type: 'text'},
        description: 'Description of the Card',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disabled card and actions',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    extra: {
        name: 'extra',
        description: 'Content to render in the top-right corner of the card',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Card'
        }
    },
    headStyle: {
        name: 'headStyle',
        description: 'Inline style to apply to the card head',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Card'
        }
    },
    title: {
        name: 'title',
        description: 'Card title',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Card'
        }
    },
    sideSpacing: {
        name: 'sideSpacing',
        description: 'Space around Card image',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'Boolean'
            },
            category: 'Card'
        }
    }
};

export const argTypes = {
    ...CardArgTypes
};

export const Template = args => {
    return <KitCard {...args} />;
};
