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

const App = () => {
    const {theme} = useKitTheme();

    return (
        <KitGrid
            breakpoint="xs"
            style={{
                border: '1px solid var(--general-utilities-border)'
            }}
        >
            <KitGrid.Row
                style={{
                    width: theme.grid['xxs'].width + 'px',
                    padding: 'calc(var(--general-spacing-xs) * 1px) 0',
                    boxSizing: 'border-box'
                }}
            >
                {getCols(6)}
            </KitGrid.Row>
        </KitGrid>
    );
};

export default App;
