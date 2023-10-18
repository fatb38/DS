import axe from 'axe-core';
import type {Result} from 'axe-core';
import {RuleType} from './A11YPanel';

export type Status = 'initial' | 'manual' | 'running' | 'done' | 'invalidated';

export type setAxeRunningFn = (isRunning: boolean) => void;
export type setResultsFn = (results: Results) => void;
export type getItemFn = () => QueueItem | undefined;

export interface QueueItem {
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

export interface Results {
    [id: string]: ResultSet;
}

export interface IAxeContext {
    results: Results;
    active: boolean;
    addItem: (id: string, nodeId: string) => void;
    rerun: (id: string) => void;
    invalidate: (id: string, nodeId: string) => void;
    toggleHighlight: (id: string, target: string[], highlight: boolean) => void;
    clearHighlights: (id: string) => void;
    setTab: (id: string, index: number) => void;
}

export interface TabsProps {
    id: string;
    tabs: {
        label: JSX.Element;
        panel: JSX.Element;
        items: Result[];
        type: RuleType;
    }[];
}
