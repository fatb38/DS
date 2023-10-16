import React from 'react';
import {KitDatePicker, KitInput, KitInputNumber, KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {IEditorTemplate} from '../../../types';

const components = ['Input', 'TextArea', 'Password'];

export const argTypes = {
    component: {
        name: 'component',
        description: 'Choose the component to play with (not a prop)',
        options: components,
        control: {
            type: 'select',
            defaultValue: 'Input'
        },
        defaultValue: 'Input'
    },
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    placeHolder: {
        name: 'placeHolder',
        description: 'HTML input placeholder',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    rows: {
        name: 'rows',
        description: 'HTML textarea rows',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            }
        }
    },
    allowClear: {
        name: 'allowClear',
        description: 'If allow to remove input content with clear icon',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Input'
        },
        defaultValue: false
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The initial input content	',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Input'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Whether the input is disabled',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Input'
        },
        defaultValue: false
    },
    maxLength: {
        name: 'maxLength',
        description: 'The maximum number of characters in Input',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Input'
        }
    },
    showCount: {
        name: 'showCount',
        description: 'Whether to show character count',
        control: {type: 'boolean'},
        table: {
            type: {
                summary:
                    'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }'
            },
            defaultValue: {summary: false},
            category: 'Input'
        },
        defaultValue: false
    },
    status: {
        name: 'status',
        description: 'Set validation status	',
        options: ['', 'error', 'warning'],
        control: {type: 'select'},
        table: {
            type: {
                summary: "'error' | 'warning'"
            },
            category: 'Input'
        }
    },
    prefix: {
        name: 'prefix',
        description: 'Set the icon component of button (Not working for TextArea)',
        options: ['', 'SearchOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Input'
        }
    },
    suffix: {
        name: 'suffix',
        description: 'The suffix icon for the Input (Not working for TextArea and Password)',
        options: ['', 'SearchOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Input'
        }
    },
    value: {
        name: 'value',
        description: 'The input content value',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Input'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when user input',
        table: {
            type: {
                summary: 'function(e)'
            },
            category: 'Input'
        }
    },
    onPressEnter: {
        name: 'onPressEnter',
        description: 'The callback function that is triggered when Enter key is pressed',
        table: {
            type: {
                summary: 'function(e)'
            },
            category: 'Input'
        }
    },
    inputHtml: {
        name: '',
        description: 'The rest of the props of Input are exactly the same as the original input.',
        table: {
            type: {
                summary: 'https://legacy.reactjs.org/docs/dom-elements.html#all-supported-html-attributes'
            },
            category: 'Input'
        }
    },
    autoSize: {
        name: 'autoSize',
        description: 'Height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | object'
            },
            defaultValue: {summary: true},
            category: 'Input.TextArea'
        },
        defaultValue: true
    },
    onResize: {
        name: 'onResize',
        description: 'The callback function that is triggered when resize',
        table: {
            type: {
                summary: 'function({ width, height })'
            },
            category: 'Input.TextArea'
        }
    },
    inputTextArea: {
        name: '',
        description: 'The rest of the props of TextArea are the same as the original',
        table: {
            type: {
                summary: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea'
            },
            category: 'Input.TextArea'
        }
    },
    iconRender: {
        name: 'iconRender',
        description: 'Custom toggle button	',
        table: {
            type: {
                summary: '(visible) => ReactNode'
            },
            defaultValue: {
                summary: '(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)'
            },
            category: 'Input.Password'
        }
    },
    visibilityToggle: {
        name: 'visibilityToggle',
        description: 'Whether show toggle button or control password visible',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | VisibilityToggle'
            },
            defaultValue: {summary: true},
            category: 'Input.Password'
        },
        defaultValue: true
    },
    visible: {
        name: 'visible',
        description: 'Whether the password is show or hide',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Input.Password.visibilityToggle'
        },
        defaultValue: false
    },
    onVisibleChange: {
        name: 'onVisibleChange',
        description: 'Callback executed when visibility of the password is changed',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Input.Password.visibilityToggle'
        }
    }
};

export const getIcon = icon => {
    switch (icon) {
        case 'SearchOutlined':
            return <FontAwesomeIcon icon={faMagnifyingGlass} />;
        case 'CheckCircleOutlined':
            return <FontAwesomeIcon icon={faCircleCheck} />;
        case '':
        default:
            return null;
    }
};

