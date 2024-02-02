import {EditorTemplate as Button} from './02-Design System/01-General/Button/Template';
import {EditorTemplate as Icon} from './02-Design System/01-General/Icons/Template';
import {EditorTemplate as Typography} from './02-Design System/01-General/Typography/Template';
import {EditorTemplate as Divider} from './02-Design System/02-Layout/Divider/Template';
import {EditorTemplate as Breadcrumb} from './02-Design System/03-Navigation/Breadcrumb/Template';
import {EditorTemplate as DropDown} from './02-Design System/03-Navigation/DropDown/Template';
import {EditorTemplate as Header} from './02-Design System/03-Navigation/Header/Template';
import {EditorTemplate as Menu} from './02-Design System/03-Navigation/Menu/Template';
import {EditorTemplate as Pagination} from './02-Design System/03-Navigation/Pagination/Template';
import {EditorTemplate as Steps} from './02-Design System/03-Navigation/Steps/Template';
import {EditorTemplate as Checkbox} from './02-Design System/04-DataEntry/Checkbox/Template';
import {EditorTemplate as DatePicker} from './02-Design System/04-DataEntry/DatePicker/Template';
import {EditorTemplate as Input} from './02-Design System/04-DataEntry/Input/Template';
import {EditorTemplate as InputWrapper} from './02-Design System/04-DataEntry/InputWrapper/Template';
import {EditorTemplate as InputNumber} from './02-Design System/04-DataEntry/InputNumber/Template';
import {EditorTemplate as Radio} from './02-Design System/04-DataEntry/Radio/Template';
import {EditorTemplate as Rate} from './02-Design System/04-DataEntry/Rate/Template';
import {EditorTemplate as Select} from './02-Design System/04-DataEntry/Select/Template';
import {EditorTemplate as Slider} from './02-Design System/04-DataEntry/Slider/Template';
import {EditorTemplate as Switch} from './02-Design System/04-DataEntry/Switch/Template';
import {EditorTemplate as ColorPicker} from './02-Design System/04-DataEntry/ColorPicker/Template';
import {EditorTemplate as Upload} from './02-Design System/04-DataEntry/Upload/Template';
import {EditorTemplate as Tag} from './02-Design System/05-DataDisplay/Tag/Template';
import {EditorTemplate as Avatar} from './02-Design System/05-DataDisplay/Avatar/Template';
import {EditorTemplateGroup as AvatarGroup} from './02-Design System/05-DataDisplay/Avatar/Template';
import {EditorTemplate as Badge} from './02-Design System/05-DataDisplay/Badge/Template';
import {EditorTemplate as Card} from './02-Design System/05-DataDisplay/Card/Template';
import {EditorTemplate as Collapse} from './02-Design System/05-DataDisplay/Collapse/Template';
import {EditorTemplate as Image} from './02-Design System/05-DataDisplay/Image/Template';
import {EditorTemplate as ItemCard} from './02-Design System/05-DataDisplay/ItemCard/Template';
import {EditorTemplate as ItemList} from './02-Design System/05-DataDisplay/ItemList/Template';
import {EditorTemplate as Tabs} from './02-Design System/05-DataDisplay/Tabs/Template';
import {EditorTemplate as Tooltip} from './02-Design System/05-DataDisplay/Tooltip/Template';
import {EditorTemplate as Tour} from './02-Design System/05-DataDisplay/Tour/Template';
import {EditorTemplate as Tree} from './02-Design System/05-DataDisplay/Tree/Template';
import {EditorTemplate as Alert} from './02-Design System/06-Feedback/Alert/Template';
import {EditorTemplate as Modal} from './02-Design System/06-Feedback/Modal/Template';
import {EditorTemplate as Notification} from './02-Design System/06-Feedback/Notification/Template';
import {EditorTemplate as Progress} from './02-Design System/06-Feedback/Progress/Template';
import {EditorTemplate as SnackBar} from './02-Design System/06-Feedback/SnackBar/Template';

export default {
    General: {
        Button,
        Icon,
        Typography
    },
    Layout: {
        Divider
    },
    Navigation: {
        Breadcrumb,
        DropDown,
        Header,
        Menu,
        Pagination,
        Steps
    },
    DataEntry: {
        Checkbox,
        ColorPicker,
        DatePicker,
        Input,
        InputWrapper,
        InputNumber,
        Radio,
        Rate,
        Select,
        Slider,
        Switch,
        Upload
    },
    DataDisplay: {
        Avatar,
        AvatarGroup,
        Badge,
        Card,
        Collapse,
        Image,
        ItemCard,
        ItemList,
        Tabs,
        Tag,
        Tooltip,
        Tour,
        Tree
    },
    Feedback: {
        Alert,
        Modal,
        Notification,
        Progress,
        SnackBar
    }
};
