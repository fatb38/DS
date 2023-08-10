import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '../../../../src';

const modeOptions = [' ', 'time', 'date', 'month', 'year', 'decade'];
const pickerOptions = [' ', 'time', 'date', 'month', 'quarter', 'year'];
const placementOptions = [' ', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const statusOptions = [' ', 'warning', 'error'];

const CommonArgs = {
    allowClear: {
        name: 'allowClear',
        description: 'Customize clear button',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean | { clearIcon?: ReactNode }'
            },
            category: 'Common API',
            defaultValue: {
                summary: true
            }
        }
    },
    autoFocus: {
        name: 'autoFocus',
        description: 'If get focus when component mounted',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean | { clearIcon?: ReactNode }'
            },
            category: 'Common API',
            defaultValue: {
                summary: false
            }
        }
    },
    className: {
        name: 'className',
        description: 'The picker className',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Common API'
        }
    },
    dateRender: {
        name: 'dateRender',
        description: 'Custom rendering function for date cells',
        table: {
            type: {
                summary: 'function(currentDate: dayjs, today: dayjs) => React.ReactNode'
            },
            category: 'Common API'
        }
    },
    changeOnBlur: {
        name: 'changeOnBlur',
        description: 'Trigger `change` when blur. e.g. datetime picker no need click confirm button',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Common API',
            defaultValue: {
                summary: false
            }
        }
    },
    cellRender: {
        name: 'cellRender',
        description: 'Custom rendering function for picker cells',
        table: {
            type: {
                summary:
                    "(current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode"
            },
            category: 'Common API'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Determine whether the KitDatePicker is disabled',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Common API',
            defaultValue: {
                summary: false
            }
        }
    },
    disabledDate: {
        name: 'disabledDate',
        description: 'Specify the date that cannot be selected',
        table: {
            type: {
                summary: '(currentDate: dayjs) => boolean'
            },
            category: 'Common API',
            defaultValue: {
                summary: false
            }
        }
    },
    format: {
        name: 'format',
        description:
            'To set the date format, support multi-format matching when it is an array, display the first one shall prevail. refer to [dayjs#format](https://day.js.org/docs/en/display/format)',
        table: {
            type: {
                summary: 'formatType'
            },
            category: 'Common API',
            defaultValue: {
                summary: 'YYYY-MM-DD'
            }
        }
    },
    popupClassName: {
        name: 'popupClassName',
        description: 'To customize the className of the popup calendar',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Common API'
        }
    },
    getPopupContainer: {
        name: 'getPopupContainer',
        description:
            'To set the container of the floating layer, while the default is to create a `div` element in `body`',
        table: {
            type: {
                summary: 'function(trigger)'
            },
            category: 'Common API'
        }
    },
    inputReadOnly: {
        name: 'inputReadOnly',
        description: 'Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices)',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Common API',
            defaultValue: {
                summary: false
            }
        }
    },
    locale: {
        name: 'locale',
        description: 'Localization configuration',
        table: {
            type: {
                summary: 'object'
            },
            category: 'Common API',
            defaultValue: {
                summary: '{"lang": {"local": "en_US", ...}}'
            }
        }
    },
    mode: {
        name: 'mode',
        description: 'The picker panel mode',
        control: {
            type: 'select'
        },
        options: modeOptions,
        table: {
            type: {
                summary: 'time | date | month | year | decade'
            },
            category: 'Common API'
        }
    },
    nextIcon: {
        name: 'nextIcon',
        description: 'The custom next icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Common API'
        }
    },
    prevIcon: {
        name: 'prevIcon',
        description: 'The custom prev icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Common API'
        }
    },
    suffixIcon: {
        name: 'suffixIcon',
        description: 'The custom suffix icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Common API'
        }
    },
    superNextIcon: {
        name: 'superNextIcon',
        description: 'The custom super next icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Common API'
        }
    },
    superPrevIcon: {
        name: 'superPrevIcon',
        description: 'The custom super prev icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Common API'
        }
    },
    open: {
        name: 'open',
        description: 'The open state of picker',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Common API'
        }
    },
    panelRender: {
        name: 'panelRender',
        description: 'Customize panel render',
        table: {
            type: {
                summary: '(panelNode) => ReactNode'
            },
            category: 'Common API'
        }
    },
    picker: {
        name: 'picker',
        description: 'Set picker type',
        control: {
            type: 'select'
        },
        options: pickerOptions,
        table: {
            type: {
                summary: 'time | date | week | month | quarter | year'
            },
            category: 'Common API',
            defaultValue: {
                summary: 'date'
            }
        }
    },
    placeholder: {
        name: 'placeholder',
        description: 'The placeholder of date input',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string | [string,string]'
            },
            category: 'Common API'
        }
    },
    placement: {
        name: 'placement',
        description: 'The position where the selection box pops up',
        control: {
            type: 'select'
        },
        options: placementOptions,
        table: {
            type: {
                summary: 'bottomLeft | bottomRight | topLeft | topRight'
            },
            category: 'Common API',
            defaultValue: {
                summary: 'bottomLeft'
            }
        }
    },
    popupStyle: {
        name: 'popupStyle',
        description: 'To customize the style of the popup calendar',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Common API',
            defaultValue: {
                summary: '{}'
            }
        }
    },
    presets: {
        name: 'presets',
        description: 'The preset ranges for quick selection',
        table: {
            type: {
                summary: '{ label: React.ReactNode, value: Dayjs | (() => Dayjs) }[]'
            },
            category: 'Common API'
        }
    },
    status: {
        name: 'status',
        description: 'Set validation status',
        control: {
            type: 'select'
        },
        options: statusOptions,
        table: {
            type: {
                summary: 'warning | error'
            },
            category: 'Common API'
        }
    },
    style: {
        name: 'style',
        description: 'To customize the style of the input box',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Common API',
            defaultValue: {
                summary: '{}'
            }
        }
    },
    onOpenChange: {
        name: 'onOpenChange',
        description: 'Callback function, can be executed whether the popup calendar is popped up or closed',
        table: {
            type: {
                summary: 'function(open)'
            },
            category: 'Common API'
        }
    },
    onPanelChange: {
        name: 'onPanelChange',
        description: 'Callback when picker panel mode is changed',
        table: {
            type: {
                summary: 'function(value, mode)'
            },
            category: 'Common API'
        }
    }
};

