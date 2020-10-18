import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { Day, DayValue, utils } from "react-modern-calendar-datepicker";

interface DateInputProps {
  handleDateChage: (value: DayValue) => void;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  const [tomorrow, setTomorrow] = useState<Day | null>(null);

  useEffect(() => {
    const today = utils("en").getToday();
    setTomorrow({...today, day: today.day + 1});
  }, []);

  const dateChange = (value: DayValue) => {
    console.log(value);
    setSelectedDay(value);
    props.handleDateChage(value);
  }

  return (
      <DatePicker
        value={selectedDay}
        onChange={dateChange}
        minimumDate={tomorrow || utils("en").getToday()}
        inputPlaceholder="Select a day"
        shouldHighlightWeekends
      />
  );
};

export default DateInput;