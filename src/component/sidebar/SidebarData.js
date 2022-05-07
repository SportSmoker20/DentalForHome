import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/home",
    icon: (
      <AiIcons.AiFillDashboard
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "My Plan",
    path: "/myplan",
    icon: (
      <IoIcons.IoIosPaper
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/service",
    icon: (
      <FaIcons.FaBriefcaseMedical
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "My bookings",
    path: "/booking",
    icon: (
      <FaIcons.FaCalendarAlt
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: (
      <FaIcons.FaHistory
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/support",
    icon: (
      <FiLogOut
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
];

export const AdminSidebarData = [
  {
    title: "Dashboard",
    path: "/home",
    icon: (
      <AiIcons.AiFillDashboard
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Appointments",
    path: "/adminAppointment",
    icon: (
      <IoIcons.IoIosPaper
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Patients",
    path: "/patient",
    icon: (
      <FaIcons.FaBriefcaseMedical
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "My bookings",
    path: "/adminBooking",
    icon: (
      <FaIcons.FaCalendarAlt
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: (
      <FaIcons.FaHistory
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/support",
    icon: (
      <FiLogOut
        className="fade-1"
        style={{ color: `rgb(4,64,132)` }}
      />
    ),
    cName: "nav-text",
  },
];
