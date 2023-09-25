import type {FunctionComponent} from 'react';
import React, {Fragment} from 'react';
import {Placeholder} from '@storybook/components';
import {Item} from './Item';
import {ReportProps} from './types';

export const Report: FunctionComponent<ReportProps> = ({id, items, empty, type}) => (
  <Fragment>
    {items && items.length ? (
      items.map((item) => <Item id={id} item={item} key={`${type}:${item.id}`} type={type} />)
    ) : (
      <Placeholder key="placeholder">{empty}</Placeholder>
    )}
  </Fragment>
);
