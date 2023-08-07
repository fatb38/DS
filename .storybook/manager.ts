import {addons} from '@storybook/manager-api';
import Aristid from './aristidTheme';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    enableShortcuts: true,
    showToolbar: false,
    toolbar: {
        title: {hidden: true}, // hides Canvas/Docs tabs
        zoom: {hidden: true},
        eject: {hidden: true},
        copy: {hidden: true},
        fullscreen: {hidden: true}
    },
    theme: Aristid
});
