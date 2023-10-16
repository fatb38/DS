import {EditorTemplate as Button} from './02-Design System/01-General/Button/data';
import {EditorTemplate as Icon} from './02-Design System/01-General/Icons/data';
import {EditorTemplate as Typography} from './02-Design System/01-General/Typography/data';
import {EditorTemplate as Divider} from './02-Design System/02-Layout/Divider/data';
import {EditorTemplate as Breadcrumb} from './02-Design System/03-Navigation/Breadcrumb/data';
import {EditorTemplate as DropDown} from './02-Design System/03-Navigation/DropDown/data';
import {EditorTemplate as Header} from './02-Design System/03-Navigation/Header/data';
import {EditorTemplate as Menu} from './02-Design System/03-Navigation/Menu/data';
import {EditorTemplate as Pagination} from './02-Design System/03-Navigation/Pagination/data';
import {EditorTemplate as Steps} from './02-Design System/03-Navigation/Steps/data';
import {EditorTemplate as Checkbox} from './02-Design System/04-DataEntry/Checkbox/data';
import {EditorTemplate as DatePicker} from './02-Design System/04-DataEntry/DatePicker/data';
import {EditorTemplate as Input} from './02-Design System/04-DataEntry/Input/data';
import {EditorTemplateWrapper as InputWrapper} from './02-Design System/04-DataEntry/Input/data';
import {EditorTemplate as InputNumber} from './02-Design System/04-DataEntry/InputNumber/data';
import {EditorTemplate as Radio} from './02-Design System/04-DataEntry/Radio/data';
import {EditorTemplate as Rate} from './02-Design System/04-DataEntry/Rate/data';
import {EditorTemplate as Select} from './02-Design System/04-DataEntry/Select/data';
import {EditorTemplate as Slider} from './02-Design System/04-DataEntry/Slider/data';
import {EditorTemplate as Switch} from './02-Design System/04-DataEntry/Switch/data';
import {EditorTemplate as Tag} from './02-Design System/04-DataEntry/Tag/data';
import {EditorTemplate as Upload} from './02-Design System/04-DataEntry/Upload/data';
import {EditorTemplate as Avatar} from './02-Design System/05-DataDisplay/Avatar/data';
import {EditorTemplateGroup as AvatarGroup} from './02-Design System/05-DataDisplay/Avatar/data';
import {EditorTemplate as Badge} from './02-Design System/05-DataDisplay/Badge/data';
import {EditorTemplate as Card} from './02-Design System/05-DataDisplay/Card/data';
import {EditorTemplate as Collapse} from './02-Design System/05-DataDisplay/Collapse/data';
import {EditorTemplate as Image} from './02-Design System/05-DataDisplay/Image/data';
import {EditorTemplate as ItemCard} from './02-Design System/05-DataDisplay/ItemCard/data';
import {EditorTemplate as ItemList} from './02-Design System/05-DataDisplay/ItemList/data';
import {EditorTemplate as Tabs} from './02-Design System/05-DataDisplay/Tabs/data';
import {EditorTemplate as Tooltip} from './02-Design System/05-DataDisplay/Tooltip/data';
import {EditorTemplate as Tree} from './02-Design System/05-DataDisplay/Tree/data';
import {EditorTemplate as Alert} from './02-Design System/06-Feedback/Alert/data';
import {EditorTemplate as Modal} from './02-Design System/06-Feedback/Modal/data';
import {EditorTemplate as Notification} from './02-Design System/06-Feedback/Notification/data';
import {EditorTemplate as Progress} from './02-Design System/06-Feedback/Progress/data';
import {EditorTemplate as SnackBar} from './02-Design System/06-Feedback/SnackBar/data';

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
        DatePicker,
        Input,
        InputWrapper,
        InputNumber,
        Radio,
        Rate,
        Select,
        Slider,
        Switch,
        Tag,
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
        Tooltip,
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
