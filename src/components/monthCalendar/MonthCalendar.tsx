import './MonthCalendar.scss';
import * as React from 'react';

export interface PropertiesMonthCalendar {
  label: string;
}

const MonthCalendar: React.FC<PropertiesMonthCalendar> = (
  props: PropertiesMonthCalendar
) => (
  <div>
    <label>{props.label}</label>
    <div className="calendar-container">
      <button id="btn_calendar_back" className="btn-icon">
        <img
          className="arrow left"
          src={require('../../icons/arrow.svg')}
          alt="arrow left"
        />
      </button>
      <div className="date-container">
        <h3>October</h3>
        <h4>2020</h4>
      </div>
      <button id="btn_calendar_next" className="btn-icon">
        <img
          className="arrow right"
          src={require('../../icons/arrow.svg')}
          alt="arrow right"
        />
      </button>
    </div>
  </div>
);

export default MonthCalendar;
