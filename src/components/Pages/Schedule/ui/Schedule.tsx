import { memo, useMemo, useState } from "react";
import { Button, Input, Modal } from "antd";
import { Calendar } from "../../../Calendar/ui/Calendar.tsx";
import { ICalendarCell } from "../../../CalendarCell/model";
import { CellsContext } from "../../../../CellsContext.ts";
import { createCalendarData } from "../../../Calendar/model";
import { getBusyCells } from "../model";
import cls from "./SchedulePage.module.css";

const SchedulePage = () => {
    const [employeeName, setEmployeeName] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [note, setNote] = useState<string>('');
    const [cells, setCells] = useState<ICalendarCell[]>(createCalendarData());
    const [isErrorInInput, setIsErrorInInput] = useState<boolean>(false);
    const sendAlert = () => {
        if (employeeName.length) {
            setModalVisible(true);
        } else {
            setIsErrorInInput(true);
        }
    }
    const initialCells = useMemo(() => ({
        cells,
        setCells
    }), [cells]);

    return (
        <CellsContext.Provider value={initialCells}>
            <div className={cls.pageContainer}>
                <h1 className={cls.pageTitle}>
                    Календарь занятости
                </h1>
                <h3 className={cls.employeeLabel}>
                    Сотрудник
                </h3>
                <Input
                    onChange={(e) => {
                        setEmployeeName(e.target.value)
                    }}
                    onFocus={() => setIsErrorInInput(false)}
                    className={cls.employeeInput}
                    size={'small'}
                    placeholder={'Фамилия Имя Отчество'}
                    style={isErrorInInput ? {borderColor: 'red'} : {}}
                />
                {
                    isErrorInInput &&
                    <div>
                        Поле не может быть пустым
                    </div>
                }
                <Calendar />
                <div className={cls.noteInputContainer}>
                    Примечание
                    <Input onChange={(e) => setNote(e.target.value)} size={'middle'} />
                </div>
                <div className={cls.buttonContainer}>
                    <Button onClick={() => sendAlert()} className={cls.submitButton}>Отправить</Button>
                </div>
                <Modal open={modalVisible} destroyOnClose={true} footer={null} onCancel={() => setModalVisible(false)}>
                    <div className={cls.modalContent}>
                        <h3 className={cls.modalTitle}>
                            Занятость
                        </h3>
                        <div>
                            <div className={cls.employeeInfoLabel}>
                                Сотрудник:
                                {employeeName}
                            </div>
                            <div>
                                <div>
                                    Занятость:
                                    <ul className={cls.busyCellsList}>
                                        {Array.from(getBusyCells(cells).entries()).map(([day, cellIds]) => {
                                            return (
                                                <li key={day}>
                                                    {day}: {cellIds.join(', ')}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                Примечание:
                                {note.length ? note : ' Не указано'}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </CellsContext.Provider>
    );
};

export const Schedule = memo(SchedulePage);
