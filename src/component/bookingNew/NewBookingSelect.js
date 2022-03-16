import Carousel from "react-elastic-carousel";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";

import Item from "./Item";
import { AiTwotoneHome } from "react-icons/ai";
import { RiVideoChatFill } from "react-icons/ri";
import axios from "axios";

const itemsToShow = 3;

const getMid = () => Math.ceil(itemsToShow / 2) - 1;

function convert(date) {
  // var date = new Date(str),
  const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

function NewBookingSelect(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [date, setDate] = useState(convert(startDate));
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [bookType, setBookType] = useState();
  const userData = JSON.parse(localStorage.getItem("testObject"));

  // const [bookOptionHome, setBookOptionHome] = useState();
  // const [bookOptionVideo, setBookOptionVideo] = useState();

  // const onChange1 = () => {
  //   if (bookOptionVideo) {
  //     setBookOptionVideo(false);
  //     setBookOptionHome(true);
  //   } else {
  //     setBookOptionHome(true);
  //   }
  // };
  // const onChange2 = () => {
  //   if (bookOptionHome) {
  //     setBookOptionHome(false);
  //     setBookOptionVideo(true);
  //   } else {
  //     setBookOptionVideo(true);
  //   }
  // };

  const [midItemIndex, setMidItemIndex] = useState(getMid);
  // 0 based

  const onChange = (_, next) => {
    const mid = getMid();
    setMidItemIndex(mid + next.index);
  };

  const onDateChange = (date) => {
    setStartDate(date);
    const temp = convert(date);
    setDate(temp);
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

  const onBookAppointment = async () => {
    if (name === "Select Name" || name === undefined) {
      alert("Please Select Name");
    } else if (location === "Select Location" || location === undefined) {
      alert("Please Select Location");
    } else if (bookType === "Select Type") {
      alert("Please Select Booking Type");
    } else {
      // let bookType;
      // if (bookOptionHome) {
      //   bookType = "Home";
      // } else {
      //   bookType = "VideoCall";
      // }
      await axios
        .post("https://homedentist.in/api/appointment", {
          user_id: userData.id,
          patient_name: userData.name,
          dentist_name: "Mitali",
          location: location,
          date: date,
          time: items[midItemIndex].title,
          type: bookType,
        })
        .then((res, err) => {
          if (err) {
            alert(err);
          } else {
            props.setUpcoming((upcoming) => [...upcoming, res]);
          }
        });
      // props.setUpcoming(upcoming => [...upcoming, data]);
    }
  };

  return (
    <div className="new-booking-select">
      <div className="new-booking-top">
        <div className="new-booking-select-option">
          <select name="name" onChange={(e) => setName(e.target.value)}>
            <option value="volvo">Select Name</option>
            <option value="Prakhar">Prakhar</option>
            <option value="Prakhar">Prakhar</option>
            <option value="Prakhar">Prakhar</option>
          </select>
        </div>
        <div className="new-booking-select-option">
          <select name="Type" onChange={(e) => setLocation(e.target.value)}>
            <option value="volvo">Select Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        <div className="new-booking-select-option type">
            <select name="type" onChange={(e) => setBookType(e.target.value)}>
              <option value="volvo">Select Type</option>
              <option value="Delhi">Home</option>
              <option value="Delhi">Video</option>
            </select>
          </div>
        
      </div>
      <div className="new-booking-bottom">
        {/* <div className="new-booking-time">
          <div className="time-container-inner" />
          <Carousel
            itemsToShow={itemsToShow}
            enableMouseSwipe={true}
            onNextStart={onChange}
            onPrevStart={onChange}
          >
            {items.map((item, id) => (
              <Item
                style={{
                  transition:
                    midItemIndex === id
                      ? "transform 700ms ease"
                      : "transform 300ms ease",
                  transform: midItemIndex === id ? "scaleY(1.1)" : "scale(0.9)",
                  // backgroundImage: midItemIndex === id ? "url('../../images/download.jpg')" : "rgb(62,189,143)",
                }}
                className={
                  midItemIndex === id ? "new-time-top" : "new-time-div"
                }
                key={id}
              >
                {item.title}
              </Item>
            ))}
          </Carousel>
        </div> */}

        <div className="new-booking-top-bottom">
          <div className="new-booking-date">
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
          <div className="new-booking-date">
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => onDateChange(date)}
          />
        </div>

          {/* <div
            className={
              bookOptionHome
                ? "new-booking-icon iconSelect"
                : "new-booking-icon"
            }
            onClick={() => onChange1()}
          >
            <AiTwotoneHome
              className={
                bookOptionHome
                  ? "new-booking-icon-inner iconSelect"
                  : "new-booking-icon-inner"
              }
            />
          </div> */}
          {/* <div
            className={
              bookOptionVideo
                ? "new-booking-icon iconSelect"
                : "new-booking-icon"
            }
            onClick={() => onChange2()}
          >
            <RiVideoChatFill
              className={
                bookOptionVideo
                  ? "new-booking-icon-inner iconSelect"
                  : "new-booking-icon-inner"
              }
            />
          </div> */}
          <div className="new-booking-book-outer">
            <div
              className="new-booking-book"
              onClick={() => onBookAppointment()}
            >
              <p>Book Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBookingSelect;
