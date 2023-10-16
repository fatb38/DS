import {KitRate} from '@kit/DataEntry';
import React from 'react';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';

const color = ['default', 'green', 'red', 'blue'];

export const argTypes = {
    allowClear: {
        name: 'allowClear',
        description: 'Whether to allow clear when click again',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: true}
        }
    },
    allowHalf: {
        name: 'allowHalf',
        description: 'Whether to allow semi selection',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: true}
        }
    },
    color: {
        name: 'color',
        description: 'Set a color',
        options: color,
        control: {
            type: 'select',
            defaultValue: 'default'
        },
        table: {
            type: {
                summary: 'default | red | green | blue'
            },
            category: 'Rate',
            defaultValue: {summary: 'default'}
        }
    },
    disabledStarTransparency: {
        name: 'disabledStarTransparency',
        description: 'Set a color to match the background and keep the transparency effect of disabled striped stars',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Rate',
            defaultValue: {summary: '#FFFFFF'}
        }
    },
    autoFocus: {
        name: 'autoFocus',
        description: 'If get focus when component mounted',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: false}
        }
    },
    character: {
        name: 'character',
        description: 'The custom character of rate',
        table: {
            type: {
                summary: 'ReactNode | (RateProps) => ReactNode'
            },
            category: 'Rate',
            defaultValue: {summary: '<StarFilled />'}
        }
    },
    count: {
        name: 'count',
        description: 'Star count',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Rate',
            defaultValue: {summary: 5}
        }
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The default value',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Rate',
            defaultValue: {summary: 0}
        }
    },
    disabled: {
        name: 'disabled',
        description: 'If read only, unable to interact',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: false}
        }
    },
    tooltips: {
        name: 'tooltips',
        description: 'Customize tooltip by each character',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Rate'
        }
    },
    value: {
        name: 'value',
        description: 'The current value',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Rate'
        }
    },
    onBlur: {
        name: 'onBlur',
        description: 'Callback when component lose focus',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'Rate'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when select value',
        table: {
            type: {
                summary: 'function(value: number)'
            },
            category: 'Rate'
        }
    },
    onFocus: {
        name: 'onFocus',
        description: 'Callback when component get focus',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'Rate'
        }
    },
    onHoverChange: {
        name: 'onHoverChange',
        description: 'Callback when hover item',
        table: {
            type: {
                summary: 'function(value: number)'
            },
            category: 'Rate'
        }
    },
    onKeyDown: {
        name: 'onKeyDown',
        description: 'Callback when keydown on component',
        table: {
            type: {
                summary: 'function(event)'
            },
            category: 'Rate'
        }
    }
};

export const Template = ({...args}) => {
    return <KitRate {...args} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="m" direction="vertical">
            <KitRate disabled />
            <KitRate defaultValue={3} />
            <KitRate defaultValue={3} color="red" />
            <KitRate defaultValue={3} color="green" />
            <KitRate defaultValue={3} color="blue" />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Rate';
EditorTemplate.title = 'Rate';
