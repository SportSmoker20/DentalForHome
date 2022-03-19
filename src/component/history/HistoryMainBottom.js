import React from "react";
import { BsCheckCircleFill, BsDownload } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function HistoryMainBottom(props) {
  const onBookAppointment = () => {};

  if (props.past.length === 0) {
    return (
      <div className="booking-past-container">
        <div className="new-booking-bottom">
          <div className="new-booking-top-bottom">
            <div className="new-booking-select-option type">
              <select
                name="type"
                onChange={(e) => props.setBookType(e.target.value)}
              >
                <option value="Select Type">Select Type</option>
                <option value="Home">Home</option>
                <option value="Video">Video</option>
                <option value="Clinic">Clinic</option>
                <option value="Visit">Visit</option>
              </select>
            </div>
            <div className="new-booking-select-option">
              <select
                name="Type"
                onChange={(e) => props.setDuration(e.target.value)}
              >
                <option value="Select Duration">Select Duration</option>
                <option value="Delhi">Delhi</option>
                <option value="Delhi">Delhi</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            <div className="new-booking-book-outer">
              <div
                className="new-booking-book"
                onClick={() => onBookAppointment()}
              >
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Result</h1>

        <table className="zigzag">
          <thead>
            <tr>
              <th className="header">
                <div className="header-inner">
                  <div>Patient</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Dentist</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Location</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Date</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Time</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header">
                <div className="header-inner">
                  <div>Status</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header">Logo</th>
            </tr>
          </thead>
          {/* <tbody> */}
          {/* <tr> </tr> */}
          {/* </tbody> */}
        </table>
        <div className="no-appointment">No Past Appointments</div>
      </div>
    );
  } else {
    return (
      <div className="booking-past-container">
        <div className="new-booking-bottom">
          <div className="new-booking-top-bottom">
            <div className="new-booking-select-option type">
              <select
                name="type"
                onChange={(e) => props.setBookType(e.target.value)}
              >
                <option value="volvo">Select Type</option>
                <option value="Delhi">Home</option>
                <option value="Delhi">Video</option>
                <option value="Delhi">Clinic</option>
                <option value="Delhi">Visit</option>
              </select>
            </div>
            <div className="new-booking-select-option">
              <select
                name="Type"
                onChange={(e) => props.setLocation(e.target.value)}
              >
                <option value="volvo">Select Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Delhi">Delhi</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            <div className="new-booking-book-outer">
              <div
                className="new-booking-book"
                onClick={() => onBookAppointment()}
              >
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Result</h1>

        <table className="zigzag">
          <thead>
            <tr>
              <th className="header">
                <div className="header-inner">
                  <div>Patient</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Dentist</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Location</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Date</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header table-none">
                <div className="header-inner">
                  <div>Time</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header">
                <div className="header-inner">
                  <div>Status</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th className="header">Logo</th>
            </tr>
          </thead>
          <tbody bfcolor="red">
            {props.past.map((data, key) => (
              <tr key={key}>
                <td>{data.patient_name}</td>
                <td className="table-none">{data.dentist_name}</td>
                <td className="table-none">{data.location}</td>
                <td className="table-none">{data.date}</td>
                <td className="table-none">{data.time}</td>
                <td
                  style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    height: `100%`,
                    paddingTop: `10px`,
                  }}
                >
                  <BsCheckCircleFill style={{ color: `yellow` }} />
                </td>
                <td style={{ paddingLeft: `30px` }}>
                  <BsDownload style={{ color: `#044066` }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HistoryMainBottom;
