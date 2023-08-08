import theme from '@theme/index';

export const colorbarTheme = {
    barWidth: 8,
    borderRadius: 8
};

const cardTheme = {
    backgroundColor: theme.color.neutral.typography.white,
    borderRadius: 7,
    imageBorderColor: theme.color.neutral.typography.black60,
    selectIconColor: theme.color.primary.blue400,
    selectIconFontSize: '.6rem',
    cardPadding: 16,
    shadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
    itemsMargin: 8,
    fontFamily: 'Inter',
    hoverBorderColor: theme.color.primary.blue400,
    disabledBackgroundColor: theme.color.primary.blue100,
    diabledTextColor: theme.color.primary.blue200,
    text: {
        title: {
            fontSize: theme.typography.fontSize6,
            fontWeight: theme.typography.boldFontWeight,
            color: theme.color.primary.blue600
        },
        description: {
            fontSize: theme.typography.fontSize5,
            fontWeight: theme.typography.regularFontWeight,
            color: theme.color.primary.blue600,
            moreLessHoverColor: theme.color.primary.blue400
        },
        footer: {
            fontSize: theme.typography.fontSize5,
            fontWeight: theme.typography.boldFontWeight,
            color: theme.color.primary.blue600
        }
    }
};

export default cardTheme;