const getComponent = (component, args) => {
    const prefix = getIcon(args.prefix);
    const suffix = getIcon(args.suffix);

    const {Password, TextArea} = KitInput;

    switch (component) {
        case 'Password':
            return <Password {...args} prefix={prefix} suffix={suffix}></Password>;
        case 'TextArea':
            return <TextArea {...args} prefix={prefix} suffix={suffix}></TextArea>;
        case 'Input':
        default:
            return <KitInput {...args} prefix={prefix} suffix={suffix}></KitInput>;
    }
};

export const Template = args => {
    const {component, ...props} = args;
    return <KitSpace direction="vertical">{getComponent(component, props)}</KitSpace>;
};

export const EditorTemplate: IEditorTemplate = () => {
    const {Password, TextArea} = KitInput;

    const inputProps = {
        placeholder: 'Placeholder',
        prefix: <UserOutlined />,
        suffix: <SearchOutlined />,
        showCount: true
    };

    const passwordProps = {
        placeholder: 'Password',
        prefix: <LoginOutlined />,
        showCount: true
    };

    const textAreaProps = {
        placeholder: 'TextArea',
        showCount: true
    };

    return (
        <KitSpace size="m">
            <KitSpace direction="vertical">
                <KitInput {...inputProps} />
                <KitInput {...inputProps} disabled />
                <KitInput {...inputProps} status="warning" />
                <KitInput {...inputProps} status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <Password {...passwordProps} />
                <Password {...passwordProps} disabled />
                <Password {...passwordProps} status="warning" />
                <Password {...passwordProps} status="error" />
            </KitSpace>
            <KitSpace direction="vertical" size="m">
                <TextArea {...textAreaProps} />
                <TextArea {...textAreaProps} disabled />
                <TextArea {...textAreaProps} status="warning" />
                <TextArea {...textAreaProps} status="error" />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Input';
EditorTemplate.title = 'Input';

export const EditorTemplateWrapper: IEditorTemplate = () => {
    const {Password, TextArea} = KitInput;
    const {RangePicker} = KitDatePicker;

    const wrapperProps = {
        label: 'Label',
        helper: 'Helper'
    };

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace direction="horizontal" size="m">
                <KitInput {...wrapperProps} placeholder="Input" />
                <KitInput {...wrapperProps} disabled placeholder="Input" />
                <KitInput {...wrapperProps} status="warning" placeholder="Input" />
                <KitInput {...wrapperProps} status="error" placeholder="Input" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <Password {...wrapperProps} placeholder="Password" />
                <Password {...wrapperProps} disabled placeholder="Password" />
                <Password {...wrapperProps} status="warning" placeholder="Password" />
                <Password {...wrapperProps} status="error" placeholder="Password" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <TextArea {...wrapperProps} placeholder="TextArea" />
                <TextArea {...wrapperProps} disabled placeholder="TextArea" />
                <TextArea {...wrapperProps} status="warning" placeholder="TextArea" />
                <TextArea {...wrapperProps} status="error" placeholder="TextArea" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitInputNumber {...wrapperProps} placeholder="Number" />
                <KitInputNumber {...wrapperProps} disabled placeholder="Number" />
                <KitInputNumber {...wrapperProps} status="warning" placeholder="Number" />
                <KitInputNumber {...wrapperProps} status="error" placeholder="Number" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitDatePicker {...wrapperProps} placeholder="DatePicker" />
                <KitDatePicker {...wrapperProps} disabled placeholder="DatePicker" />
                <KitDatePicker {...wrapperProps} status="warning" placeholder="DatePicker" />
                <KitDatePicker {...wrapperProps} status="error" placeholder="DatePicker" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <RangePicker {...wrapperProps} placeholder={['RangerPicker', 'RangePicker']} />
                <RangePicker {...wrapperProps} disabled placeholder={['RangerPicker', 'RangePicker']} />
                <RangePicker {...wrapperProps} status="warning" placeholder={['RangerPicker', 'RangePicker']} />
                <RangePicker {...wrapperProps} status="error" placeholder={['RangerPicker', 'RangePicker']} />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitSelect {...wrapperProps} placeholder="Select" />
                <KitSelect {...wrapperProps} disabled placeholder="Select" />
                <KitSelect {...wrapperProps} status="warning" placeholder="Select" />
                <KitSelect {...wrapperProps} status="error" placeholder="Select" />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplateWrapper.path = 'components.InputWrapper';
EditorTemplateWrapper.title = 'InputWrapper';
