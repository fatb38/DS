import React from 'react';
import {KitGrid} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';

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

const sideMenu = {
    open: false
};

const App = () => {
    const {theme} = useKitTheme();

    return (
        <KitGrid
            breakpoint="s"
            sideMenuProps={sideMenu}
            style={{
                border: '1px solid var(--general-utilities-border)',
                width: theme.grid['xs'].width + 'px'
            }}
        >
            <KitGrid.Row
                style={{
                    padding: 'calc(var(--general-spacing-xs) * 1px) 0'
                }}
            >
                {getCols(6)}
            </KitGrid.Row>
        </KitGrid>
    );
};

export default App;
