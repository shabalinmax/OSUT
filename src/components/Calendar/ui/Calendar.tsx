import {memo, useContext} from 'react';
import './calendar.module.css';
import {CalendarCell} from "../../CalendarCell/ui/CalendarCell.tsx";
import {ICalendarCell} from "../../CalendarCell/model";
import {CellsContext} from "../../../CellsContext.ts";
import cls from './calendar.module.css'

const CalendarComponent = () => {
    const {cells, setCells} = useContext(CellsContext);
    const clickHandler = (cell: ICalendarCell) => {
        if (!cell.isTitle && setCells) {
            setCells(cells.map((item: ICalendarCell) => {
                    if (item.id === cell.id) {
                        return {...item, isBusy: !item.isBusy}
                    }
                    return item
                })
            )
        }
    }
    return (
        <div className={cls.calendar}>
            {
                cells?.map(cell => {
                    return (
                        <div onClick={() => clickHandler(cell)}>
                            <CalendarCell key={cell.id} cell={cell}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export const Calendar = memo(CalendarComponent);
