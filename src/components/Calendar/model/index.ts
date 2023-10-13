import {ICalendarCell} from "../../CalendarCell/model";

export const getDayByNum = (num: number) => {
    switch (num) {
        case 1:
            return {
                value: 'Понедельник',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 1
            };
        case 2:
            return {
                value: 'Вторник',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 2
            };
        case 3:
            return {
                value: 'Среда',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 3
            };
        case 4:
            return {
                value: 'Четверг',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 4
            };
        case 5:
            return {
                value: 'Пятница',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 5
            };
        case 6:
            return {
                value: 'Суббота',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 6
            };
        case 7:
            return {
                value: 'Воскресенье',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 1,
                column: 7
            };
        default:
            return {
                value: '',
                id: num,
                isTitle: true,
                isBusy: null,
                row: 0,
                column: 0
            }
    }
}
export const createCalendarData = (): ICalendarCell[] => {
    const cells: ICalendarCell[] = []
    let row = 0;
    let column = 1
    for (let i = 0; i < 80; i++) {
        if (i <= 7) {
            cells.push(
                getDayByNum(i)
            )
        } else if (i % 8 === 0) {
            cells.push({
                value: i / 8,
                id: i,
                isTitle: true,
                isBusy: false,
                row: row,
                column: column
            })
            row = row + 1
            column = 1;
        } else {
            cells.push({
                value: '',
                id: i,
                isTitle: false,
                isBusy: false,
                row: row,
                column: column
            })
            column = column + 1
        }
    }
    return cells;
}