import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import ReactModal from "react-modal";
import NewBookingSelect from "./NewBookingSelect";
import { GrClose } from "react-icons/gr";

function NewBookingUpcoming(props) {
  const userData = JSON.parse(localStorage.getItem("testObject"));
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const startMeet = async (id) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    await axios
      .put(process.env.REACT_APP_BACKEND + "/api/appointment", {
        id: id,
        link: process.env.REACT_APP_VIDEO + result,
      })
      .then((res, err) => {
        if (!err) {
          window.open(process.env.REACT_APP_VIDEO + result, "_blank");
        }
      });
  };
  const startUserMeet = async (id, link) => {
    await axios
      .put(process.env.REACT_APP_BACKEND + "/api/appointment/update", {
        id: id,
      })
      .then((res, err) => {
        if (!err) {
          window.open(link, "_blank");
        }
      });
  };

  if (props.upcoming.length === 0) {
    return (
      <div className="booking-upcoming-container">
        <h1>Upcoming Appointments</h1>
        <table class="zigzag">
          <thead>
            <tr>
              <th class="header">
                <div className="header-inner">
                  <div>Patient</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Dentist</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Location</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Date</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Time</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">
                <div className="header-inner">
                  <div>Status</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr> </tr>
          </tbody>
        </table>
        <div className="no-appointment">No Past Appointments</div>
      </div>
    );
  } else {
    return (
      <div className="booking-upcoming-container">
        <h1>Upcoming Appointments</h1>

        <table class="zigzag">
          <thead>
            <tr>
              <th class="header">
                <div className="header-inner">
                  <div>Patient</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Dentist</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Location</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Date</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Time</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">
                <div className="header-inner">
                  <div>Status</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">Edit</th>
            </tr>
          </thead>
          <tbody bfcolor="red">
            {props.upcoming.map((data, key) => (
              <tr key={key}>
                <td>{data.patient_name}</td>
                <td className="table-none">{data.dentist_name}</td>
                <td className="table-none">{data.location}</td>
                <td className="table-none">{data.date}</td>
                <td className="table-none">{data.time}</td>
                <td
                  style={{
                    textAlign: `center`,
                  }}
                >
                  {userData.type === "admin" ? (
                    <div
                      className="table-join start"
                      onClick={() => startMeet(data.id)}
                    >
                      <p>Start Now</p>
                    </div>
                  ) : (
                    <div>
                      {data.link === "" ? (
                        <BsCheckCircleFill
                          style={{ color: `yellow`, marginLeft: `-5vw` }}
                        />
                      ) : (
                        <div
                          className="table-join"
                          onClick={() => startUserMeet(data.id, data.link)}
                        >
                          <p>Join</p>
                        </div>
                      )}
                    </div>
                  )}
                </td>
                <td style={{ paddingLeft: `30px` }}>
                  <BsThreeDotsVertical
                    onClick={() => handleOpenModal(data.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactModal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
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
            },
          }}
        >
          <div className="modal-container">
            <div className="modal-container-content">
              <div className="booking-top-container-title">
                <p>Edit your Appointment</p>
              </div>
              <div className="booking-top-container-close">
                <GrClose
                  onClick={handleCloseModal}
                  style={{ height: `25px`, width: `25px` }}
                />
              </div>
            </div>
            <div className="booking-top-container-content edit">
              Please provide the following details
            </div>
            <NewBookingSelect />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default NewBookingUpcoming;