const DatePickerArgs = {
    dp_defaultPickerValue: {
        name: 'defaultPickerValue',
        description: 'To set default picker date - [dayjs](https://day.js.org/)',
        table: {
            type: {
                summary: 'dayjs'
            },
            category: 'DatePicker'
        }
    },
    dp_defaultValue: {
        name: 'defaultValue',
        description:
            'To set default date, if start time or end time is null or undefined, the date range will be an open interval - [dayjs](https://day.js.org/)',
        table: {
            type: {
                summary: 'dayjs'
            },
            category: 'DatePicker'
        }
    },
    dp_disabledTime: {
        name: 'disabledTime',
        description: 'To specify the time that cannot be selected',
        table: {
            type: {
                summary: 'function(date)'
            },
            category: 'DatePicker'
        }
    },
    dp_format: {
        name: 'format',
        description: 'To set the date format. refer to [dayjs#format](https://day.js.org/docs/en/display/format)',
        table: {
            type: {
                summary: 'formatType'
            },
            category: 'DatePicker',
            defaultValue: {
                summary: 'YYYY-MM-DD'
            }
        }
    },
    dp_renderExtraFooter: {
        name: 'renderExtraFooter',
        description: 'Render extra footer in panel',
        table: {
            type: {
                summary: '(mode) => React.ReactNode'
            },
            category: 'DatePicker'
        }
    },
    dp_showNow: {
        name: 'showNow',
        description: 'Whether to show "Now" button on panel when showTime is set',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'DatePicker'
        }
    },
    do_showTime: {
        name: 'showTime',
        description: 'To provide an additional time selection',
        table: {
            type: {
                summary: 'object | boolean'
            },
            category: 'DatePicker'
        }
    },
    do_showTimeDefaultValue: {
        name: 'showTime.defaultValue',
        description: 'To set default time of selected date  - [dayjs](https://day.js.org/)',
        table: {
            type: {
                summary: 'dayjs'
            },
            category: 'DatePicker',
            defaultValue: {
                summary: 'dayjs()'
            }
        }
    },
    dp_showToday: {
        name: 'showToday',
        description: 'Whether to show "Today" button',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'DatePicker',
            defaultValue: {
                summary: 'true'
            }
        }
    },
    dp_value: {
        name: 'value',
        description: 'To set date - [dayjs](https://day.js.org/)',
        table: {
            type: {
                summary: 'dayjs'
            },
            category: 'DatePicker'
        }
    },
    dp_onChange: {
        name: 'onChange',
        description: 'Callback function, can be executed when the selected time is changing',
        table: {
            type: {
                summary: 'function(date: dayjs, dateString: string)'
            },
            category: 'DatePicker'
        }
    },
    dp_onOk: {
        name: 'onOk',
        description: 'Callback when click ok button',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'DatePicker'
        }
    },
    dp_onPanelChange: {
        name: 'onPanelChange',
        description: 'Callback function for panel changing',
        table: {
            type: {
                summary: 'function(value, mode)'
            },
            category: 'DatePicker'
        }
    }
};

