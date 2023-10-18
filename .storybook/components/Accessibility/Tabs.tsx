import * as React from 'react';
import {styled} from '@storybook/theming';
import type {NodeResult, Result} from 'axe-core';
import {useResizeDetector} from 'react-resize-detector';
import HighlightToggle from './Report/HighlightToggle';
import {AccessibilityContext} from './AccessibilityProvider';
import {TabsProps} from './types';

const Container = styled.div({
    width: '100%',
    position: 'relative',
    minHeight: '100%'
});

const HighlightToggleLabel = styled.label(({theme}) => ({
    cursor: 'pointer',
    userSelect: 'none',
    color: theme.color.dark
}));

const GlobalToggle = styled.div<{elementWidth: number}>(({elementWidth, theme}) => {
    const maxWidthBeforeBreak = 450;
    return {
        cursor: 'pointer',
        fontSize: 13,
        lineHeight: '20px',
        padding: elementWidth > maxWidthBeforeBreak ? '0 15px 0 0' : '0 0px 0 15px',
        height: '40px',
        border: 'none',
        marginTop: elementWidth > maxWidthBeforeBreak ? -40 : 0,
        float: elementWidth > maxWidthBeforeBreak ? 'right' : 'left',
        display: 'flex',
        alignItems: 'center',
        width: elementWidth > maxWidthBeforeBreak ? 'auto' : '100%',
        borderBottom: elementWidth > maxWidthBeforeBreak ? 'none' : `1px solid ${theme.appBorderColor}`,

        input: {
            marginLeft: 10,
            marginRight: 0,
            marginTop: -1,
            marginBottom: 0
        }
    };
});

const Item = styled.button<{active?: boolean}>(
    ({theme}) => ({
        textDecoration: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        fontWeight: theme.typography.weight.bold,
        fontSize: theme.typography.size.s2 - 1,
        lineHeight: 1,
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',

        '&:focus': {
            outline: '0 none',
            borderBottom: `3px solid ${theme.color.secondary}`
        }
    }),
    ({active, theme}) =>
        active
            ? {
                  opacity: 1,
                  borderBottom: `3px solid ${theme.color.secondary}`
              }
            : {}
);

const TabsWrapper = styled.div({});

const List = styled.div(({theme}) => ({
    boxShadow: `${theme.appBorderColor} 0 -1px 0 0 inset`,
    background: theme.background.app,
    display: 'flex',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap'
}));

function retrieveAllNodesFromResults(items: Result[]): NodeResult[] {
    return items.reduce((acc, item) => acc.concat(item.nodes), [] as NodeResult[]);
}

export const Tabs: React.FunctionComponent<TabsProps> = ({id, tabs}) => {
    const {ref, width} = useResizeDetector({
        refreshMode: 'debounce',
        handleHeight: false,
        handleWidth: true
    });
    const {results, setTab} = React.useContext(AccessibilityContext);
    const resultSet = results[id];
    const activeTab = resultSet?.tab;

    const handleToggle = React.useCallback(
        (event: React.SyntheticEvent) => {
            setTab(id, parseInt(event.currentTarget.getAttribute('data-index') ?? '', 10));
        },
        [setTab, id]
    );

    const highlightToggleId = `${tabs[activeTab].type}-global-checkbox`;
    const highlightLabel = `Highlight results`;

    return (
        <Container ref={ref}>
            <List>
                <TabsWrapper>
                    {tabs.map((tab, index) => (
                        <Item key={index} data-index={index} active={activeTab === index} onClick={handleToggle}>
                            {tab.label}
                        </Item>
                    ))}
                </TabsWrapper>
            </List>
            {tabs[activeTab].items.length > 0 ? (
                <GlobalToggle elementWidth={width ?? 451}>
                    <HighlightToggleLabel htmlFor={highlightToggleId}>{highlightLabel}</HighlightToggleLabel>
                    <HighlightToggle
                        id={id}
                        toggleId={highlightToggleId}
                        elementsToHighlight={retrieveAllNodesFromResults(tabs[activeTab].items)}
                    />
                </GlobalToggle>
            ) : null}
            {tabs[activeTab].panel}
        </Container>
    );
};
