import type {FunctionComponent} from 'react';
import {styled} from '@storybook/theming';
import {InfoProps} from './types';

const Wrapper = styled.div({
    padding: 12,
    marginBottom: 10
});

const Description = styled.p({
    margin: '0 0 12px'
});

const Link = styled.a({
    marginTop: 12,
    textDecoration: 'underline',
    color: 'inherit',
    display: 'block'
});

export const Info: FunctionComponent<InfoProps> = ({item}) => {
    return (
        <Wrapper>
            <Description>{item.description}</Description>
            <Link href={item.helpUrl} target="_blank">
                More info...
            </Link>
        </Wrapper>
    );
};
