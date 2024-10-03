export const argTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText (Wrapper)'
        }
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText (Wrapper)'
        }
    },
    htmlFor: {
        name: 'htmlFor',
        description:
            'Indicates the form element that the label describes. If you set the `id` prop, you should set the same `id` on the `htmlFor` prop',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText (Wrapper)'
        }
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Component wrapper class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText (Wrapper)'
        }
    },
    infoIcon: {
        name: 'infoIcon',
        description: 'Custom Icon to display when onInfoClick is set',
        control: false,
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'RichText (Wrapper)'
        }
    },
    actions: {
        name: 'actions',
        description: 'Actions to add on the right of the label',
        control: false,
        table: {
            type: {
                summary: 'ReactNode[]'
            },
            category: 'RichText (Wrapper)'
        }
    },
    required: {
        name: 'required',
        description: 'Whether the input is mandatory',
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
            category: 'RichText (Wrapper)'
        }
    },
    onInfoClick: {
        name: 'onInfoClick',
        description: 'If set, shows info icon, and set the handler to handle `click` event on it',
        control: false,
        table: {
            type: {
                summary: '(e: MouseEvent<HTMLElement, MouseEvent>) => void;'
            },
            category: 'RichText (Wrapper)'
        }
    },
    placeholder: {
        name: 'placeholder',
        description:
            'Text to display when the field is empty. The placeholder is initialized when the editor is created and is not reactive by default.',
        control: false,
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Whether the richText is disabled',
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
            category: 'RichText'
        }
    },
    readonly: {
        name: 'readonly',
        description: 'Whether the richText is in readonly mode',
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
            category: 'RichText'
        }
    },
    status: {
        name: 'status',
        description: 'Set validation status',
        options: ['', 'error', 'warning'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'error | warning'
            },
            category: 'RichText'
        }
    },
    showCount: {
        name: 'showCount',
        description: 'Whether to show character count',
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
            category: 'RichText'
        }
    },
    maxLength: {
        name: 'maxLength',
        description: 'The maximum number of characters in the richText',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            category: 'RichText'
        }
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The initial content for the `Tiptap` editor',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText'
        }
    },
    value: {
        name: 'value',
        description: 'The content for the `Tiptap` editor',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'RichText'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when the content of the editor changes',
        control: false,
        table: {
            type: {
                summary: '(value: string) => void;'
            },
            category: 'RichText'
        }
    }
};