const RangePickerArgs = {
    rp_allowEmpty: {
        name: 'allowEmpty',
        description: 'Allow start or end input leave empty',
        table: {
            type: {
                summary: '[boolean, boolean]'
            },
            category: 'RangePicker',
            defaultValue: {
                summary: '[false, false]'
            }
        }
    },
    rp_dateRender: {
        name: 'dateRender',
        description: 'Custom rendering function for date cells',
        table: {
            type: {
                summary: 'function(currentDate: dayjs, today: dayjs) => React.ReactNode'
            },
            category: 'RangePicker'
        }
    },
    rp_cellRender: {
        name: 'cellRender',
        description: 'Custom rendering function for picker cells',
        table: {
            type: {
                summary:
                    "(current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode"
            },
            category: 'RangePicker'
        }
    },
    rp_defaultPickerValue: {
        name: 'defaultPickerValue',
        description: 'To set default picker date - [dayjs](https://day.js.org/)',
        table: {
            type: {
                summary: '[dayjs, dayjs]'
            },
            category: 'RangePicker'
        }
    },
    rp_defaultValue: {
        name: 'defaultValue',
        description: 'To set default date - [dayjs](https://day.js.org/)',
        table: {
            type: {
                summary: '[dayjs, dayjs]'
            },
            category: 'RangePicker'
        }
    },
    rp_disabled: {
        name: 'disabled',
        description: 'If disable start or end',
        table: {
            type: {
                summary: '[boolean, boolean]'
            },
            category: 'RangePicker'
        }
    },
    rp_disabledTime: {
        name: 'disabledTime',
        description: 'To specify the time that cannot be selected',
        table: {
            type: {
                summary: 'function(date: dayjs, partial: start | end)'
            },
            category: 'RangePicker'
        }
    },
    rp_format: {
        name: 'format',
        description: 'To set the date format. refer to [dayjs#format](https://day.js.org/docs/en/display/format)',
        table: {
            type: {
                summary: 'formatType'
            },
            category: 'RangePicker',
            defaultValue: {
                summary: 'YYYY-MM-DD HH:mm:ss'
            }
        }
    },
    rp_presets: {
        name: 'presets',
        description: 'The preset ranges for quick selection',
        table: {
            type: {
                summary: '{ label: React.ReactNode, value: (Dayjs | (() => Dayjs))[] }[]'
            },
            category: 'RangePicker'
        }
    },
    rp_renderExtraFooter: {
        name: 'renderExtraFooter',
        description: 'Render extra footer in panel',
        table: {
            type: {
                summary: '() => React.ReactNode'
            },
            category: 'RangePicker'
        }
    },
    rp_separator: {
        name: 'separator',
        description: 'Set separator between inputs',
        table: {
            type: {
                summary: 'React.ReactNode'
            },
            category: 'RangePicker',
            defaultValue: {
                summary: '<SwapRightOutlined />'
            }
        }
    },
    rp_showTime: {
        name: 'showTime',
        description: 'To provide an additional time selection',
        table: {
            type: {
                summary: 'object | boolean'
            },
            category: 'RangePicker'
        }
    },
    rp_showTimeDefaultValue: {
        name: 'showTime.defaultValue',
        description: 'To set default time of selected date',
        table: {
            type: {
                summary: 'dayjs[]'
            },
            category: 'RangePicker',
            defaultValue: {
                summary: '[dayjs(), dayjs()]'
            }
        }
    },
    rp_value: {
        name: 'value',
        description: 'To set date',
        table: {
            type: {
                summary: '[dayjs, dayjs]'
            },
            category: 'RangePicker'
        }
    },
    rp_onCalendarChange: {
        name: 'onCalendarChange',
        description: 'Callback function, can be executed when the start time or the end time of the range is changing',
        table: {
            type: {
                summary: 'function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:start|end })'
            },
            category: 'RangePicker'
        }
    },
    rp_onChange: {
        name: 'onChange',
        description: 'Callback function, can be executed when the selected time is changing',
        table: {
            type: {
                summary: 'function(dates: [dayjs, dayjs], dateStrings: [string, string])'
            },
            category: 'RangePicker'
        }
    }
};

export const DatePickerArgTypes = {
    ...CommonArgs,
    ...DatePickerArgs,
    ...RangePickerArgs
};

export const Template = ({...args}) => {
    return (
        <KitSpace direction="vertical">
            <KitDatePicker {...args} />
            <KitDatePicker.RangePicker {...args} />
        </KitSpace>
    );
};
