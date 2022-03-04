import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

function NewBookingPast() {
  return (
    <div className="booking-upcoming-container">
      <h1>Past Appointments</h1>

      <table class="zigzag">
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
      </table>
    </div>
  )
}

export default NewBookingPast