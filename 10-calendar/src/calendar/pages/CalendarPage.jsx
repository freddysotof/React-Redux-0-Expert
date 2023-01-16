
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US'
import { addHours } from 'date-fns/esm'
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from "../"
import { getMessagesES, localizer } from '../../helpers'
import { useState } from 'react';
import { useUiStore,useCalendarStore } from '../../hooks';



export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const {events,setActiveEvent} = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView'));
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({ event, start, end, isSelected })

    const style = {
      backgroundColor: '#34C7F7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    // console.log({ doubleClick: event });
    openDateModal()
  }


  const onSelect = (event) => {
    console.log({ click: event })
  }


  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
  }

  return (
    <>
      <NavBar />

      <Calendar
        localizer={localizer}
        culture="es"
        defaultView={lastView}
        messages={getMessagesES()}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={setActiveEvent}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew/>
      <FabDelete/>
    </>
  )
}
