import {CSSProperties, FunctionComponent} from 'react';
import {IKitHeader} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import styles from './styles.module.scss';
import {KitDropDown} from '../DropDown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {getContrastColor} from '@utils/functions';
import {KitColorProp} from '@utils/functions/types';

const _getCustomColors = (color: KitColorProp): CSSProperties => ({
        ['--kit-header-invert-color']: getContrastColor(color)
    } as CSSProperties);

export const Header: FunctionComponent<IKitHeader> = ({
    className,
    children,
    menu,
    logo,
    langSwitcher,
    profile,
    ...props
}) => {
    const {appId, theme} = useKitTheme();
    const clx = cn(
        appId,
        styles['kit-header'],
        {
            ['with-menu']: menu,
            ['with-logo']: logo,
            ['with-profile']: profile,
            ['with-lang-switcher']: langSwitcher
        },
        className
    );

    const _renderDropdown = () => menu;

    const customColors = _getCustomColors(theme.colors.primary.primary400);

    return (
        <div style={customColors} {...props} className={clx}>
            {menu && (
                <KitDropDown dropdownRender={_renderDropdown}>
                    <div className="kit-header-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </KitDropDown>
            )}
            {logo && <div className="kit-header-logo">{logo}</div>}
            <div className="kit-header-content">{children}</div>
            <div className="kit-header-right-items">
                {profile}
                {langSwitcher && <div className="kit-header-lang">{langSwitcher}</div>}
            </div>
        </div>
    );
};

export default Header;
