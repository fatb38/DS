import React, {useState, useEffect, useRef, useContext} from 'react';
import styled from 'styled-components';
import {Source, Unstyled} from '@storybook/blocks';
import cleanSource from './cleanSource';
import ShortUniqueId from 'short-unique-id';
import {AccessibilityContext} from './Accessibility/AccessibilityProvider';
import { A11YPanel } from './Accessibility/A11YPanel';

const StyledCanvas = styled.div`
    position: relative;
    overflow: hidden;
    margin: 25px 0 40px;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid hsla(203, 50%, 30%, 0.15);

    ${props =>
        props.open &&
        css`
            border-bottom: none;
        `}

    .docblock-source {
        margin: 0;
        border-radius: 0 0 4px 4px;
    }
`;

const StyledA11y = styled.div`
    border-top: 1px solid hsla(203, 50%, 30%, 0.15);
    padding-bottom: 40px;
    font-size: 13px;
`;

const StyledContent = styled.div`
    overflow: hidden;
    position: relative;
`;

const StyledStory = styled.div`
    display: block;
    position: relative;
    flex-wrap: wrap;
    overflow: auto;
    flex-direction: column;
    padding: 30px 20px 40px 20px;
    margin: -10px;
`;

const StyledToggle = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 100%;
    display: flex;
    background: #ffffff;
    z-index: 1;

    .toggle-btn {
        margin: 0;
        border: 0 none;
        padding: 4px 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: #2e3438;
        background: #ffffff;
        font-size: 12px;
        line-height: 16px;
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
        font-weight: 700;
        border-top: 1px solid hsla(203, 50%, 30%, 0.15);
        border-left: 1px solid hsla(203, 50%, 30%, 0.15);
        margin-left: -1px;
        border-radius: 4px 0 0 0;

        &:not(:first-child) {
            border-radius: 0;
        }

        &:focus {
            box-shadow: #029cfd 0 -3px 0 0 inset;
            outline: 0 none;
        }

    }
`;

const uid = new ShortUniqueId({ length: 10, dictionary: 'alpha' });

const CustomCanvas = ({id, withSource, content, source, backgroundColor, a11y = true, ...props}) => {
    const ref = useRef(null);
    const [showCode, setShowCode] = useState(withSource === 'always');
    const [showA11y, setShowA11y] = useState(false);
    const storyId = useRef(id || uid.rnd());// uuidv4().split('-')[0]);

    const {active, addItem, results} = useContext(AccessibilityContext);
    const Component = content || 'div';
    const cleanedSource = cleanSource(source || '');
    
    const showSourceToggle = !withSource || withSource === 'always' || withSource === 'auto';
    const showA11yToggle = a11y && active;

    useEffect(() => {
        if (showA11yToggle && ref.current && !results[storyId.current]) {
            addItem(storyId.current, storyId.current);
        }
    }, [ref.current, storyId.current, addItem, showA11yToggle]);

    const rest = props;
    if (backgroundColor) {
        rest.style = {
            ...(rest.style || {}),
            backgroundColor
        };
    }

    const toggleA11y = () => {
        setShowA11y(!showA11y);
        setShowCode(false);
    }

    const toggleCode = () => {
        setShowCode(!showCode);
        setShowA11y(false);
    }

    return (
        <Unstyled>
            <StyledCanvas {...rest}>
                <StyledContent>
                    <StyledStory ref={ref} id={storyId.current}>
                        <Component />
                    </StyledStory>
                    {(showSourceToggle || showA11yToggle) && (
                        <StyledToggle>
                            <button className="toggle-btn" onClick={toggleCode}>
                                {showCode ? 'Hide code' : 'Show code'}
                            </button>
                            {showA11yToggle && <button className="toggle-btn" onClick={toggleA11y}>
                                {showA11y ? 'Hide a11y' : 'Show a11y'}
                            </button>}
                        </StyledToggle>
                    )}
                </StyledContent>
                {showCode && <Source style={{margin: 0}} className="canvas-source" code={cleanedSource} dark />}
                {showA11y &&
                    <StyledA11y>
                        <A11YPanel id={storyId.current} />
                    </StyledA11y>
                }
            </StyledCanvas>
        </Unstyled>
    );
};

export default CustomCanvas;
