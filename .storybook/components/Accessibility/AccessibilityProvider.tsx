import React, {ReactNode, useEffect, useRef, useState} from "react";
import axe from 'axe-core';
import {merge} from 'lodash';
import {convert, themes} from '@storybook/theming';
import {addons} from '@storybook/preview-api';
import {HIGHLIGHT} from '@storybook/addon-highlight';
import {
    Status,
    QueueItem,
    ResultSet,
    Results,
    IAxeContext,
    setAxeRunningFn,
    setResultsFn,
    getItemFn
} from "./types";


const channel = addons.getChannel();

const defaultResults: ResultSet = {
    status: 'initial',
    nodeId: "",
    highlighted: [],
    tab: 0,
    passes: [],
    violations: [],
    incomplete: [],
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
        axe.configure({allowedOrigins: ['<unsafe_all_origins>'] });

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

const AccessibilityProvider: React.FunctionComponent<{
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
        currentItem.current = item?.id ?? null;
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
        channel.emit(HIGHLIGHT, {elements: highlighted, color: colorsByType[activeTab] });
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
        active: !!active,
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