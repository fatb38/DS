export const argTypes = {
    align: {
        description: 'Vertical alignment',
        table: {
            defaultValue: {summary: 'top'},
            category: 'Row',
            type: {summary: "top | middle | bottom | stretch | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'}"}
        }
    },
    gutter: {
        description: 'Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]`',
        table: {
            defaultValue: {summary: '0'},
            category: 'Row',
            type: {summary: "number | object | array"}
        }
    },
    justify: {
        description: 'Horizontal arrangement',
        table: {
            defaultValue: {summary: 'start'},
            category: 'Row',
            type: {summary: "start | end | center | space-around | space-between | space-evenly | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'}"}
        }
    },
    wrap: {
        description: 'Auto wrap line',
        table: {
            defaultValue: {summary: 'true'},
            category: 'Row',
            type: {summary: "boolean"}
        }
    },
    flex: {
        description: 'Flex layout style',
        table: {
            category: 'Col',
            type: {summary: "string | number"}
        }
    },
    offset: {
        description: 'The number of cells to offset Col from the left',
        table: {
            defaultValue: {summary: '0'},
            category: 'Col',
            type: {summary: "number"}
        }
    },
    order: {
        description: 'Raster order',
        table: {
            defaultValue: {summary: '0'},
            category: 'Col',
            type: {summary: "number"}
        }
    },
    pull: {
        description: 'The number of cells that raster is moved to the left',
        table: {
            defaultValue: {summary: '0'},
            category: 'Col',
            type: {summary: "number"}
        }
    },
    push: {
        description: 'The number of cells that raster is moved to the right',
        table: {
            defaultValue: {summary: '0'},
            category: 'Col',
            type: {summary: "number"}
        }
    },
    span: {
        description: 'Raster number of cells to occupy, 0 corresponds to `display: none`',
        table: {
            defaultValue: {summary: 'none'},
            category: 'Col',
            type: {summary: "number"}
        }
    },
    xs: {
        description: '`screen < 576px` and also default setting, could be a `span` value or an object containing above props',
        table: {
            category: 'Col',
            type: {summary: "number | object"}
        }
    },
    sm: {
        description: '`screen ≥ 576px`, could be a `span` value or an object containing above props',
        table: {
            category: 'Col',
            type: {summary: "number | object"}
        }
    },
    md: {
        description: '`screen ≥ 768px`, could be a `span` value or an object containing above props',
        table: {
            category: 'Col',
            type: {summary: "number | object"}
        }
    },
    lg: {
        description: '`screen ≥ 992px`, could be a `span` value or an object containing above props',
        table: {
            category: 'Col',
            type: {summary: "number | object"}
        }
    },
    xl: {
        description: '`screen ≥ 1200px`, could be a `span` value or an object containing above props',
        table: {
            category: 'Col',
            type: {summary: "number | object"}
        }
    },
    xxl: {
        description: '`screen ≥ 1600px`, could be a `span` value or an object containing above props',
        table: {
            category: 'Col',
            type: {summary: "number | object"}
        }
    }
};
