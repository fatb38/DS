
import type { TagValue, CheckResult, Result, NodeResult } from 'axe-core';
import type { RuleType } from '../types';

export interface TagsProps {
    tags: TagValue[];
}

export interface RuleProps {
    rule: CheckResult;
}

export interface RulesProps {
    rules: CheckResult[];
}

export interface ElementsProps {
    id: string;
    elements: NodeResult[];
    type: RuleType;
}

export type BadgeType = 'positive' | 'negative' | 'neutral' | 'warning' | 'critical';

export interface ItemProps {
    id: string;
    item: Result;
    type: RuleType;
}

export interface InfoProps {
    item: Result;
}

export interface ReportProps {
    id: string;
    items: Result[];
    empty: string;
    type: RuleType;
}

export interface ToggleProps {
    id: string;
    elementsToHighlight: NodeResult[];
    toggleId?: string;
}

export interface ElementProps {
    id: string;
    element: NodeResult;
    type: RuleType;
}