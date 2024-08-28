import React, {useState} from 'react';
import {KitGrid, KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';
import {KitSelect, KitSwitch} from '@kit/DataEntry';

const getCols = (cols: number) =>
    Array(cols)
        .fill(true)
        .map((_, i) => (
            <KitGrid.Col key={i} style={{height: '40px'}} align="center">
                <div className={`col-demo ${i % 2 === 0 ? 'odd' : ''}`}>
                    <KitTypography.Text color="white">Col {i + 1}</KitTypography.Text>
                </div>
            </KitGrid.Col>
        ));

const getBreakpointsOptions = (breakpoints: string[]) =>
    breakpoints.map(breakpoint => ({
        label: breakpoint,
        value: breakpoint
    }));

const App = () => {
    const {theme} = useKitTheme();
    const [breakpoint, setBreakpoint] = useState(theme.breakpoints[0]);
    const [menuOpen, setMenuopen] = useState(false);

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitSelect
                    options={getBreakpointsOptions(theme.breakpoints)}
                    defaultValue={breakpoint}
                    onChange={(value: string) => setBreakpoint(value)}
                />
                <div>
                    <KitSwitch defaultValue={menuOpen} onChange={checked => setMenuopen(checked)} /> menu open
                </div>
            </KitSpace>
            <div style={{padding: 'calc(var(--general-spacing-xs) * 1px) 0'}}>
                <KitGrid.Row
                    breakpoint={breakpoint}
                    menuOpen={menuOpen}
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
        </KitSpace>
    );
};

export default App;
