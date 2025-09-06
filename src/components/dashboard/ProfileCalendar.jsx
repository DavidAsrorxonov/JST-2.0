import { Calendar } from "@heroui/calendar";

const ProfileCalendar = ({ date, setDate, setDateChosen }) => {
  const handleChange = (newDate) => {
    setDate(newDate);
    setDateChosen(true);
  };

  return (
    <div>
      <Calendar
        value={date}
        onChange={handleChange}
        color="primary"
        variant="bordered"
        classNames={{
          base: "bg-[#171717] border-white/30",
          headerWrapper: "bg-[#171717] border-white/30",
          header: "text-white",
          title: "text-white",
          content: "bg-[#171717]",
          gridHeader: "bg-[#171717]",
          gridHeaderCell: "text-gray-300",
          cell: "text-white hover:bg-white/10",
          cellButton:
            "text-white hover:bg-white/10 data-[selected]:bg-[#e5e5e5] data-[selected]:text-black",
          prevButton: "text-gray-300 hover:text-white hover:bg-white/10",
          nextButton: "text-gray-300 hover:text-white hover:bg-white/10",
        }}
        locale="en-US"
      />
    </div>
  );
};

export default ProfileCalendar;
