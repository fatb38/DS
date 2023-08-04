import React from "react";
import { KitInputNumber } from "@kit/DataEntry/";
import { KitSpace } from "@kit/Layout/";
import { CheckCircleOutlined, SearchOutlined } from "@ant-design/icons";

export const InputNumberArgTypes = {
    autoFocus: {
        name: "autoFocus",
        description: "If get focus when component mounted",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            category: "InputNumber",
            defaultValue: { summary: false },
        },
        defaultValue: false,
    },
    controls: {
        name: "controls",
        description: "Whether to show `+-` controls, or set custom arrows icon",
        control: { type: "boolean" },
        table: {
            type: {
                summary:
                    "boolean | { upIcon?: React.ReactNode; downIcon?: React.ReactNode; }",
            },
            category: "InputNumber",
        },
    },
    decimalSeparator: {
        name: "decimalSeparator",
        description: "Decimal separator",
        control: { type: "text" },
        table: {
            type: {
                summary: "string",
            },
            category: "InputNumber",
        },
    },
    defaultValue: {
        name: "defaultValue",
        description: "The initial value",
        control: { type: "number" },
        table: {
            type: {
                summary: "number",
            },
            category: "InputNumber",
        },
    },
    disabled: {
        name: "disabled",
        description: "If disable the input",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            category: "InputNumber",
            defaultValue: { summary: false },
        },
        defaultValue: false,
    },
    formatter: {
        name: "formatter",
        description: "Specifies the format of the value presented",
        table: {
            type: {
                summary:
                    "function(value: number | string, info: { userTyping: boolean, input: string }): string",
            },
            category: "InputNumber",
        },
    },
    keyboard: {
        name: "keyboard",
        description: "If enable keyboard behavior",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            category: "InputNumber",
            defaultValue: { summary: true },
        },
        defaultValue: true,
    },
    max: {
        name: "max",
        description: "The max value	",
        control: { type: "number" },
        table: {
            type: {
                summary: "number",
            },
            category: "InputNumber",
            defaultValue: { summary: "Number.MAX_SAFE_INTEGER" },
        },
        defaultValue: true,
    },
    min: {
        name: "min",
        description: "The min value	",
        control: { type: "number" },
        table: {
            type: {
                summary: "number",
            },
            category: "InputNumber",
            defaultValue: { summary: "Number.MIN_SAFE_INTEGER" },
        },
        defaultValue: true,
    },
    parser: {
        name: "parser",
        description: "Specifies the value extracted from formatter",
        table: {
            type: {
                summary: "function(string): number",
            },
            category: "InputNumber",
        },
    },
    precision: {
        name: "precision",
        description:
            "The precision of input value. Will use `formatter` when config of `formatter`",
        control: { type: "number" },
        table: {
            type: {
                summary: "number",
            },
            category: "InputNumber",
        },
    },
    readOnly: {
        name: "readOnly",
        description: "If readonly the input",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            category: "InputNumber",
            defaultValue: { summary: false },
        },
        defaultValue: false,
    },
    status: {
        name: "status",
        description: "Set validation status",
        options: ["", "error", "warning"],
        control: { type: "select" },
        table: {
            type: {
                summary: "'error' | 'warning'",
            },
            category: "InputNumber",
        },
    },
    prefix: {
        name: "prefix",
        description:
            "Set the icon component of button (Not working for TextArea)",
        type: { name: "ReactNode", required: false },
        options: ["", "SearchOutlined", "CheckCircleOutlined"],
        control: {
            type: "select",
        },
        table: {
            type: {
                summary: "ReactNode",
            },
            category: "InputNumber",
        },
    },
    step: {
        name: "step",
        description:
            "The number to which the current value is increased or decreased. It can be an integer or decimal",
        control: { type: "number" },
        table: {
            type: {
                summary: "number | string",
            },
            category: "InputNumber",
            defaultValue: { summary: "1" },
        },
        defaultValue: "1",
    },
    stringMode: {
        name: "stringMode",
        description:
            "Set value as string to support high precision decimals. Will return string value by `onChange`",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            category: "InputNumber",
            defaultValue: { summary: false },
        },
        defaultValue: false,
    },
    value: {
        name: "value",
        description: "The current value	",
        control: { type: "number" },
        table: {
            type: {
                summary: "number",
            },
            category: "InputNumber",
        },
    },
    onChange: {
        name: "onChange",
        description: "The callback triggered when the value is changed",
        table: {
            type: {
                summary: "function(value: number | string | null)",
            },
            category: "InputNumber",
        },
    },
    onPressEnter: {
        name: "onPressEnter",
        description:
            "The callback function that is triggered when Enter key is pressed",
        table: {
            type: {
                summary: "function(e)",
            },
            category: "InputNumber",
        },
    },
    onStep: {
        name: "onStep",
        description:
            "The callback function that is triggered when click up or down buttons",
        table: {
            type: {
                summary:
                    "(value: number, info: { offset: number, type: 'up' | 'down' }) => void",
            },
            category: "InputNumber",
        },
    },
};

export const getIcon = (icon) => {
    switch (icon) {
        case "SearchOutlined":
            return <SearchOutlined rev={null} />;
        case "CheckCircleOutlined":
            return <CheckCircleOutlined rev={null} />;
        case "":
        default:
            return null;
    }
};

export const Template = ({ component, ...args }) => {
    const prefix = getIcon(args.prefix);

    return (
        <KitSpace direction="vertical">
            <KitInputNumber {...args} prefix={prefix} />
        </KitSpace>
    );
};

export const formatterDollar = (value) => {
    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatterPercent = (value) => {
    return `${value}%`;
};

export const parserDollar = (value) => {
    return value!.replace(/\$\s?|(,*)/g, "");
};

export const parserPercent = (value) => {
    return value!.replace("%", "");
};
