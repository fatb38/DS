import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {KitRedirectCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheese} from '@fortawesome/free-solid-svg-icons';

export const RedirectCardTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">RedirectCard</KitTypography.Title>

        <KitSpace direction="horizontal">
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                imageSrc="public/images/free-copyright.jpeg"
            />
        </KitSpace>

        <KitTypography.Title level="h3">RedirectCard disabled</KitTypography.Title>

        <KitSpace direction="horizontal">
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                icon={<FontAwesomeIcon icon={faCheese} />}
                disabled
            />
            <KitRedirectCard
                title="This is a title"
                description="This is a short description"
                imageSrc="public/images/free-copyright.jpeg"
                disabled
            />
        </KitSpace>
    </div>
);
