import Basic from './basic';
import Customized from './customized';
import Noncasesensitive from './noncasesensitive';
import Certaincategory from './certaincategory';
import Unertaincategory from './uncertaincategory';
import Status from './status';
import Wrapper from './wrapper';

import BasicSource from './basic?raw';
import CustomizedSource from './customized?raw';
import NoncasesensitiveSource from './noncasesensitive?raw';
import CertaincategorySource from './certaincategory?raw';
import UnertaincategorySource from './uncertaincategory?raw';
import StatusSource from './status?raw';
import WrapperSource from './wrapper?raw';

export const Sources = {
    Basic: BasicSource,
    Customized: CustomizedSource,
    Noncasesensitive: NoncasesensitiveSource,
    Certaincategory: CertaincategorySource,
    Unertaincategory: UnertaincategorySource,
    Status: StatusSource,
    Wrapper: WrapperSource
};
export default {
    Basic,
    Customized,
    Noncasesensitive,
    Certaincategory,
    Unertaincategory,
    Status,
    Wrapper
};
