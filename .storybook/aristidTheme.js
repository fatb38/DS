import {create} from '@storybook/theming';
import logo from './jira-logo-scaled.png';

export default create({
    base: 'light',
    brandTitle: 'Aristid Storybook',
    brandUrl: 'https://aristid.com',
    brandImage: logo,
    brandTarget: '_self'
});
