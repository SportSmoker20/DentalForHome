import React from 'react'
import { BsCheckCircleFill, BsThreeDotsVertical } from 'react-icons/bs'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

function NewBookingPast() {

  const tableData = [
    {
      patient: "Prakhar",
      dentist: "Mitali",
      location: "Delhi",
      date: "22/01/22",
      time: "3:00pm",
      status: true,
    },
    {
      patient: "Prakhar",
      dentist: "Mitali",
      location: "Delhi",
      date: "22/01/22",
      time: "3:00pm",
      status: true,
    },
    {
      patient: "Prakhar",
      dentist: "Mitali",
      location: "Delhi",
      date: "22/01/22",
      time: "3:00pm",
      status: true,
    },
    {
      patient: "Prakhar",
      dentist: "Mitali",
      location: "Delhi",
      date: "22/01/22",
      time: "3:00pm",
      status: true,
    }
  ]

  return (
    <div className="booking-past-container">
      <h1>Past Appointments</h1>

      {/* <table class="zigzag">
        <thead>
          <tr>
            <th class="header">
              <div className="header-inner">
                <div>Patient</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}}/>
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">
              <div className="header-inner">
                <div>Dentist</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">
              <div className="header-inner">
                <div>Location</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">
              <div className="header-inner">
                <div>Date</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">
              <div className="header-inner">
                <div>Time</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">
              <div className="header-inner">
                <div>Status</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">Logo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prakhar</td>
            <td className='table-none'>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td>logo</td>
            <td>logo</td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td>logo</td>
            <td>logo</td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td>logo</td>
            <td>logo</td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td>logo</td>
            <td>logo</td>
          </tr>
        </tbody>
      </table> */}
       <table class="zigzag">
        <thead>
          <tr>
            {/* <div className="zigzag-head"> */}
            <th class="header">
              <div className="header-inner">
                <div>Patient</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}}/>
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header table-none">
              <div className="header-inner">
                <div>Dentist</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header table-none">
              <div className="header-inner">
                <div>Location</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header table-none">
              <div className="header-inner">
                <div>Date</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header table-none">
              <div className="header-inner">
                <div>Time</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">
              <div className="header-inner">
                <div>Status</div>
                <div className='header-inner-icon'>
                  <IoMdArrowDropup style={{marginBottom:`-6px`}} />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </th>
            <th class="header">Logo</th>
            {/* </div> */}
          </tr>
        </thead>
        <tbody bfcolor="red">
        {/* <tr style={{height:`20px`,paddingTop:`0`}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
          {/* <tr >
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td style={{paddingLeft:`45px`}}><BsCheckCircleFill /></td>
            <td style={{paddingLeft:`30px`}}>
              <div>
              <BsThreeDotsVertical />
              <div className="three-dot-icon ">

              </div>
              </div>
              </td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td style={{paddingLeft:`45px`}}><BsCheckCircleFill /></td>
            <td style={{paddingLeft:`30px`}}><BsThreeDotsVertical /></td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td style={{paddingLeft:`45px`}}><BsCheckCircleFill /></td>
            <td style={{paddingLeft:`30px`}}><BsThreeDotsVertical /></td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>Mitali</td>
            <td>Dwarka</td>
            <td>22/01/22</td>
            <td>3:00pm</td>
            <td style={{paddingLeft:`45px`}}><BsCheckCircleFill /></td>
            <td style={{paddingLeft:`30px`}}><BsThreeDotsVertical /></td>
          </tr> */}
          {tableData.map(data=>(
            <tr>
            <td>{data.patient}</td>
            <td className='table-none'>{data.dentist}</td>
            <td className='table-none'>{data.location}</td>
            <td className='table-none'>{data.date}</td>
            <td className='table-none'>{data.time}</td>
            <td style={{display:`flex`,flexDirection:`row`,justifyContent:`center`,alignItems:`center`,height:`100%`,paddingTop:`10px`}}><BsCheckCircleFill style={{color:`yellow`}}/></td>
            <td style={{paddingLeft:`30px`}}><BsThreeDotsVertical /></td>
          </tr>
          ))}
        </tbody>


      </table>
    </div>
  )
}

export default NewBookingPast