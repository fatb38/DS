import React, {FunctionComponent, useContext, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {StyledToggle} from '../../CustomCanvas';
import Tokens from './Tokens';
import {EditorContext} from '../Context';
import {IComponentBlock, IEditorContext} from '../types';
import {AccessibilityContext} from '../../Accessibility/AccessibilityProvider';
import {A11YPanel} from '../../Accessibility/A11YPanel';
import Header from './Header';
import Icon from './Icon';

export const StyledComponentWrapper = styled.div<{
    $isOpen: boolean;
    $container?: boolean;
}>`
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid hsla(203, 50%, 30%, 0.15);

    & & {
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    .content {
        padding: 1rem 1rem 2rem 1rem;
        position: relative;
        box-sizing: border-box;
        min-height: 300px;
        border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);

        &.hidden {
            visibility: collapse;
            height: 0;
        }

        &.tokensOnly {
            padding: 0;
            min-height: auto;

            > .tokens {
                width: 100%;
                border-left: none;
                position: relative;
                padding: 0;
            }
        }

        .tokens {
            font-family:
                'Nunito Sans',
                -apple-system,
                '.SFNSText-Regular',
                'San Francisco',
                BlinkMacSystemFont,
                'Segoe UI',
                'Helvetica Neue',
                Helvetica,
                Arial,
                sans-serif;
            position: absolute;
            background: white;
            border-left: 1px solid hsla(203, 50%, 30%, 0.15);
            top: 0;
            right: 0;
            height: 100%;
            width: 50%;
            z-index: 100;
            overflow: auto;
            padding-bottom: 2rem;
            box-sizing: border-box;

            &:not(.visible) {
                visibility: hidden;
            }
        }
    }

    &.container > .content {
        min-height: auto;
        border-bottom: none;
    }

    .empty {
        font-family:
            'Nunito Sans',
            -apple-system,
            '.SFNSText-Regular',
            'San Francisco',
            BlinkMacSystemFont,
            'Segoe UI',
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.45);
        width: 100%;
        padding: 6rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${StyledToggle} {
        z-index: 101;
    }
`;

const StyledA11y = styled.div`
    border-top: 1px solid hsla(203, 50%, 30%, 0.15);
    padding-bottom: 40px;
    font-size: 13px;
`;

const Component: FunctionComponent<IComponentBlock> = ({
    path,
    title,
    level,
    children,
    showA11yToggle,
    container,
    registerExpandCollapse,
    onCollapseGroup,
    onExpandGroup
}) => {
    const {setThemeValue} = useContext<IEditorContext>(EditorContext);
    const ref = useRef<{
        [id: string]: Function;
    }>({});
    const [isOpen, setIsOpen] = useState(false);
    const [showTokens, setShowTokens] = useState(!children);
    const [showA11y, setShowA11y] = useState(false);
    const [isA11yValid, setIsA11yValid] = useState(true);
    const {addItem, results, rerun, invalidate} = useContext(AccessibilityContext);
    const testId = `themeEditor-${title}`;
    const _level: number = level ?? 0;

    const _handleOpen = () => setIsOpen(!isOpen);
    const _handleToggleTokens = () => setShowTokens(!showTokens);
    const _handleToggleA11y = () => setShowA11y(!showA11y);

    const _changeA11yState = valid => {
        if (!valid) {
            invalidate(testId, testId);
        }
        setIsA11yValid(valid);
    };

    useEffect(() => {
        if (isOpen && showA11yToggle) {
            if (!results[testId]) {
                addItem(testId, testId);
            }
            rerun(testId);
        }
    }, [isOpen, showA11yToggle]);

    useEffect(() => {
        if (registerExpandCollapse) {
            registerExpandCollapse(path, {
                collapse: () => setIsOpen(false),
                expand: () => setIsOpen(true)
            });
        }
    }, []);

    const _addResetFunction = (path, resetFn) => {
        if (!ref.current) {
            ref.current = {};
        }
        ref.current[path] = resetFn;
    };

    const _getContent = () => {
        if (children) {
            return (
                <>
                    <div id={testId}>{children}</div>
                    <StyledToggle>
                        {showA11yToggle && (
                            <button
                                className={`toggle-btn ${!isA11yValid ? 'invalid' : ''}`}
                                onClick={_handleToggleA11y}
                            >
                                {!isA11yValid && <Icon icon="alert" />}
                                {showA11y ? 'Hide accessibility' : 'Show accessibility'}
                            </button>
                        )}
                        <button className="toggle-btn" onClick={_handleToggleTokens}>
                            {showTokens ? 'Hide Tokens' : 'Show Tokens'}
                        </button>
                    </StyledToggle>
                </>
            );
        }

        return null;
    };

    const _resetComponent = () => {
        setThemeValue(path, null);
        _changeA11yState(false);
        Object.values(ref.current)?.forEach(resetFn => resetFn());
    };

    const _handleResetSection = sectionPath => {
        setThemeValue(sectionPath, null);
        _changeA11yState(false);
        Object.keys(ref.current)?.forEach(key => key.indexOf(sectionPath) === 0 && ref.current[key]());
    };

    if (container) {
        return (
            <StyledComponentWrapper $isOpen={isOpen} $container={true} className="container">
                <Header
                    title={title}
                    level={_level}
                    onClick={_handleOpen}
                    collapsible
                    collapsed={!isOpen}
                    onCollapseAll={onCollapseGroup}
                    onExpandAll={onExpandGroup}
                />
                <div className={`content tokensOnly ${!isOpen ? 'hidden' : ''}`}>{children}</div>
            </StyledComponentWrapper>
        );
    }

    return (
        <StyledComponentWrapper $isOpen={isOpen}>
            <Header
                title={title}
                level={_level}
                onClick={_handleOpen}
                collapsible
                collapsed={!isOpen}
                onReset={_resetComponent}
                resetText="resetAll"
                onCollapseAll={onCollapseGroup}
                onExpandAll={onExpandGroup}
            />
            {isOpen && (
                <div className={`content ${!children ? 'tokensOnly' : ''}`}>
                    {_getContent()}
                    <div className={`tokens ${showTokens && 'visible'}`}>
                        <Tokens
                            path={path}
                            level={!children ? _level + 2 : 0}
                            onTokenChanged={() => _changeA11yState(false)}
                            addResetFunction={_addResetFunction}
                            onResetSection={_handleResetSection}
                        />
                    </div>
                </div>
            )}
            {showA11y && (
                <StyledA11y>
                    <A11YPanel id={testId} onChanged={_changeA11yState} />
                </StyledA11y>
            )}
        </StyledComponentWrapper>
    );
};

export default Component;
