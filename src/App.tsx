import React, { useState } from 'react';
import { DayValue } from 'react-modern-calendar-datepicker';
import './App.css';
import DateInput from './DateInput'
import TimeSections from './TimeSections';

function App() {
  const [day, setDay] = useState<DayValue | null>(null);

  const dateChange = (value: DayValue) => {
    setDay(value);
  }

  return (
    <div>
      <DateInput handleDateChage={dateChange} />
      <TimeSections dueDate={day} />
    </div>
  );
}

export default App;
