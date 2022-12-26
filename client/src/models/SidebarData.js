import React from "react";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const AdminSidebarData = [
  {
    title: "Account Settings",
    path: "/dashboard/account",
    icon: <MdIcons.MdOutlineAccountCircle />,
  },
  {
    title: "Create Account",
    path: "/dashboard/create-account",
    icon: <IoIcons.IoMdCreate />,
  },
  {
    title: "Doctors",
    path: "/dashboard/doctors",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Feedbacks",
    path: "/dashboard/feedbacks",
    icon: <IoIcons.IoIosPaper />,
  },
];

export const PatientSidebarData = [
  {
    title: "Account",
    path: "/dashboard/account",
    icon: <MdIcons.MdOutlineAccountCircle />,
  },
  {
    title: "Current Appointments",
    path: "/dashboard/current-appointments",
    icon: <AiIcons.AiFillCalendar />,
  },
  {
    title: "Previous Appointments",
    path: "/dashboard/previous-appointments",
    icon: <AiIcons.AiFillSchedule />,
  },
];

export const DoctorSidebarData = [
  {
    title: "Account Settings",
    path: "/dashboard/account",
    icon: <MdIcons.MdOutlineAccountCircle />,
  },
  {
    title: "Patients",
    path: "/dashboard/patients",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Appointments",
    path: "/dashboard/appointments",
    icon: <AiIcons.AiFillSchedule />,
  },
  {
    title: "Reviews",
    path: "/dashboard/reviews",
    icon: <AiIcons.AiFillStar />,
  },
];
