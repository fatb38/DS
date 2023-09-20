import React, { useContext } from 'react';
import { styled } from '@storybook/theming';

import type { NodeResult } from 'axe-core';
import { AccessibilityContext } from '../AccessibilityProvider';

interface ToggleProps {
  id: string;
  elementsToHighlight: NodeResult[];
  toggleId?: string;
}

enum CheckBoxStates {
  CHECKED,
  UNCHECKED,
  INDETERMINATE,
}

const Checkbox = styled.input<{ disabled: boolean }>(({ disabled }) => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
}));

function areAllRequiredElementsHighlighted(
  elementsToHighlight: NodeResult[],
  highlighted: string[]
): CheckBoxStates {
  const highlightedCount = elementsToHighlight.filter((item) =>
    highlighted.includes(item.target[0] as unknown as string)
  ).length;

  // eslint-disable-next-line no-nested-ternary
  return highlightedCount === 0
    ? CheckBoxStates.UNCHECKED
    : highlightedCount === elementsToHighlight.length
    ? CheckBoxStates.CHECKED
    : CheckBoxStates.INDETERMINATE;
}

const HighlightToggle: React.FC<ToggleProps> = ({ id, toggleId, elementsToHighlight = [] }) => {
  const { results,  toggleHighlight } = useContext(AccessibilityContext);
  const ResultSet = results[id];
  const checkBoxRef = React.useRef<HTMLInputElement>(null);
  const [checkBoxState, setChecked] = React.useState(
    areAllRequiredElementsHighlighted(elementsToHighlight, ResultSet?.highlighted)
  );

  React.useEffect(() => {
    const newState = areAllRequiredElementsHighlighted(elementsToHighlight, ResultSet?.highlighted);
    if (checkBoxRef.current) {
      checkBoxRef.current.indeterminate = newState === CheckBoxStates.INDETERMINATE;
    }
    setChecked(newState);
  }, [elementsToHighlight, ResultSet?.highlighted]);

  const handleToggle = React.useCallback((): void => toggleHighlight(
    id,
    elementsToHighlight.map((e) => e.target[0] as unknown as string),
    checkBoxState !== CheckBoxStates.CHECKED
  ), [elementsToHighlight, checkBoxState, toggleHighlight, id]);

  return (
    <Checkbox
      ref={checkBoxRef}
      id={toggleId}
      type="checkbox"
      aria-label="Highlight result"
      disabled={!elementsToHighlight.length}
      onChange={handleToggle}
      checked={checkBoxState === CheckBoxStates.CHECKED}
    />
  );
};

export default HighlightToggle;
