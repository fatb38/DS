import type { FC } from 'react';
import React, { Fragment } from 'react';
import { Placeholder } from '@storybook/components';
import type { Result } from 'axe-core';

import { Item } from './Item';

import type { RuleType } from '../A11YPanel';

export interface ReportProps {
  id: string;
  items: Result[];
  empty: string;
  type: RuleType;
}

export const Report: FC<ReportProps> = ({ id, items, empty, type }) => (
  <Fragment>
    {items && items.length ? (
      items.map((item) => <Item id={id} item={item} key={`${type}:${item.id}`} type={type} />)
    ) : (
      <Placeholder key="placeholder">{empty}</Placeholder>
    )}
  </Fragment>
);
