import React, {FunctionComponent, useContext, useMemo, useRef} from 'react';
import Field, {StyledLinkButton} from './Field';
import Section, {StyledSection} from './Section';
import {EditorContext} from '../Context';
import {CollapseExpandObject, IEditorContext, IField, IItem, IToken, getItemsType} from '../types';
import {getThemeData, getValue} from '../util';

const Tokens: FunctionComponent<IToken> = ({path, addResetFunction, onResetSection}) => {
    const {fields, defaultTheme: theme} = useContext<IEditorContext>(EditorContext);
    const ref = useRef<CollapseExpandObject[]>([]);
    const themeData = getThemeData(theme, path);

    const _registerExpandCollapse = collapseExpandObject => {
        if (!ref.current) {
            ref.current = [];
        }
        ref.current.push(collapseExpandObject);
    };

    const _handleCollapseAll = () => ref?.current.map(item => item.collapse());
    const _handleExpandAll = () => ref?.current.map(item => item.expand());

    const node = useMemo(() => getValue(fields, path), [path]);

    const _getItems: getItemsType = (item, itemName, level, themeValue, childrenOnly) => {
        const properties = Object.keys(item || {}).filter(key => !key.startsWith('_'));
        const value = (themeValue && themeValue[itemName]) ?? undefined;

        if (properties.length === 0) {
            item._value = value;
            return (
                <Field
                    key={`${item._label} ${item._path}`}
                    {...(item as unknown as IField)}
                    level={level}
                    addResetFunction={addResetFunction}
                />
            );
        }
        if (childrenOnly) {
            return (
                <>
                    {properties
                        .filter(property => !(item[property] as IItem)._type)
                        .map(property => _getItems(item[property] as IItem, property, level, value, false))}
                    {properties
                        .filter(property => (item[property] as IItem)._type)
                        .map(property => _getItems(item[property] as IItem, property, level, value, false))}
                </>
            );
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
                {properties
                    .filter(property => !(item[property] as IItem)._type)
                    .map(property => _getItems(item[property] as IItem, property, level + 1, value, false))}
                {properties
                    .filter(property => (item[property] as IItem)._type)
                    .map(property => _getItems(item[property] as IItem, property, level + 1, value, false))}
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
            {_getItems(node as IItem, Object.keys(themeData ?? {})[0], 1, themeData, true)}
        </>
    );
};

export default Tokens;
