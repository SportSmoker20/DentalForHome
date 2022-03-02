import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from "react-elastic-carousel";

import "../../css/Booking.css";
import Item from "./Item";

const itemsToShow = 3;

const getMid = () => Math.ceil(itemsToShow / 2) - 1; 
function AppointmentCalender() {
  const [startDate, setStartDate] = useState();

  const [midItemIndex, setMidItemIndex] = useState(getMid);
  // 0 based
  

  const onChange = (_, next) => {
    const mid = getMid();
    setMidItemIndex(mid + next.index);
  };  


  const items = [
    { id: 1, title: "12:00 AM" },
    { id: 2, title: "12:30 AM" },
    { id: 3, title: "01:00 AM" },
    { id: 4, title: "01:30 AM" },
    { id: 5, title: "02:00 AM" },
    { id: 6, title: "02:30 AM" },
    { id: 7, title: "03:00 AM" },
    { id: 8, title: "03:30 AM" },
    { id: 9, title: "04:00 AM" },
    { id: 10, title: "04:30 AM" },
    { id: 11, title: "05:00 AM" },
    { id: 12, title: "05:30 AM" },
    { id: 13, title: "06:00 AM" },
    { id: 14, title: "06:30 AM" },
    { id: 15, title: "07:00 AM" },
    { id: 16, title: "07:30 AM" },
    { id: 17, title: "08:00 AM" },
    { id: 18, title: "08:30 AM" },
    { id: 19, title: "09:00 AM" },
    { id: 20, title: "09:30 AM" },
    { id: 21, title: "10:00 AM" },
    { id: 22, title: "10:30 AM" },
    { id: 23, title: "11:00 AM" },
    { id: 24, title: "11:30 AM" },

    { id: 25, title: "12:00 PM" },
    { id: 26, title: "12:30 PM" },
    { id: 27, title: "01:00 PM" },
    { id: 28, title: "01:30 PM" },
    { id: 29, title: "02:00 PM" },
    { id: 30, title: "02:30 PM" },
    { id: 31, title: "03:00 PM" },
    { id: 32, title: "03:30 PM" },
    { id: 33, title: "04:00 PM" },
    { id: 34, title: "04:30 PM" },
    { id: 35, title: "05:00 PM" },
    { id: 36, title: "05:30 PM" },
    { id: 37, title: "06:00 PM" },
    { id: 38, title: "06:30 PM" },
    { id: 39, title: "07:00 PM" },
    { id: 40, title: "07:30 PM" },
    { id: 41, title: "08:00 PM" },
    { id: 42, title: "08:30 PM" },
    { id: 43, title: "09:00 PM" },
    { id: 44, title: "09:30 PM" },
    { id: 45, title: "10:00 PM" },
    { id: 46, title: "10:30 PM" },
    { id: 47, title: "11:00 PM" },
    { id: 48, title: "11:30 PM" },
  ];

  return (
    <div className="calendar-container">
      <div className="date-container">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          // style={dateStyle}
          // className='date-main'
        />
      </div>
      <div className="time-container">
        {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    /> */}
        <div className="time-container-inner" />
        <Carousel itemsToShow={itemsToShow} enableMouseSwipe={true} onNextStart={onChange}
        onPrevStart={onChange}>
          {items.map((item,id) => (
            <Item
              style={{
                transition:
                  midItemIndex === id
                    ? "transform 700ms ease"
                    : "transform 300ms ease",
                transform: midItemIndex === id ? "scale(1.2)" : "scale(1)",
                // backgroundImage: midItemIndex === id ? "url('../../images/download.jpg')" : "rgb(62,189,143)",
              }}
              className={midItemIndex === id ? "time-top" : "time-div"}
              
              key={id}
            >
              {item.title}
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AppointmentCalender;
