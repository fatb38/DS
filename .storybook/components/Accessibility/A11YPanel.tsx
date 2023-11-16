import React, {FunctionComponent, useCallback, useContext, useEffect, useMemo} from 'react';
import {styled} from '@storybook/theming';
import {ActionBar, Icons, ScrollArea} from '@storybook/components';
import {Report} from './Report';
import {Tabs} from './Tabs';
import {AccessibilityContext} from './AccessibilityProvider';

export enum RuleType {
    VIOLATION,
    PASS,
    INCOMPLETION
}

const Icon = styled(Icons)({
    height: 12,
    width: 12,
    marginRight: 4
});

const RotatingIcon = styled(Icon)(({theme}) => ({
    animation: `${theme.animation.rotate360} 1s linear infinite;`
}));

const Passes = styled.span(({theme}) => ({
    color: theme.color.positiveText
}));

const Violations = styled.span(({theme}) => ({
    color: theme.color.negativeText
}));

const Incomplete = styled.span(({theme}) => ({
    color: theme.color.warningText
}));

const Centered = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem 0;

    a {
        cursor: pointer;
        font-size: 1rem;
    }
`;

export const A11YPanel: FunctionComponent<{
    id: string;
    onChanged: Function;
}> = ({id, onChanged}) => {
    const {results, rerun} = useContext(AccessibilityContext);

    const resultSet = results[id];

    const handleManual = useCallback(() => {
        if (resultSet && resultSet.status !== 'manual') {
            rerun(id);
        }
    }, [id, rerun, resultSet]);

    const manualActionItems = useMemo(() => [{title: 'Run test', onClick: handleManual}], [handleManual]);
    const readyActionItems = useMemo(
        () => [
            {
                title:
                    resultSet?.status === 'done' ? (
                        'Rerun tests'
                    ) : (
                        <>
                            <Icon icon="check" /> Tests completed
                        </>
                    ),
                onClick: handleManual
            }
        ],
        [resultSet, handleManual]
    );

    const tabs = useMemo(() => {
        const {passes, incomplete, violations} = resultSet ?? {};
        return [
            {
                label: <Violations>{violations?.length || 0} Violations</Violations>,
                panel: (
                    <Report
                        id={id}
                        items={violations}
                        type={RuleType.VIOLATION}
                        empty="No accessibility violations found."
                    />
                ),
                items: violations,
                type: RuleType.VIOLATION
            },
            {
                label: <Passes>{passes?.length || 0} Passes</Passes>,
                panel: <Report id={id} items={passes} type={RuleType.PASS} empty="No accessibility checks passed." />,
                items: passes,
                type: RuleType.PASS
            },
            {
                label: <Incomplete>{incomplete?.length || 0} Incomplete</Incomplete>,
                panel: (
                    <Report
                        id={id}
                        items={incomplete}
                        type={RuleType.INCOMPLETION}
                        empty="No accessibility checks incomplete."
                    />
                ),
                items: incomplete,
                type: RuleType.INCOMPLETION
            }
        ];
    }, [resultSet, id]);

    useEffect(() => {
        if (resultSet.status === 'done') {
            onChanged && onChanged(true);
        }
    }, [resultSet.status]);

    switch (resultSet?.status) {
        case 'invalidated':
            return (
                <Centered>
                    <a onClick={handleManual}>Click here to rerun tests...</a>
                </Centered>
            );
        case 'manual':
            return (
                <>
                    <Centered>Manually run the accessibility scan.</Centered>
                    <ActionBar key="actionbar" actionItems={manualActionItems} />
                </>
            );
        case 'running':
            return (
                <Centered>
                    <RotatingIcon icon="sync" /> Please wait while the accessibility scan is running ...
                </Centered>
            );
        case 'done':
            return (
                <>
                    <ScrollArea vertical horizontal>
                        <Tabs id={id} key="tabs" tabs={tabs} />
                    </ScrollArea>
                    <ActionBar key="actionbar" actionItems={readyActionItems} />
                </>
            );
        case 'initial':
        default:
            return <Centered>Initializing...</Centered>;
    }
};
