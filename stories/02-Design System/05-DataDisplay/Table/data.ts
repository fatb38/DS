export const argTypes = {
    columns: {
        name: 'columns',
        description: 'Columns of table',
        table: {
            type: {
                summary: 'KitTableColumnsType[]'
            },
            category: 'Table'
        }
    },
    components: {
        name: 'components',
        description: 'Override default table elements',
        table: {
            type: {
                summary: 'KitTableComponents'
            },
            category: 'Table'
        }
    },
    dataSource: {
        name: 'dataSource',
        description: 'Data record array to be displayed',
        table: {
            type: {
                summary: 'object[]'
            },
            category: 'Table'
        }
    },
    footer: {
        name: 'footer',
        description: 'Table footer renderer',
        table: {
            type: {
                summary: 'function(currentPageData)'
            },
            category: 'Table'
        }
    },
    cellsBackgroundColor: {
        name: 'cellsBackgroundColor',
        control: {type: 'text'},
        description: 'Background color of fixed cells',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Table'
        }
    },
    loading: {
        name: 'loading',
        description: 'Loading status of table',
        table: {
            type: {
                summary: 'boolean | Spin Props'
            },
            defaultValue: {
                summary: false
            },
            category: 'Table'
        }
    },
    locale: {
        name: 'locale',
        description: 'The i18n text including filter, sort, empty text, etc',
        table: {
            type: {
                summary: 'object'
            },
            category: 'Table'
        }
    },
    pagination: {
        name: 'pagination',
        description:
            'Config of pagination. You can ref table pagination config or full [pagination](/?path=/docs/design-system-navigation-pagination--docs) document, hide it by setting it to false',
        table: {
            type: {
                summary: 'object | false'
            },
            category: 'Table'
        }
    },
    rowClassName: {
        name: 'rowClassName',
        description: "Row's className",
        table: {
            type: {
                summary: 'function(record, index): string'
            },
            category: 'Table'
        }
    },
    rowKey: {
        name: 'rowKey',
        control: {type: 'text'},
        description: "Row's unique key, could be a string or function that returns a string",
        table: {
            type: {
                summary: 'string | function(record): string'
            },
            defaultValue: {
                summary: 'key'
            },
            category: 'Table'
        }
    },
    rowSelection: {
        name: 'rowSelection',
        description: 'Row selection config',
        table: {
            type: {
                summary: 'object'
            },
            category: 'Table'
        }
    },
    scroll: {
        name: 'scroll',
        description: 'Whether the table can be scrollable, config',
        table: {
            type: {
                summary: 'object'
            },
            category: 'Table'
        }
    },
    showHeader: {
        name: 'showHeader',
        control: {type: 'boolean'},
        description: 'Whether to show table header',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Table'
        }
    },
    sortDirections: {
        name: 'sortDirections',
        description: 'Supported sort way, could be `ascend`, `descend`',
        table: {
            type: {
                summary: 'Array'
            },
            defaultValue: {
                summary: '[ascend, descend]'
            },
            category: 'Table'
        }
    },
    sticky: {
        name: 'sticky',
        description: 'Set sticky header and scroll bar',
        table: {
            type: {
                summary: 'boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}'
            },
            defaultValue: {
                summary: false
            },
            category: 'Table'
        }
    },
    tableLayout: {
        name: 'tableLayout',
        description:
            'The [table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) attribute of table element',
        table: {
            type: {
                summary: '- | auto | fixed'
            },
            defaultValue: {
                summary: '`fixed` when header/columns are fixed, or using `column.ellipsis`'
            },
            category: 'Table'
        }
    },
    title: {
        name: 'title',
        description: 'Table title renderer',
        table: {
            type: {
                summary: 'function(currentPageData)'
            },
            category: 'Table'
        }
    },
    virtual: {
        name: 'virtual',
        description: 'Support virtual list',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Table'
        }
    },
    onChange: {
        name: 'onChange	',
        description: 'Callback executed when pagination or sorter is changed',
        table: {
            type: {
                summary: 'function(pagination, sorter, extra: { currentDataSource: [], action: paginate | sort })'
            },
            category: 'Table'
        }
    },
    onHeaderRow: {
        name: 'onHeaderRow',
        description: 'Set props on per header row',
        table: {
            type: {
                summary: 'function(columns, index)'
            },
            category: 'Table'
        }
    },
    onRow: {
        name: 'onRow',
        description: 'Set props on per row',
        table: {
            type: {
                summary: 'function(record, index)'
            },
            category: 'Table'
        }
    },
    onScroll: {
        name: 'onScroll',
        description:
            'Triggered when the table body is scrolled. Note that only vertical scrolling will trigger the event when `virtual`',
        table: {
            type: {
                summary: 'function(event)'
            },
            category: 'Table'
        }
    }
};
