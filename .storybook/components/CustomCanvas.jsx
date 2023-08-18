import React, {useState} from 'react';
import styled from 'styled-components';
import {Source, Canvas, Unstyled} from '@storybook/blocks';
import cleanSource from './cleanSource';
import {KitApp} from '../../src/Kit/App';

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

        &:focus {
            box-shadow: #029cfd 0 -3px 0 0 inset;
            outline: 0 none;
        }
    }
`;

const CustomCanvas = ({withSource, content, source, backgroundColor, ...props}) => {
    const [showCode, setShowCode] = useState(withSource === 'always');
    const Component = content || 'div';
    const cleanedSource = cleanSource(source || '');

    const showToggle = !withSource || withSource === 'always' || withSource === 'auto';

    const rest = props;
    if (backgroundColor) {
        rest.style = {
            ...(rest.style || {}),
            backgroundColor
        };
    }

    return (
        <Unstyled>
            <StyledCanvas {...rest}>
                <StyledContent>
                    <StyledStory>
                        <Component />
                    </StyledStory>
                    {showToggle && (
                        <StyledToggle>
                            <button className="toggle-btn" onClick={() => setShowCode(!showCode)}>
                                {showCode ? 'Hide code' : 'Show code'}
                            </button>
                        </StyledToggle>
                    )}
                </StyledContent>
                {showCode && <Source style={{margin: 0}} className="canvas-source" code={cleanedSource} dark />}
            </StyledCanvas>
        </Unstyled>
    );
};

export default CustomCanvas;
