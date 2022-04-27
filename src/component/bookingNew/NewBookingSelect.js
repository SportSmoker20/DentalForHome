import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import axios from "axios";
import ReactModal from "react-modal";
import { BsCalendarCheck } from "react-icons/bs";
import '../../css/NewBooking.css'
import Alert from "../other/Alert";


const itemsToShow = 3;

const getMid = () => Math.ceil(itemsToShow / 2) - 1;

function convert(date) {
  const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

function NewBookingSelect(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState();
  const [date, setDate] = useState(convert(startDate));
  const[newDate,setNewDate] = useState()
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [bookType, setBookType] = useState();
  const userData = JSON.parse(localStorage.getItem("testObject"));
  const [showBookModal, setShowBookModal] = useState(false);
  const[alertName,setAlertName] = useState({
    msg: "",

  })
  const[alertLocation,setAlertLocation] = useState({
    msg: "",

  })
  const[alertType,setAlertType] = useState({
    msg: "",

  })
  const handleBookCloseModal = () => {
    setShowBookModal(false);
  };
  const handleBookOpenModal = () => {
    setShowBookModal(true);
  };

  // const [midItemIndex, setMidItemIndex] = useState(getMid);
  const midItemIndex = getMid;
  // const onChange = (_, next) => {
  //   const mid = getMid();
  //   setMidItemIndex(mid + next.index);
  // };

  const onDateChange = (date) => {
    setStartDate(date);
    const temp = convert(date);
    setDate(temp);
  };
  const items = [
    { id: 1, title: "12:00 AM - 12:30 AM" },
    { id: 2, title: "12:30 AM - 01:00 AM" },
    { id: 3, title: "01:00 AM - 01:30 AM" },
    { id: 4, title: "01:30 AM - 02:00 AM" },
    { id: 5, title: "02:00 AM - 02:30 AM" },
    { id: 6, title: "02:30 AM - 03:00 AM" },
    { id: 7, title: "03:00 AM - 03:30 AM" },
    { id: 8, title: "03:30 AM - 04:00 AM" },
    { id: 9, title: "04:00 AM - 04:30 AM" },
    { id: 10, title: "04:30 AM - 05:00 AM" },
    { id: 11, title: "05:00 AM - 05:30 AM" },
    { id: 12, title: "05:30 AM - 06:00 AM" },
    { id: 13, title: "06:00 AM - 06:30 AM" },
    { id: 14, title: "06:30 AM - 07:00 AM" },
    { id: 15, title: "07:00 AM - 07:30 AM" },
    { id: 16, title: "07:30 AM - 08:00 AM" },
    { id: 17, title: "08:00 AM - 08:30 AM" },
    { id: 18, title: "08:30 AM - 09:00 AM" },
    { id: 19, title: "09:00 AM - 09:30 AM" },
    { id: 20, title: "09:30 AM - 10:00 AM" },
    { id: 21, title: "10:00 AM - 10:30 AM" },
    { id: 22, title: "10:30 AM - 11:00 AM" },
    { id: 23, title: "11:00 AM - 11:30 AM" },
    { id: 24, title: "11:30 AM - 12:00 PM" },
    { id: 25, title: "12:00 PM - 12:30 PM" },
    { id: 26, title: "12:30 PM - 01:00 PM" },
    { id: 27, title: "01:00 PM - 01:30 PM" },
    { id: 28, title: "01:30 PM - 02:00 PM" },
    { id: 29, title: "02:00 PM - 02:30 PM" },
    { id: 30, title: "02:30 PM - 03:00 PM" },
    { id: 31, title: "03:00 PM - 03:30 PM" },
    { id: 32, title: "03:30 PM - 04:00 PM" },
    { id: 33, title: "04:00 PM - 04:30 PM" },
    { id: 34, title: "04:30 PM - 05:00 PM" },
    { id: 35, title: "05:00 PM - 05:30 PM" },
    { id: 36, title: "05:30 PM - 06:00 PM" },
    { id: 37, title: "06:00 PM - 06:30 PM" },
    { id: 38, title: "06:30 PM - 07:00 PM" },
    { id: 39, title: "07:00 PM - 07:30 PM" },
    { id: 40, title: "07:30 PM - 08:00 PM" },
    { id: 41, title: "08:00 PM - 08:30 PM" },
    { id: 42, title: "08:30 PM - 09:00 PM" },
    { id: 43, title: "09:00 PM - 09:30 PM" },
    { id: 44, title: "09:30 PM - 10:00 PM" },
    { id: 45, title: "10:00 PM - 10:30 PM" },
    { id: 46, title: "10:30 PM - 11:00 PM" },
    { id: 47, title: "11:00 PM - 11:30 PM" },
    { id: 48, title: "11:30 PM - 12:00 AM" },
  ];
  const onBookAppointment = async () => {
    if (name === "Select Name" || name === undefined) {
      setAlertName({
        msg: "Select Name"
      })
    } else if (location === "Select Location" || location === undefined) {
      setAlertLocation({
        msg: "Select Location"
      })
    } else if (bookType === "Select Type" || bookType === undefined) {
      setAlertType({
        msg: "Select Type"
      })
    } else {
      await axios
        .post(process.env.REACT_APP_BACKEND + "/api/appointment", {
          user_id: userData.id,
          patient_name: name,
          dentist_name: "Mitali",
          location: location,
          date: newDate,
          time: time,
          type: bookType,
        })
        .then((res, err) => {
          if (err) {
            alert(err);
          } else {
            handleBookOpenModal()
            props.setUpcoming((upcoming) => [...upcoming, res]);
          }
        });
      
      props.setRefresh(true);
    }
  };

  return (
    <div className="new-booking-select">
      <div className="new-booking-top">
        <div className="new-booking-select-option">
          <select name="name" onChange={(e) => {
            setAlertName({
              msg: ""
            })
            setName(e.target.value)
          }}>
            <option value="Select Name">Select Name</option>
            <option value="Prakhar">Prakhar</option>
            <option value="Prakhar">Prakhar</option>
            <option value="Prakhar">Prakhar</option>
          </select>
          {alertName.msg!=="" ? <div className="select-alert"><Alert alert={alertName}/></div>: null} 
        </div>
        <div className="new-booking-select-option">
          <select name="Type" onChange={(e) => {
             setAlertLocation({
              msg: ""
            })
            setLocation(e.target.value)
          }}>
            <option value="Select Location">Select Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
          </select>
          {alertLocation.msg!=="" ? <div className="select-alert"><Alert alert={alertLocation}/></div>: null} 

        </div>

        <div className="new-booking-select-option type">
          <select name="type" onChange={(e) => {
            setAlertType({
              msg: ""
            })
            setBookType(e.target.value)
          }}>
            <option value="Select Type">Select Type</option>
            <option value="Home">Home</option>
            <option value="Video">Video</option>
            <option value="Clinic">Clinic</option>
            <option value="Visit">Visit</option>
          </select>
          {alertType.msg!=="" ? <div className="select-alert"><Alert alert={alertType}/></div>: null} 

        </div>
      </div>
      <div className="new-booking-bottom">
        <div className="new-booking-top-bottom">
          {/* <div className="new-booking-date">
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div> */}
          <div className="new-booking-select-option type">
          <select name="time" onChange={(e) => setTime(e.target.value)}>
            <option value="Select Type">Select Type</option>
            {items.map((data)=>(
              <option value={data.title}>{data.title}</option>
            ))}
          </select>
        </div>
          <div className="new-booking-date">
            {/* <ReactDatePicker
              selected={startDate}
              onChange={(date) => onDateChange(date)}
            /> */}
            <input type='date' name="newDate" onChange={(e)=>setNewDate(e.target.value)}/>
          </div>
         
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
      <ReactModal
        isOpen={showBookModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleBookCloseModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.28)",
          },
          content: {
            position: "absolute",
            
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "20px",
            outline: "none",
            padding: "20px",
            inset: "auto",
            width: '20vw'
          },
        }}
      >
        <div className="modal-container">
          <div className="modal-container-content-book">
            
            <div>
              <BsCalendarCheck style={{height:`80px`,width:`80px`}}/>
            </div>
            <div>
              <p>{userData.name},we've got you</p>
              <p>confirmed for your appointment.</p>
            </div>
            
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default NewBookingSelect;
