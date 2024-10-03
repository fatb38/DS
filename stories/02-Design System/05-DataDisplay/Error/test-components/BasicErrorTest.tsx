import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitError} from '@kit/DataDisplay';
import KitParagraph from '@kit/General/Typography/Paragraph';

export const BasicErrorTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Error</KitTypography.Title>
        <KitError
            title="Unauthorized"
            description={<KitParagraph>Please go back home to continue to navigate.</KitParagraph>}
            httpErrorCode="401"
        />

        <KitError
            title="Forbidden"
            description={<KitParagraph>You are not allowed to access this resource.</KitParagraph>}
            httpErrorCode="403"
        />

        <KitError
            title="Ressource not found"
            description={<KitParagraph>No ressource has been found. Please create a new one.</KitParagraph>}
            httpErrorCode="404"
        />

        <KitError
            title="Internal server error"
            description={<KitParagraph>The server is down, please retry in a few minutes.</KitParagraph>}
            httpErrorCode="500"
        />
        <KitError
            title="Bad gateway"
            description={<KitParagraph>An unknown error occurred, please contact your administrator.</KitParagraph>}
            httpErrorCode="502"
        />

        <KitError
            title="Service unaivalable"
            description={<KitParagraph>An unknown error occurred, please contact your administrator.</KitParagraph>}
            httpErrorCode="503"
        />

        <KitError
            title="Error"
            description={<KitParagraph>An unknown error occurred, please contact your administrator.</KitParagraph>}
        />
    </>
);
