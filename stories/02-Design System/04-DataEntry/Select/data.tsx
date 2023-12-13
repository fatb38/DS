/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {KitSelect} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SelectArgTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Select'
        }
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Select'
        }
    },
    placeholder: {
        name: 'placeholder',
        control: {type: 'text'},
        description: 'Placeholder of select',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        }
    },
    allowClear: {
        name: 'allowClear',
        control: {type: 'boolean'},
        description: 'Show clear button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: false
    },
    oneLineTags: {
        name: 'oneLineTags',
        control: {type: 'boolean'},
        description: 'Display tags on one line. Only applies when `mode` is set to `multiple` or `tags`',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    autoClearSearchValue: {
        name: 'autoClearSearchValue',
        control: {type: 'boolean'},
        description:
            'Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
    },
    autoFocus: {
        name: 'autoFocus',
        control: {type: 'boolean'},
        description: 'Get focus by default',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    defaultActiveFirstOption: {
        name: 'defaultActiveFirstOption',
        control: {type: 'boolean'},
        description: 'Whether active first option by default',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
    },
    status: {
        name: 'status',
        description: 'Set validation status',
        options: ['', 'error', 'warning'],
        control: {type: 'select'},
        table: {
            type: {
                summary: "'error' | 'warning'"
            },
            category: 'Select'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Whether disabled select',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    loading: {
        name: 'loading',
        control: {type: 'boolean'},
        description: 'Indicate loading state',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    showArrow: {
        name: 'showArrow',
        control: {type: 'boolean'},
        description: 'Whether to show the drop-down arrow',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
    },
    defaultValue: {
        name: 'defaultValue',
        control: {type: 'text'},
        description: 'Initial selected option',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: 'string | string[] | <br />number | number[] | <br />LabeledValue | LabeledValue[]'
            },
            category: 'Select'
        },
        defaultValue: true
    },
    popupClassName: {
        name: 'popupClassName',
        control: {type: 'text'},
        description: 'The className of dropdown menu',
        table: {
            type: {
                summary: 'text'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: true
    },
    options: {
        name: 'options',
        control: {type: 'text'},
        description: 'Select options. Will get better perf than jsx definition',
        table: {
            type: {
                summary: 'text'
            },
            defaultValue: {summary: '{ label, value }[] }'},
            category: 'Select'
        }
    },
    labelOnly: {
        name: 'labelOnly',
        control: {type: 'boolean'},
        description: 'If options contains icons or colors they will be ignored',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    value: {
        name: 'value',
        control: {type: 'text'},
        description: 'Current selected option (considered as a immutable array)',
        table: {
            type: {
                summary: 'string | string[] | <br />number | number[] | <br />LabeledValue | LabeledValue[]'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        }
    },
    placement: {
        name: 'placement',
        control: {type: 'select'},
        options: ['bottomLeft', 'bottomRight', 'TopLeft', 'topRight'],
        description: 'The position where the selection box pops up',
        table: {
            type: {
                summary: '`bottomLeft` `bottomRight` `topLeft` `topRight`'
            },
            defaultValue: {summary: 'bottomLeft'},
            category: 'Select'
        }
    },
    suffixIcon: {
        name: 'suffixIcon',
        description: 'The custom suffix icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        }
    },
    getPopupContainer: {
        name: 'getPopupContainer',
        description:
            'Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [Example](https://codesandbox.io/s/4j168r7jw0)',
        table: {
            type: {
                summary: 'function(triggerNode)'
            },
            defaultValue: {summary: '() => document.body'},
            category: 'Select'
        }
    },
    onBlur: {
        name: 'onBlur',
        description: 'Called when blur',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onChange: {
        name: 'onChange',
        description: 'Called when select an option or input value change',
        table: {
            type: {
                summary: 'function(value, option:Option | Array<Option>)'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onClear: {
        name: 'onClear',
        description: 'Called when clear',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onDropdownVisibleChange: {
        name: 'onDropdownVisibleChange',
        description: 'Called when dropdown open',
        table: {
            type: {
                summary: 'function(open)'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onFocus: {
        name: 'onFocus',
        description: 'Called when focus',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onMouseEnter: {
        name: 'onMouseEnter',
        description: 'Called when mouse enter',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onMouseLeave: {
        name: 'onMouseLeave',
        description: 'Called when mouse leave',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onPopupScroll: {
        name: 'onPopupScroll',
        description: 'Called when dropdown scrolls',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onSelect: {
        name: 'onSelect',
        description:
            "Called when an option is selected, the params are option's value (or key) and option instance. function(value: string | number | LabeledValue, option: Option)",
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Component wrapper class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Select'
        }
    }
};

export const argTypes = {
    ...SelectArgTypes
};

export const Template = args => {
    return <KitSelect style={{width: '320px'}} {...args} />;
};

export const EditorTemplate: IEditorTemplate = () => {
    const {theme} = useKitTheme();

    const style = {width: '320px'};

    const colorOptions = [
        {
            value: 'not-allowed',
            color: theme.general.colors.secondary.red.red400,
            label: 'Not allowed'
        },
        {
            value: 'denied',
            color: theme.general.colors.secondary.yellow.yellow400,
            label: 'Denied'
        },
        {
            value: 'todo',
            color: theme.general.colors.primary.primary400,
            label: 'Todo by agency'
        },
        {
            value: 'ok',
            color: theme.general.colors.secondary.green.green400,
            label: 'Ok done by agency'
        }
    ];

    const iconOptions = [
        {
            value: 'file-1',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 1'
        },
        {
            value: 'file-2',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 2'
        },
        {
            value: 'file-3-1',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 3.1'
        },
        {
            value: 'file-3-2',
            icon: <FontAwesomeIcon icon={faFile} />,
            label: 'File 3.2'
        }
    ];

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace>
                <KitSelect style={style} options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} disabled options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} disabled options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} status="warning" options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} status="warning" options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} status="error" options={colorOptions} defaultValue="not-allowed" />
                <KitSelect style={style} status="error" options={iconOptions} defaultValue="file-2" />
            </KitSpace>
            <KitSpace>
                <KitSelect
                    style={style}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied']}
                    mode="multiple"
                />
                <KitSelect
                    style={style}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied']}
                    mode="multiple"
                    oneLineTags
                />
            </KitSpace>
            <KitSpace>
                <KitSelect style={style} options={colorOptions} defaultValue={['not-allowed', 'denied']} mode="tags" />
                <KitSelect
                    style={style}
                    options={colorOptions}
                    defaultValue={['not-allowed', 'denied']}
                    mode="tags"
                    oneLineTags
                />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Select';
EditorTemplate.title = 'Select';
