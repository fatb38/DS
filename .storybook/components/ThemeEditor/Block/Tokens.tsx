import React, {FunctionComponent, useCallback, useContext, useMemo, useRef} from 'react';
import Field, {StyledLinkButton} from './Field';
import Section, {StyledSection} from './Section';
import {EditorContext} from '../Context';
import {CollapseExpandObject, IEditorContext, IField, IItem, IToken, getItemsType} from '../types';
import {getThemeData, getValue} from '../util';

const getOrderedProperties = (properties: string[], item) => {
    const {propertiesA, propertiesB} = properties.reduce<{propertiesA: string[]; propertiesB: string[]}>(
        (acc, property) => {
            if ((item[property] as IItem)._type) {
                acc.propertiesB.push(property);
            } else {
                acc.propertiesA.push(property);
            }
            return acc;
        },
        {propertiesA: [], propertiesB: []}
    );
    return propertiesA.concat(propertiesB);
};

const Tokens: FunctionComponent<IToken> = ({path, level, onTokenChanged, addResetFunction, onResetSection}) => {
    const {fields, defaultTheme: theme} = useContext<IEditorContext>(EditorContext);
    const ref = useRef<CollapseExpandObject[]>([]);
    const themeData = getThemeData(theme, path);

    const _registerExpandCollapse = (collapseExpandObject: CollapseExpandObject) => {
        if (!ref.current) {
            ref.current = [];
        }
        ref.current.push(collapseExpandObject);
    };

    const _handleCollapseAll = useCallback(() => ref.current.map(item => item.collapse()), [ref.current]);
    const _handleExpandAll = useCallback(() => ref.current.map(item => item.expand()), [ref.current]);

    const node = useMemo(() => getValue(fields, path), [path]);

    const _getItems: getItemsType = (item, itemName, level, themeValue, childrenOnly) => {
        const properties = useMemo(() => Object.keys(item || {}).filter(key => !key.startsWith('_')), [item]);
        const value = (themeValue && themeValue[itemName]) ?? undefined;

        if (properties.length === 0) {
            return (
                <Field
                    key={`${item._label} ${item._path}`}
                    {...(item as unknown as IField)}
                    _value={value}
                    level={level}
                    onTokenChanged={onTokenChanged}
                    addResetFunction={addResetFunction}
                />
            );
        }

        const orderedProperties = useMemo(() => getOrderedProperties(properties, item), [properties]);

        if (childrenOnly) {
            return orderedProperties.map(property => _getItems(item[property] as IItem, property, level, value, false));
        }

        return (
            <Section
                key={`${item._label} ${item._path}`}
                title={item._label}
                level={level}
                path={item._path}
                onReset={onResetSection}
                registerExpandCollapse={_registerExpandCollapse}
            >
                {orderedProperties.map(property =>
                    _getItems(item[property] as IItem, property, level + 1, value, false)
                )}
            </Section>
        );
    };

    if (!node) {
        return <div className="empty">no tokens available</div>;
    }

    return (
        <>
            <StyledSection>
                <div className="section-title" style={{paddingLeft: `1rem`}}>
                    <StyledLinkButton onClick={_handleExpandAll}>Expand all</StyledLinkButton>
                    <StyledLinkButton onClick={_handleCollapseAll}>Collapse all</StyledLinkButton>
                </div>
            </StyledSection>
            {_getItems(node as IItem, Object.keys(themeData ?? {})[0], 1 + (level ?? 0), themeData, true)}
        </>
    );
};

export default Tokens;
