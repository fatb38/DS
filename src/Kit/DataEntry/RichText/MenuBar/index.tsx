import cn from 'classnames';
import styles from './styles.module.scss';
import {useKitTheme} from '@theme/useKitTheme';
import {KitDivider} from '@kit/Layout';
import {KitUndoRedoButtons} from './UndoRedoButtons';
import {KitFontSizeSelect} from './FontSizeSelect';
import {KitFontStylesButtons} from './FontStylesButtons';
import {KitTextAlignButtons} from './TextAlignButtons';
import {KitLinkButton} from './LinkButton';
import {KitListButtons} from './ListButtons';
import {KitIndentListButtons} from './IndentListButtons';
import {FunctionComponent} from 'react';
import {IKitMenuBar} from './types';

export const KitMenuBar: FunctionComponent<IKitMenuBar> = ({editor}) => {
    const {appId} = useKitTheme();

    const clx = cn(appId, styles['kit-rich-text-menu-bar'], 'menu-bar');

    return (
        <div className={clx}>
            <KitUndoRedoButtons editor={editor} />
            <KitDivider type="vertical" />
            <KitFontSizeSelect editor={editor} />
            <KitDivider type="vertical" />
            <KitFontStylesButtons editor={editor} />
            <KitDivider type="vertical" />
            <KitTextAlignButtons editor={editor} />
            <KitDivider type="vertical" />
            <KitLinkButton editor={editor} />
            <KitDivider type="vertical" />
            <KitListButtons editor={editor} />
            <KitDivider type="vertical" />
            <KitIndentListButtons editor={editor} />
        </div>
    );
};
