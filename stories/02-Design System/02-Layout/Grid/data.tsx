import React from 'react';
import {KitGrid} from '@kit/Layout/';

export const argTypes = {
    rowAlign: {
        name: 'align',
        description: 'Vertical alignement',
        table: {
            type: {
                summary:
                    "top | middle | bottom | stretch | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'}"
            },
            defaultValue: {summary: 'top'},
            category: 'Row'
        },
        defaultValue: 'top'
    },
    rowJustify: {
        name: 'justify',
        description: 'Horizontal alignement',
        table: {
            type: {
                summary:
                    "start | end | center | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center'}"
            },
            defaultValue: {summary: 'start'},
            category: 'Row'
        },
        defaultValue: 'start'
    },
    rowWrap: {
        name: 'wrap',
        description: 'Auto wrap line',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Row'
        },
        defaultValue: true
    },
    colFlex: {
        name: 'flex',
        description: 'Flex layout style	',
        table: {
            type: {
                summary: 'string | number'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colOffset: {
        name: 'offset',
        description: 'The number of cells to offset Col from the left',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 0},
            category: 'Col'
        },
        defaultValue: 0
    },
    colOrder: {
        name: 'order',
        description: 'Raster order',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 0},
            category: 'Col'
        },
        defaultValue: 0
    },
    colPull: {
        name: 'pull',
        description: 'The number of cells that raster is moved to the left',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 0},
            category: 'Col'
        },
        defaultValue: 0
    },
    colPush: {
        name: 'push',
        description: 'The number of cells that raster is moved to the right',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 0},
            category: 'Col'
        },
        defaultValue: 0
    },
    colSpan: {
        name: 'span',
        description: 'Raster number of cells to occupy, 0 corresponds to `display: none`',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 'none'},
            category: 'Col'
        },
        defaultValue: 'none'
    },
    colXs: {
        name: 'xs',
        description:
            '`screen < 576px` and also default setting, could be a `span` value or an object containing above props',
        table: {
            type: {
                summary: 'number | object'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colSm: {
        name: 'sm',
        description: '`screen ≥ 576px`, could be a `span` value or an object containing above props',
        table: {
            type: {
                summary: 'number | object'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colMd: {
        name: 'md',
        description: '`screen ≥ 768px`, could be a `span` value or an object containing above props',
        table: {
            type: {
                summary: 'number | object'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colLg: {
        name: 'lg',
        description: '`screen ≥ 992px`, could be a `span` value or an object containing above props',
        table: {
            type: {
                summary: 'number | object'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colXl: {
        name: 'xl',
        description: '`screen ≥ 1200px`, could be a `span` value or an object containing above props',
        table: {
            type: {
                summary: 'number | object'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colXxl: {
        name: 'xxl',
        description: '`screen ≥ 1600px`, could be a `span` value or an object containing above props',
        table: {
            type: {
                summary: 'number | object'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    }
};

export const Template = () => {
    const {Row, Col} = KitGrid;
    return (
        <Row>
            <Col span={6}>
                <div className="col-demo odd">col-1</div>
            </Col>
            <Col span={6}>
                <div className="col-demo">col-2</div>
            </Col>
            <Col span={6}>
                <div className="col-demo odd">col-3</div>
            </Col>
            <Col span={6}>
                <div className="col-demo">col-4</div>
            </Col>
        </Row>
    );
};
