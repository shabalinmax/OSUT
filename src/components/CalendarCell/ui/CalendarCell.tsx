import {FunctionComponent, memo} from 'react';
import classNames from "classnames";
import {ICalendarCellComponent} from "../model";
import cls from './CalendarCell.module.css'

const CalendarCellComponent: FunctionComponent<ICalendarCellComponent> = ({cell, }) => {
    console.log('rere')
    return (
        <div className={classNames([cls[`cell${cell.id}`], {[cls.cellTitle]: cell.isTitle}, {[cls.cellCommon]: !cell.isTitle}, {[cls.cellActive]: cell.isBusy}])} key={cell.id}>
            {cell.value}
        </div>
    );
};

export const CalendarCell = memo(CalendarCellComponent);