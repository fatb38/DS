import React from 'react';
import {KitGrid} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';
import {CSSProperties} from 'styled-components';

const ColDemoStyle: CSSProperties = {
    background: '#1677ff',
    minHeight: '40px',
    lineHeight: '40px',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 0
};

const ColDemoOddStyle: CSSProperties = {
    ...ColDemoStyle,
    background: '#1677ffbf'
};

const getCols = (cols: number) =>
    Array(cols)
        .fill(true)
        .map((_, i) => (
            <KitGrid.Col key={i} style={{height: '40px'}} align="center">
                <div style={i % 2 === 0 ? ColDemoOddStyle : ColDemoStyle}>
                    <KitTypography.Text color="white">Col {i + 1}</KitTypography.Text>
                </div>
            </KitGrid.Col>
        ));

const App = () => {
    const {theme} = useKitTheme();

    return (
        <>
            {theme.breakpoints.map((breakpoint, i) => (
                <div key={i} style={{padding: 'calc(var(--general-spacing-xs) * 1px) 0'}}>
                    <KitTypography.Text>
                        {breakpoint} ({i < theme.breakpoints.length - 1 ? '<' : '>='} {theme.grid[breakpoint].width}px)
                    </KitTypography.Text>
                    <KitGrid.Row
                        breakpoint={breakpoint}
                        style={{
                            width: theme.grid[breakpoint].width + 'px',
                            height: '60px',
                            border: '1px solid var(--general-utilities-border)',
                            padding: 'calc(var(--general-spacing-xs) * 1px) 0',
                            boxSizing: 'border-box'
                        }}
                    >
                        {getCols(theme.grid[breakpoint].columns)}
                    </KitGrid.Row>
                    <KitTypography.Text>
                        {breakpoint} ({i < theme.breakpoints.length - 1 ? '<' : '>='} {theme.grid[breakpoint].width}px)
                        menuOpen=true
                    </KitTypography.Text>
                    <KitGrid.Row
                        breakpoint={breakpoint}
                        menuOpen
                        style={{
                            width: theme.grid[breakpoint].width + 'px',
                            height: '60px',
                            border: '1px solid var(--general-utilities-border)',
                            padding: 'calc(var(--general-spacing-xs) * 1px) 0',
                            boxSizing: 'border-box'
                        }}
                    >
                        {getCols(theme.grid[breakpoint].columns)}
                    </KitGrid.Row>
                </div>
            ))}
        </>
    );
};

export default App;
