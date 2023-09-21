import React, {useCallback, useContext, useMemo} from 'react';
import {styled} from '@storybook/theming';
import {ActionBar, Icons, ScrollArea} from '@storybook/components';
import {Report} from './Report';
import {Tabs} from './Tabs';
import {AccessibilityContext} from './AccessibilityProvider';

export enum RuleType {
  VIOLATION,
  PASS,
  INCOMPLETION,
}

const Icon = styled(Icons)({
  height: 12,
  width: 12,
  marginRight: 4,
});

const RotatingIcon = styled(Icon)(({theme}) => ({
  animation: `${theme.animation.rotate360} 1s linear infinite;`,
}));

const Passes = styled.span(({theme}) => ({
  color: theme.color.positiveText,
}));

const Violations = styled.span(({theme}) => ({
  color: theme.color.negativeText,
}));

const Incomplete = styled.span(({theme}) => ({
  color: theme.color.warningText,
}));

const Centered = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const A11YPanel: React.FunctionComponent<{
  id: string
}> = ({id}) => {
  const {results, rerun} = useContext(AccessibilityContext);

  const resultSet = results[id];

  const handleManual = useCallback(() => {
    if (resultSet && resultSet.status !== "manual") {
      rerun(id);
    }
  }, [id, rerun, resultSet]);

  const manualActionItems = useMemo(
    () => [{title: 'Run test', onClick: handleManual}],
    [handleManual]
  );
  const readyActionItems = useMemo(
    () => [
      {
        title:
          resultSet && resultSet.status === 'done' ? (
            'Rerun tests'
          ) : (
            <>
              <Icon icon="check" /> Tests completed
            </>
          ),
        onClick: handleManual,
     },
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
        type: RuleType.VIOLATION,
      },
      {
        label: <Passes>{passes?.length|| 0} Passes</Passes>,
        panel: (
          <Report id={id} items={passes} type={RuleType.PASS} empty="No accessibility checks passed." />
        ),
        items: passes,
        type: RuleType.PASS,
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
        type: RuleType.INCOMPLETION,
      },
    ];
  }, [resultSet, id]);

  return (
    <>
      {(!resultSet || resultSet.status === 'initial') && <Centered>Initializing...</Centered>}
      {resultSet && resultSet.status === 'manual' && (
        <>
          <Centered>Manually run the accessibility scan.</Centered>
          <ActionBar key="actionbar" actionItems={manualActionItems} />
        </>
      )}
      {resultSet && resultSet.status === 'running' && (
        <Centered>
          <RotatingIcon icon="sync" /> Please wait while the accessibility scan is running ...
        </Centered>
      )}
      {resultSet && resultSet.status === "done" && (
        <>
          <ScrollArea vertical horizontal>
            <Tabs id={id} key="tabs" tabs={tabs} />
          </ScrollArea>
          <ActionBar key="actionbar" actionItems={readyActionItems} />
        </>
      )}
    </>
  );
};
