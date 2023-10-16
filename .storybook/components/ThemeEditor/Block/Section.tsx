import {DownCircleOutlined, RightCircleOutlined} from '@ant-design/icons';
import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {IEditorContext, ISection} from '../types';
import {EditorContext} from '../Context';
import {getValue} from '../util';

export const StyledSection = styled.div`
    cursor: pointer;
    .section-title {
        background: #f6f9fc;
        border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);
        color: #2e3438;
        padding: 8px 16px 8px 0.5rem;
        display: flex;

        .anticon {
            font-size: 0.8rem;
            margin-right: 0.5rem;
        }
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
        display: none;

        &.open {
            display: block;
        }
        /* padding-left: 1rem; */
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

    return (
        <StyledSection>
            <div className="section-title" onClick={_handleClick} style={{paddingLeft: `${level * 0.5}rem`}}>
                {_isOpen ? <DownCircleOutlined /> : <RightCircleOutlined />}
                <div className="title-value">{title}</div>
                {value && (
                    <a className="section-reset" onClick={_handleResetSection}>
                        Reset
                    </a>
                )}
            </div>
            <div className={`section-items ${_isOpen ? 'open' : ''}`}>{children}</div>
        </StyledSection>
    );
};
Section.displayName = 'EditorSsection';

export default Section;
