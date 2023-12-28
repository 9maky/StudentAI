import React, { Children } from "react";
import { UserEvents } from "./user_data";
interface userEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  resourceId: Number;
}
//alday
export const events: userEvent[] = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2022, 10, 20, 9, 0, 0),
    end: new Date(2022, 10, 21, 9, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "MS training",
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: "Team lead meeting",
    start: new Date(2018, 0, 29, 10, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
];
const ColoredDateCellWrapper = ({ children, value }) =>
  React.cloneElement(Children.only(children), {
    style: {
      ...children.style,
      backgroundColor: "lightgreen",
    },
  });
export const daily_events = [
  {
    id: 1,
    title: "Stipendiranje učenika",
    message: "Stipenirati Džemala, Rijada, Emira",
    allDay: true,
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
  },
  {
    id: 2,
    title: "Vijeće učenika",
    message: "Pripremiti razgovor za sastanak",
    start: new Date(2018, 0, 29, 10, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
  },
  {
    id: 3,
    title: "Nazvati Maju",
    message: "Maja se razbolila, poželiti brz oporavak",
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
  },
];
