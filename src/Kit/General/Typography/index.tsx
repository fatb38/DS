import InternalTitle from "./Title";
import InternalText from "./Text";
import InternalLink from "./Link";
import InternalParagraph from "./Paragraph";
import { KitLinkProps, KitTextProps, KitTitleProps } from "./types";

type CompoundedComponent = {
    Title: React.FunctionComponent<KitTitleProps>;
    Text: React.FunctionComponent<KitTextProps>;
    Link: React.FunctionComponent<KitLinkProps>;
    Paragraph: React.FunctionComponent<KitTextProps>;
    displayName?: string;
};

export const KitTypography = ({
    Title: InternalTitle,
    Text: InternalText,
    Link: InternalLink,
    Paragraph: InternalParagraph,
} as unknown) as CompoundedComponent;

KitTypography.displayName = "KitTypography";
