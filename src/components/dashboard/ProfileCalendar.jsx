import { Calendar } from "@heroui/calendar";
import React, { useState } from "react";
import { parseDate } from "@internationalized/date";

const ProfileCalendar = ({ date, setDate, setDateChosen }) => {
  const handleChange = (newDate) => {
    setDate(newDate);
    setDateChosen(true);
  };

  return (
    <div>
      <Calendar value={date} onChange={handleChange} />
    </div>
  );
};

export default ProfileCalendar;
