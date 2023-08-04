import React from "react";
import { KitTypography } from "@kit/General/";
import { KitSpace } from "@kit/Layout/";

const components = ["Title", "Text", "Paragraph", "Link"];

export const argTypes = {
    component: {
        name: "component",
        description: "Choose the component to play with (not a prop)",
        options: components,
        control: {
            type: "select",
            defaultValue: "Paragraph",
        },
        table: {
            type: {
                summary: "-",
            },
        },
        defaultValue: "Paragraph",
    },
    content: {
        name: "component",
        description: "component content",
        control: {
            type: "text",
        },
        table: {
            type: {
                summary: "-",
            },
        },
        defaultValue: "This is the content",
    },
    disabled: {
        name: "disabled",
        control: { type: "boolean" },
        description: "Disabled content",
        table: {
            type: {
                summary: "boolean",
            },
            defaultValue: { summary: false },
            category: "Common",
        },
        defaultValue: false,
    },
    ellipsis: {
        name: "ellipsis",
        description:
            "Display ellipsis when text overflows, can configure rows and expandable by using object | boolean",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "object | boolean",
            },
            defaultValue: false,
            category: "Common",
        },
        defaultValue: false,
    },
    level: {
        name: "level",
        description:
            "Set content importance. Match with `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`",
        options: [1, 2, 3, 4, 5, 6, 7],
        control: {
            type: "select",
        },
        table: {
            type: {
                summary: "number",
            },
            defaultValue: 1,
            category: "Typography.Title",
        },
        defaultValue: 1,
    },
    copyable: {
        name: "copyable",
        description:
            "Whether to be copyable, customize it via setting an  boolean",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            defaultValue: false,
            category: "Common",
        },
        defaultValue: false,
    },
    onClick: {
        name: "onClick",
        description: "Set the handler to handle `click` event",
        table: {
            type: {
                summary: "(event: MouseEvent) => void",
            },
            defaultValue: { summary: "-" },
            category: "Common",
        },
        defaultValue: () => {},
    },
    type: {
        name: "type",
        description: "Content Type",
        options: ["", "secondary", "success", "warning", "danger"],
        control: {
            type: "select",
            required: false,
        },
        table: {
            type: {
                summary: "string",
            },
            defaultValue: "-",
            category: "Typography.Text, Typography.Paragraph, Typography.Link",
        },
        defaultValue: "-",
    },
    weight: {
        name: "weight",
        description: "Font weight",
        options: ["", "bold", "medium", "regular"],
        control: {
            type: "select",
            required: false,
        },
        table: {
            type: {
                summary: "string",
            },
            defaultValue: "medium",
            category: "Typography.Text, Typography.Paragraph, Typography.Link",
        },
        defaultValue: "medium",
    },
    size: {
        name: "size",
        description: "Content Size",
        options: ["", "large", "medium", "small"],
        control: {
            type: "select",
            required: false,
        },
        table: {
            type: {
                summary: "string",
            },
            defaultValue: "medium",
            category: "Typography.Text, Typography.Paragraph, Typography.Link",
        },
        defaultValue: "medium",
    },
};

const getComponent = (component, content, args) => {
    switch (component) {
        case "Title":
            return (
                <KitTypography.Title {...args}>{content}</KitTypography.Title>
            );
        case "Text":
            return <KitTypography.Text {...args}>{content}</KitTypography.Text>;
        case "Link":
            return <KitTypography.Link {...args}>{content}</KitTypography.Link>;
        case "Paragraph":
        default:
            return (
                <KitTypography.Paragraph {...args}>
                    {content}
                </KitTypography.Paragraph>
            );
    }
};

export const Template = ({ component, content, ...args }) => {
    return (
        <KitSpace direction="vertical">
            {getComponent(component, content, args)}
        </KitSpace>
    );
};
