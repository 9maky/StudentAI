import react, { useState, createContext } from "react";
import { events } from "../Data/calendar_data";
export const EventContext = createContext(events[0]);

export const EventsDataProvider = (props: any) => {
  const [event, setEvents] = useState(events);
  const data = {
    event,
    setEvents,
  };
  return (
    <EventContext.Provider value={data as any}>
      {props.children}
    </EventContext.Provider>
  );
};
