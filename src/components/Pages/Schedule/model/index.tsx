import {ICalendarCell} from "../../../CalendarCell/model";
import {getDayByNum} from "../../../Calendar/model";

export const getBusyCells = (cells: ICalendarCell[]): Map<string, number[]> => {
    const BusyDayMap = new Map<string, number[]>();
    cells.forEach(cell => {
        if (cell.isBusy) {
            const cellWorkDay = getDayByNum(cell.column).value;
            const mapItem = BusyDayMap.get(cellWorkDay);
            if (mapItem) {
                mapItem.push(cell.row);
            } else {
                BusyDayMap.set(cellWorkDay, [cell.row]);
            }
        }
    });
    return BusyDayMap;
}