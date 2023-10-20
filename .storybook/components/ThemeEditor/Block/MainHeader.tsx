import styled from 'styled-components';
import {StyledLinkButton} from './Field';

const StyledHeader = styled.div`
    color: #73828c;
    margin-top: 16px;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    min-height: 24px;
    text-transform: uppercase;
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

    ${StyledLinkButton} {
        text-transform: capitalize;
        font-weight: normal;
        cursor: pointer;

        &:first-child {
            margin-left: 2rem;
        }
    }

    &:not(:hover) ${StyledLinkButton} {
        display: none;
    }
`;

export default StyledHeader;
