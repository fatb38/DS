import type {FunctionComponent} from 'react';
import {styled} from '@storybook/theming';
import {Rules} from './Rules';
import HighlightToggle from './HighlightToggle';
import {ElementProps, ElementsProps} from './types';

const Item = styled.li({
    fontWeight: 600
});

const ItemTitle = styled.span(({theme}) => ({
    borderBottom: `1px solid ${theme.appBorderColor}`,
    width: '100%',
    display: 'flex',
    paddingBottom: 6,
    marginBottom: 6,
    justifyContent: 'space-between'
}));

const HighlightToggleElement = styled.span({
    fontWeight: 'normal',
    alignSelf: 'center',
    paddingRight: 15,
    input: {
        margin: 0,
        display: 'block'
    }
});

const Element: FunctionComponent<ElementProps> = ({id, element, type}) => {
    const {any, all, none} = element;
    const rules = [...any, ...all, ...none];
    const highlightToggleId = `${type}-${element.target[0]}`;

    return (
        <Item>
            <ItemTitle>
                {element.target[0]}
                <HighlightToggleElement>
                    <HighlightToggle id={id} toggleId={highlightToggleId} elementsToHighlight={[element]} />
                </HighlightToggleElement>
            </ItemTitle>
            <Rules rules={rules} />
        </Item>
    );
};

export const Elements: FunctionComponent<ElementsProps> = ({id, elements, type}) => (
    <ol>
        {elements.map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Element id={id} element={element} key={index} type={type} />
        ))}
    </ol>
);
