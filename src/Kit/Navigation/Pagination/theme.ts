import theme from '@theme/index';
import {PaginationthemeProps} from './types';

export const paginationTheme: PaginationthemeProps = {
    bordered: {
        borderColor: theme.color.neutral.typography.black60,
        hoverBorderColor: theme.color.primary.blue400,
        backgroundColor: theme.color.neutral.typography.white
    },
    miniActiveBackground: 'transparent',
    disabledActiveTextColor: theme.color.neutral.typography.white,
    hoverColor: theme.color.primary.blue400,
    fontSize: theme.typography.fontSize5
};
