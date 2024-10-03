import {CSSProperties} from 'react';

export const column: CSSProperties = {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '16px 0px'
};

export const OddColumn: CSSProperties = {
    ...column,
    backgroundColor: 'var(--general-colors-primary-400)'
};

export const EvenColumn: CSSProperties = {
    ...column,
    backgroundColor: 'var(--general-colors-primary-300)'
};
