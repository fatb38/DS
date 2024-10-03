import classNames from 'classnames';
import {Unstyled} from '@storybook/blocks';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRocket, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

export const StyledInfoBox = styled.div`
    position: relative;
    border-radius: 0.75em;
    border: 2px solid #f0f1f3;
    padding: 18px 24px 18px 64px;
    margin: 16px auto;
    width: 100%;
    max-width: 744px;
    box-sizing: border-box;
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
    -webkit-font-smoothing: antialiased;

    .title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 8px;
    }

    &.center {
        margin: 16px auto;
    }

    .icon {
        position: absolute;
        top: 18px;
        left: 24px;
        color: #146ebe;
    }

    .content p {
        margin: 0;
    }

    &.warning {
        background: #fff3bf;
        border-color: #fab005;

        .icon {
            color: #fab005;
        }
    }
`;

const InfoBox = props => {
    const {children} = props;

    const infoClassName = classNames({
        infobox: true,
        warning: props.warning,
        center: props.center
    });

    return (
        <StyledInfoBox className={infoClassName}>
            <div className="icon">
                <FontAwesomeIcon icon={props.warning ? faExclamationTriangle : faRocket} />
            </div>
            <div className="content">
                {props.title && <div className="title">{props.title}</div>}
                <Unstyled>{children}</Unstyled>
            </div>
        </StyledInfoBox>
    );
};

export default InfoBox;
