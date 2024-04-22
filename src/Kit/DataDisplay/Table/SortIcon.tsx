import {KitTableColumnType} from './types';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition, faArrowDown, faArrowUp, faUpDown} from '@fortawesome/free-solid-svg-icons';

export const SortIcon = ({sortOrder}: {sortOrder: KitTableColumnType<unknown>['sortOrder']}) => {
    let sortIcon: IconDefinition;
    let iconColor: string | undefined;

    switch (sortOrder) {
        case 'ascend':
            sortIcon = faArrowUp;
            iconColor = 'blue';
            break;
        case 'descend':
            sortIcon = faArrowDown;
            iconColor = 'blue';
            break;
        default:
            sortIcon = faUpDown;
            break;
    }

    return <KitIcon color={iconColor} icon={<FontAwesomeIcon icon={sortIcon} />} />;
};
