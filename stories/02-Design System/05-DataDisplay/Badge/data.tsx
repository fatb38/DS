import React from "react";
import { KitAvatar, KitBadge } from "@kit/DataDisplay/";
import { KitSpace } from "@kit/Layout/";

const status = ["error", "default", "success", "processing", "warning"];

const countColor = ["default", "green", "blue", "blueInvert", "gray"];

export const BadgeArgTypes = {
    count: {
        name: "count",
        description: "Number to show in badge",
        control: { type: "text" },
        table: {
            type: {
                summary: "ReactNode",
            },
            category: "Badge",
        },
    },
    dot: {
        name: "dot",
        description: "Whether to display a red dot instead of `count`",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            defaultValue: {
                summary: false,
            },
            category: "Badge",
        },
    },
    overflowCount: {
        name: "overflowCount",
        description: "Max count to show",
        control: { type: "number" },
        table: {
            type: {
                summary: "number",
            },
            defaultValue: {
                summary: 99,
            },
            category: "Badge",
        },
    },
    showZero: {
        name: "showZero",
        description: "Whether to show badge when `count` is zero",
        control: { type: "boolean" },
        table: {
            type: {
                summary: "boolean",
            },
            defaultValue: {
                summary: false,
            },
            category: "Badge",
        },
    },
    status: {
        name: "status",
        description: "Set Badge as a status dot",
        options: status,
        control: {
            type: "select",
            defaultValue: "error",
        },
        table: {
            type: {
                summary: "success | processing | default | error | warning",
            },
            category: "Badge",
        },
    },
    countColor: {
        name: "countColor",
        description: "Set Badge count a color",
        options: countColor,
        control: {
            type: "select",
            defaultValue: "default",
        },
        table: {
            type: {
                summary: "default | green | blue | blueInvert | gray",
            },
            category: "Badge",
        },
    },
    title: {
        name: "title",
        description: "Text to show when hovering over the badge",
        control: { type: "text" },
        table: {
            type: {
                summary: "string",
            },
            category: "Badge",
        },
    },
};

export const Template = ({ component, ...args }) => {
    return (
        <KitSpace>
            <KitBadge {...args} />
            <br />
            <br />
            <KitBadge {...args}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};
