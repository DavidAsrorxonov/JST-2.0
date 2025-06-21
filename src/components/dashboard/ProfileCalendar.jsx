import { Calendar } from "@heroui/calendar";

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
