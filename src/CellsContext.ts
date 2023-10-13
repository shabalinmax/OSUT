import {createContext} from "react";
import {ICalendarCell} from "./components/CalendarCell/model";
export interface CellsContextProps {
    cells: ICalendarCell[],
    setCells: (cells: ICalendarCell[]) => void }
export const CellsContext = createContext<CellsContextProps>({cells: [], setCells: () => {}});
