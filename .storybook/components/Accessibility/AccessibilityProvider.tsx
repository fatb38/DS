import React, { ReactNode, useContext, useEffect, useRef, useState } from "react";
import {merge} from 'lodash';
import { convert, themes } from '@storybook/theming';
import { addons } from '@storybook/preview-api';
import { HIGHLIGHT } from '@storybook/addon-highlight';

import type {Result} from 'axe-core';
import axe from 'axe-core';


const channel = addons.getChannel();

type Status = 'initial' | 'manual' | 'running' | 'done';

interface QueueItem {
    id: string;
    nodeId: axe.Selector;
}

export interface ResultSet {
    nodeId: string;
    status: Status;
    passes: Result[];
    violations: Result[];
    incomplete: Result[];
    highlighted: string[];
    tab: number;
}

interface Results {
    [id: string]: ResultSet
}

const defaultResults: ResultSet = {
    status: 'initial',
    nodeId: "",
    highlighted: [],
    tab: 0,
    passes: [],
    violations: [],
    incomplete: [],
}

interface IAxeContext {
    results: Results;
    active: boolean;
    addItem: (id: string, nodeId: string) => void;
    rerun: (id: string) => void;
    toggleHighlight: (id: string, target: string[], highlight: boolean) => void;
    clearHighlights: (id: string) => void;
    setTab: (id: string, index: number) => void;
}

const defaultContext: IAxeContext = {
    results: {},
    active: false,
    addItem: () => {},
    rerun: () => {},
    toggleHighlight: () => {},
    clearHighlights: () => {},
    setTab: () => {},
};

export const AccessibilityContext = React.createContext<IAxeContext>(defaultContext);

type setAxeRunningFn = (isRunning: boolean) => void;
type setResultsFn = (results: Results) => void;
type getItemFn = () => QueueItem | undefined;

const colorsByType = [
    convert(themes.light).color.negative, // VIOLATION,
    convert(themes.light).color.positive, // PASS,
    convert(themes.light).color.warning, // INCOMPLETION,
];

const processNextItem = async (results: Results, setResults: setResultsFn, setAxeRunning: setAxeRunningFn, getItem: getItemFn) => {
    const item = getItem();
    if (!item) {
        setAxeRunning(false);
        return;
    }
    const {id, nodeId} = item;
    if (results[id] && (results[id].status === 'initial' || results[id].status === "manual")) {
        setResults({
            ...results,
            [item.id]: {
                ...results[id],
                status: 'running'
            }
        });
        axe.reset();
        axe.configure({ allowedOrigins: ['<unsafe_all_origins>'] });

        const htmlElement = document.querySelector("#" + nodeId as string);
        if (htmlElement) {
            setAxeRunning(true);
            const axeResults = await axe.run(htmlElement, {reporter: "v2"});
            const mergedResults = {
                ...results,
                [id]: {
                    ...results[id],
                    status: 'done' as Status,
                    passes: axeResults.passes,
                    violations: axeResults.violations,
                    incomplete: axeResults.incomplete
                }
            };
            setResults(mergedResults);
        }
    } else {
        processNextItem(results, setResults, setAxeRunning, getItem);
    }
};

const AccessibilityProvider: React.FC<{
    children: ReactNode;
    active?: boolean;
}> = ({children, active}) => {
    const axeRunning = useRef<boolean>(false);
    const [results, setResults] = useState<Results>({});
    const queue = useRef<QueueItem[]>([]);
    const currentItem = useRef<string | null>(null);

    const setAxeRunning = (isRunning: boolean) => {
        axeRunning.current = isRunning;
    };

    const shiftQueue = () =>  {
        const item = queue.current.shift();
        currentItem.current = item?.id || null;
        return item;
    }

    useEffect(() => {
        const current = currentItem.current;
        if (current && results[current] && results[current].status === 'done') {
            processNextItem(results, setResults, setAxeRunning, shiftQueue);
        } else if (!current && Object.keys(results).length > 0) {
            processNextItem(results, setResults, setAxeRunning, shiftQueue);
        }
    }, [results]);

    const rerun = (id: string) => {
        if (results[id]) {
            setResults({
                ...results,
                [id]: {
                    ...results[id],
                    status: 'manual'
                }
            });
            queue.current = [
                {id, nodeId: results[id].nodeId},
                ...queue.current
            ];
        }
    };

    const addItem = (id: string, nodeId: string) => {
        if (!results[id]) {
            const mergedResults = merge(
                results,
                {
                    [id]: {
                        ...defaultResults,
                        nodeId
                    }
                }
            );
            setResults(mergedResults);
            queue.current.push({id, nodeId: nodeId as unknown as axe.Selector});
        }
    };

    const handleToggleHighlight = React.useCallback((id: string, target: string[], highlight: boolean) => {
        let highlighted: string[] = [];
        let activeTab: number = 0;
        setResults((prevResults) => {
            highlighted = highlight
                ? [...prevResults[id].highlighted, ...target]
                : prevResults[id].highlighted.filter((t) => !target.includes(t));
            activeTab = prevResults[id].tab;
            return {
                ...results,
                [id]: {
                    ...results[id],
                    highlighted
                }
            };
        });
        channel.emit(HIGHLIGHT, { elements: highlighted, color: colorsByType[activeTab] });
      }, [results, setResults]);

    const handleClearHighlights = React.useCallback((id: string) => {
        setResults({
            ...results,
            [id]: {
                ...results[id],
                highlighted: []
            }
        });
    }, [results, setResults]);



    const handleSetTab = React.useCallback((id: string, index: number) => {
        setResults({
            ...results,
            [id]: {
                ...results[id],
                tab: index,
                highlighted: []
            }
        });
    }, [results, setResults]);

    return <AccessibilityContext.Provider value={{
        results: {...results},
        active,
        addItem,
        rerun,
        setTab: handleSetTab,
        toggleHighlight: handleToggleHighlight,
        clearHighlights: handleClearHighlights,
    }}>
        {children}
    </AccessibilityContext.Provider>
};

export default AccessibilityProvider;