import react, { useState, createContext } from "react";
export const EventContext = createContext<MouseEvent[]>([]);

export const EventsDataProvider = (props: any) => {
  const events: MouseEvent[] = [];
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
