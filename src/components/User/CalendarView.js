import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const CalendarView = () => {
  const events = [
    { title: "Meeting with Company A", date: "2024-12-01" },
    { title: "Follow-up with Company B", date: "2024-12-05" },
  ];

  return (
    <div>
      <h2>Calendar View</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default CalendarView;
