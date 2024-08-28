import React from 'react';
import {KitGrid} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import {KitTypography} from '@kit/General';

const App = () => {
    const {theme} = useKitTheme();

    return (
        <>
            <KitGrid.Row
                breakpoint="m"
                style={{
                    width: theme.grid['m'].width + 'px',
                    border: '1px solid var(--general-utilities-border)',
                    height: '100px',
                    padding: 'calc(var(--general-spacing-xs) * 1px) 0',
                    boxSizing: 'border-box'
                }}
            >
                <KitGrid.Col style={{height: '40px'}} align="center" span={2}>
                    <div className="col-demo odd">
                        <KitTypography.Text color="white">Col 1 span 2</KitTypography.Text>
                    </div>
                </KitGrid.Col>
                <KitGrid.Col style={{height: '40px'}} align="center" alignSelf="center">
                    <div className="col-demo odd">
                        <KitTypography.Text color="white">Col 2</KitTypography.Text>
                    </div>
                </KitGrid.Col>
                <KitGrid.Col style={{height: '40px'}} align="center" alignSelf="end">
                    <div className="col-demo odd">
                        <KitTypography.Text color="white">Col 3</KitTypography.Text>
                    </div>
                </KitGrid.Col>
                <KitGrid.Col style={{height: '40px'}} align="center" alignSelf="end" col={7}>
                    <div className="col-demo odd">
                        <KitTypography.Text color="white">Col 4</KitTypography.Text>
                    </div>
                </KitGrid.Col>
            </KitGrid.Row>
        </>
    );
};

export default App;
