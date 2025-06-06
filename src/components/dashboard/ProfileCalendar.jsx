import { Calendar } from "@heroui/calendar";
import React, { useState } from "react";
import { parseDate } from "@internationalized/date";

const ProfileCalendar = () => {
  const parsedDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(parseDate(parsedDate));

  const newFormatted =
    date.year +
    "-" +
    date.month.toString().padStart(2, "0") +
    "-" +
    date.day.toString().padStart(2, "0");

  return (
    <div onClick={() => console.log(date)}>
      <Calendar
        value={date}
        onChange={setDate}
        onClick={() => console.log(date)}
      />
      <button>{newFormatted}</button>
    </div>
  );
};

export default ProfileCalendar;
