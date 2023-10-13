export interface ICalendarCellComponent {
    cell: ICalendarCell;
}
export interface ICalendarCell {
    value: number | string;
    id: number;
    isTitle: boolean;
    isBusy: boolean | null;
    row: number,
    column: number
}