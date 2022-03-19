import React from "react";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function NewBookingPast(props) {
  if (props.past.length === 0) {
    return (
      <div className="booking-past-container">
        <h1>Past Appointments</h1>
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
      <div className="booking-past-container">
        <h1>Past Appointments</h1>

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
                  <BsCheckCircleFill style={{ color: `green` }} />
                </td>
                <td style={{ paddingLeft: `30px` }}>
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewBookingPast;
