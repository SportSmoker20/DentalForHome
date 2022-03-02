import React from "react";
import AppointmentCalender from "./AppointmentCalender";
import { HiHome } from "react-icons/hi";
import { MdVoiceChat } from "react-icons/md";

function ScheduleAppointment() {
  return (
    <div className="schedule-main">
      <div>
      <AppointmentCalender />
      {/* <div className='calender-main'></div> */}
      {/* <div className='time-main'></div> */}
      </div>
      <div className="schedule-option-1">
        <div className="schedule-option">
          <div className="schedule-option-outer">
            <div className="schedule-option-main">
              <HiHome className="schedule-option-icon" />
            </div>
            <p>Dentist Visit</p>
          </div>
          <div className="schedule-option-line" />
          <div className="schedule-option-outer">
            <div className="schedule-option-main">
              <MdVoiceChat className="schedule-option-icon" />
            </div>
            <p>Video Call</p>
          </div>
        </div>
        <div className="book-main">
          <p>Book</p>
          <p>Appointment</p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
