import {emptyFolder} from '../../../assets/empty/empty-folder.tsx';
import {emptyList} from '../../../assets/empty/empty-list.tsx';
import {emptyModal} from '../../../assets/empty/empty-modal.tsx';
import {emptyPage} from '../../../assets/empty/empty-page.tsx';
import {emptyResult} from '../../../assets/empty/empty-result.tsx';
import {KitEmptyCompoundedComponent} from './types';
import InternalEmpty from './Empty';

export const KitEmpty = InternalEmpty as KitEmptyCompoundedComponent;
KitEmpty.displayName = 'KitEmpty';
KitEmpty.ASSET_FOLDER = emptyFolder;
KitEmpty.ASSET_LIST = emptyList;
KitEmpty.ASSET_MODAL = emptyModal;
KitEmpty.ASSET_PAGE = emptyPage;
KitEmpty.ASSET_RESULT = emptyResult;
