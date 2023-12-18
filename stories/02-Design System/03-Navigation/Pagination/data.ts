const sizeOptions = ['default', 'small', 'default'];

export const argTypes = {
    current: {
        name: 'current',
        description: 'Current page number',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    defaultCurrent: {
        name: 'defaultCurrent',
        description: 'Default initial page number',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 1
            },
            category: 'Pagination'
        }
    },
    bordered: {
        name: 'bordered',
        description: 'Show all buttons bordered (only in default size)',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    size: {
        name: 'size',
        description: 'Specify the size of `Pagination`, can be set to `small`',
        options: sizeOptions,
        control: {
            type: 'select',
            defaultValue: 'default'
        },
        table: {
            type: {
                summary: '`default` | `small` | `default`'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'Pagination'
        }
    },
    total: {
        name: 'total',
        description: 'Total number of data items',
        control: {
            type: 'number',
            defaultValue: 0
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 0
            },
            category: 'Pagination'
        }
    },
    defaultPageSize: {
        name: 'defaultPageSize',
        description: 'Default number of data items per page',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 10
            },
            category: 'Pagination'
        }
    },
    pageSize: {
        name: 'pageSize',
        description: 'Number of data items per page',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 10
            },
            category: 'Pagination'
        }
    },
    pageSizeOptions: {
        name: 'pageSizeOptions',
        description: 'Specify the sizeChanger options',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string[] | number[] | [`10`, `20`, `50`, `100`]'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Disable pagination',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    hideOnSinglePage: {
        name: 'hideOnSinglePage',
        description: 'Whether to hide pager on single page',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Pagination'
        }
    },
    responsive: {
        name: 'responsive',
        description: 'If `size` is not specified, `Pagination` would resize according to the width of the window',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    showLessItems: {
        name: 'showLessItems',
        description: 'Show less page items',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Pagination'
        }
    },
    showQuickJumper: {
        name: 'showQuickJumper',
        description: 'Determine whether you can jump to pages directly ',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean | { goButton: ReactNode }'
            },
            defaultValue: {
                summary: false
            },
            category: 'Pagination'
        }
    },
    showSizeChanger: {
        name: 'showSizeChanger',
        description: 'Determine whether to show `pageSize` select, it will be true when `total > 50`',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Pagination'
        }
    },
    showTitle: {
        name: 'showTitle',
        description: "Show page item's title",
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Pagination'
        }
    },
    simple: {
        name: 'simple',
        description: 'Whether to use simple mode',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    itemRender: {
        name: 'itemRender',
        description: "To customize item's innerHTML",
        table: {
            type: {
                summary: "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode"
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    showTotal: {
        name: 'showTotal',
        description: 'To display the total number and range',
        table: {
            type: {
                summary: 'function(total, range)'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    onChange: {
        name: 'onChange',
        description:
            'Called when the page number or `pageSize` is changed, and it takes the resulting page number and pageSize as its arguments',
        table: {
            type: {
                summary: 'function(page, pageSize)'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    },
    onShowSizeChange: {
        name: 'onShowSizeChange',
        description: 'Called when `pageSize` is changed',
        table: {
            type: {
                summary: 'function(current, size)'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Pagination'
        }
    }
};
