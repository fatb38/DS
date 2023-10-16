import InternalTitle from './Title';
import InternalText from './Text';
import InternalLink from './Link';
import InternalParagraph from './Paragraph';
import {TypographyCompoundedComponent} from './types';

export const KitTypography = {
    Title: InternalTitle,
    Text: InternalText,
    Link: InternalLink,
    Paragraph: InternalParagraph
} as TypographyCompoundedComponent;

KitTypography.displayName = 'KitTypography';
