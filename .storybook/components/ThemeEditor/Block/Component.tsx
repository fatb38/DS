import React, {FunctionComponent, useContext, useRef, useState} from 'react';
import styled from 'styled-components';
import {StyledToggle} from '../../CustomCanvas';
import Tokens from './Tokens';
import {EditorContext} from '../Context';
import {IComponentBlock, IEditorContext} from '../types';
import {faCircleDown, faCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const StyledCanvas = styled.div<{
    $isOpen: boolean;
}>`
    position: relative;
    overflow: hidden;
    margin: 15px 0 0px;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid hsla(203, 50%, 30%, 0.15);

    &:last-child {
        margin-bottom: 4rem;
    }

    .title {
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
        cursor: pointer;
        border-bottom: ${({$isOpen}) => ($isOpen ? '1px solid hsla(203, 50%, 30%, 0.15)' : 'none')};
        padding: 0.5rem 1rem;
        background: #f6f9fc;
        display: flex;

        .title-text {
            flex: 1;
        }

        .title-reset {
            flex: 0;
            white-space: nowrap;
            color: #1677ff;
            font-size: 0.8rem;
            align-self: center;
        }

        .anticon {
            margin-right: 1rem;
        }
    }

    .content {
        padding: 1rem;
        position: relative;
        box-sizing: border-box;
        min-height: 300px;

        &.tokensOnly {
            padding: 0;

            .tokens {
                width: 100%;
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
            padding-bottom: 1rem;

            &:not(.visible) {
                visibility: hidden;
            }
        }
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

const Component: FunctionComponent<IComponentBlock> = ({path, title, children}) => {
    const {setThemeValue} = useContext<IEditorContext>(EditorContext);
    const ref = useRef<{
        [id: string]: Function;
    }>({});
    const [isOpen, setIsOpen] = useState(false);
    const [showTokens, setShowTokens] = useState(!children);

    const _handleOpen = () => setIsOpen(!isOpen);
    const _handleToggleTokens = () => setShowTokens(!showTokens);

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
                    {children}
                    <StyledToggle>
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
        Object.values(ref.current)?.forEach(resetFn => resetFn());
    };

    const _handleResetSection = sectionPath => {
        setThemeValue(sectionPath, null);
        Object.keys(ref.current)?.forEach(key => key.indexOf(sectionPath) === 0 && ref.current[key]());
    };

    return (
        <StyledCanvas $isOpen={isOpen}>
            <div className="title">
                <span className="title-text" onClick={_handleOpen}>
                    {isOpen ? <FontAwesomeIcon icon={faCircleDown} /> : <FontAwesomeIcon icon={faCircleRight} />}
                    {title}
                </span>
                <span className="title-reset">
                    <a type="link" onClick={_resetComponent}>
                        Reset all
                    </a>
                </span>
            </div>
            {isOpen && (
                <div className={`content ${!children ? 'tokensOnly' : ''}`}>
                    {_getContent()}
                    <div className={`tokens ${showTokens && 'visible'}`}>
                        <Tokens path={path} addResetFunction={_addResetFunction} onResetSection={_handleResetSection} />
                    </div>
                </div>
            )}
        </StyledCanvas>
    );
};

export default Component;
