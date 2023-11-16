import React, {FunctionComponent, cloneElement, useContext, useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import {IEditorContext, ISection} from '../types';
import {EditorContext} from '../Context';
import {getValue} from '../util';
import Icon from './Icon';
import toArray from 'rc-util/lib/Children/toArray';

export const StyledSection = styled.div`
    cursor: pointer;

    .section-title {
        background: #f6f9fc;
        color: #2e3438;
        padding: 5px 12px;
        display: flex;
        align-items: center;
        font-size: 12px;
        text-transform: capitalize;
        color: rgba(46, 52, 56, 0.8);
        border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);

        .title-value {
            flex: 1;
        }

        .section-reset {
            display: none;
            white-space: nowrap;
            color: #1677ff;
            font-size: 0.8rem;
        }

        &:hover .section-reset {
            display: block;
        }
    }

    .section-items {
        > div {
            display: none;
        }

        &.open {
            > div {
                display: block;
                border-top: none;
            }
        }
    }
`;

const Section: FunctionComponent<ISection> = ({
    isOpen,
    title,
    path,
    children,
    level,
    onReset,
    registerExpandCollapse
}) => {
    const [_isOpen, setIsOpen] = useState(isOpen);

    const {theme} = useContext<IEditorContext>(EditorContext);
    const [value, setDefaultValue] = useState(getValue(theme, path));

    const _handleClick = () => setIsOpen(!_isOpen);

    const _handleResetSection = () => onReset && onReset(path);

    useEffect(() => {
        if (registerExpandCollapse) {
            registerExpandCollapse({
                collapse: () => setIsOpen(false),
                expand: () => setIsOpen(true)
            });
        }
    }, []);

    useEffect(() => {
        setDefaultValue(getValue(theme, path));
    }, [theme, path]);

    const icon = _isOpen ? 'arrowdown' : 'arrowright';

    const _children = useMemo(
        () => toArray(children).map(Child => cloneElement(Child, {isVisible: _isOpen})),
        [children, _isOpen]
    );

    return (
        <StyledSection>
            <div className="section-title" onClick={_handleClick} style={{paddingLeft: `${level * 0.5}rem`}}>
                <Icon icon={icon} />
                <div className="title-value">{title}</div>
                {value && (
                    <a className="section-reset" onClick={_handleResetSection}>
                        Reset
                    </a>
                )}
            </div>
            <div className={`section-items ${_isOpen ? 'open' : ''}`}>
                <div>{_children}</div>
            </div>
        </StyledSection>
    );
};
Section.displayName = 'EditorSsection';

export default Section;
