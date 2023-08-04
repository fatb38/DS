import React, { useState } from "react";

import { KitTag } from "@kit/DataEntry/";

const color = ["default", "green", "red", "blue", "blueInvert"];

const TagArgTypes = {
    label: {
        name: "label",
        control: {
            type: "text",
            value: "Label",
        },
        description: "label of the tag (unused in Tag.Input)",
        table: {
            type: {
                summary: "string",
            },
            defaultValue: { summary: "Label" },
            category: "Tag",
            subcategory: "For testing only",
        },
        defaultValue: "Label",
    },
    tagInput: {
        name: "show in input",
        control: {
            type: "boolean",
        },
        description: "show tag in an input (for teting only)",
        table: {
            type: {
                summary: "boolean",
            },
            category: "Tag",
            subcategory: "For testing only",
        },
    },
    closable: {
        name: "closable",
        control: { type: "boolean" },
        description: "Whether the Tag can be closed",
        table: {
            type: {
                summary: "boolean",
            },
            defaultValue: { summary: false },
            category: "Tag",
        },
        defaultValue: false,
    },
    color: {
        name: "color",
        description: "Set a color",
        options: color,
        control: {
            type: "select",
            defaultValue: "default",
        },
        table: {
            type: {
                summary: "default | red | green | blue | blueInvert",
            },
            category: "Tag",
        },
    },
    onClose: {
        name: "onClose",
        description: "Callback executed when tag is closed",
        table: {
            type: {
                summary: "'(e) => void'",
            },
            defaultValue: { summary: "-" },
            category: "Tag",
        },
    },
    options: {
        name: "options",
        description: "List of tags to display in dropdown - string[]",
        control: {
            type: "text",
            value: "Tag 1,Tag 2,Tag 3",
        },
        table: {
            type: {
                summary: "string[]",
            },
            defaultValue: { summary: null },
            category: "Tag.Input",
        },
    },
    value: {
        name: "value",
        description: "List of selected tags - string[]",
        table: {
            type: {
                summary: "string[]",
            },
            defaultValue: { summary: null },
            category: "Tag.Input",
        },
    },
    placeholder: {
        name: "placeholder",
        control: {
            type: "text",
            value: "Rechercher",
        },
        description: "Text to display as placeholder",
        table: {
            type: {
                summary: "string",
            },
            defaultValue: { summary: "-" },
            category: "Tag.Input",
        },
        defaultValue: "Rechercher",
    },
    tokenSeparators: {
        name: "tokenSeparators",
        description: "Separator used to tokenize",
        table: {
            type: {
                summary: "string[]",
            },
            defaultValue: { summary: "[,]" },
            category: "Tag.Input",
        },
    },
    notFoundContent: {
        name: "notFoundContent",
        description: "Specify content to show when no result matches",
        table: {
            type: {
                summary: "ReactNode",
            },
            defaultValue: { summary: "Not found" },
            category: "Tag.Input",
        },
    },
    placement: {
        name: "placement",
        control: { type: "select" },
        options: ["bottomLeft", "bottomRight", "TopLeft", "topRight"],
        description: "The position where the selection box pops up",
        table: {
            type: {
                summary: "`bottomLeft` `bottomRight` `topLeft` `topRight`",
            },
            defaultValue: { summary: "bottomLeft" },
            category: "Tag.Input",
        },
    },
    onSearch: {
        name: "onSearch",
        description:
            "Callback executed when typing in input (retrieve a list of possible values)",
        table: {
            type: {
                summary: "'(value) => string[]'",
            },
            defaultValue: { summary: "-" },
            category: "Tag.Input",
        },
    },
};

export const argTypes = {
    ...TagArgTypes,
};

export const Template = ({ label, tagInput, ...args }) => {
    const {
        options,
        value,
        placeholder,
        tokenSeparators,
        notFoundContent,
        placement,
        onSearch,
        ...tagArgs
    } = args;
    const [opts, setOpts] = useState<string[]>([]);

    const onInternalSearch = (value) => {
        const optionsArray = (options || argTypes.options.control.value)
            .split(",")
            .filter((v) => v !== value);
        setOpts([...optionsArray, value]);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    if (tagInput) {
        return (
            <KitTag.Input
                options={opts}
                value={value}
                placement={placement}
                onSearch={onInternalSearch}
                placeholder={placeholder || argTypes.placeholder.control.value}
                onChange={handleChange}
                style={{ width: "100%" }}
            />
        );
    }

    return (
        <KitTag {...tagArgs}>{label || argTypes.label.control.value}</KitTag>
    );
};
