import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitError} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import KitParagraph from '@kit/General/Typography/Paragraph';

export const ResponsiveErrorTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Error responsive</KitTypography.Title>
        <KitSpace>
            <div style={{width: '300px'}}>
                <KitError
                    title="Unauthorized"
                    description={<KitParagraph>Please go back home to continue to navigate.</KitParagraph>}
                    httpErrorCode="401"
                />
            </div>
            <div style={{width: '300px'}}>
                <KitError
                    title="Forbidden"
                    description={<KitParagraph>You are not allowed to access this resource.</KitParagraph>}
                    httpErrorCode="403"
                />
            </div>
            <div style={{width: '300px'}}>
                <KitError
                    title="Page not found"
                    description={<KitParagraph>No ressource has been found. Please create a new one.</KitParagraph>}
                    httpErrorCode="404"
                />
            </div>
            <div style={{width: '300px'}}>
                <KitError
                    title="Internal server error"
                    description={<KitParagraph>The server is down, please retry in a few minutes.</KitParagraph>}
                    httpErrorCode="500"
                />
            </div>
        </KitSpace>
        <KitSpace>
            <div style={{width: '300px'}}>
                <KitError
                    title="Bad gateway"
                    description={
                        <KitParagraph>An unknown error occurred, please contact your administrator.</KitParagraph>
                    }
                    httpErrorCode="502"
                />
            </div>
            <div style={{width: '300px'}}>
                <KitError
                    title="Service unaivalable"
                    description={
                        <KitParagraph>An unknown error occurred, please contact your administrator.</KitParagraph>
                    }
                    httpErrorCode="503"
                />
            </div>
            <div style={{width: '300px'}}>
                <KitError
                    title="Error"
                    description={
                        <KitParagraph>An unknown error occurred, please contact your administrator.</KitParagraph>
                    }
                />
            </div>
        </KitSpace>
    </>
);
