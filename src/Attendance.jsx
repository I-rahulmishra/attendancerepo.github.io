import React, { useState } from "react";
import Datetime from "../src/Datetime";
import AttendanceButton from "./AttendanceButton";
import AttendanceLogger from "./AttendanceLogger";
import AttendanceResult from "./AttendanceResult";

const Attendance = () => {
  const [userHasPutAttendance, setuserHasPutAttendance] = useState(false);
  return (
    <>
      <div className="attendancebox col-10 mx-auto">
        <h1> Attendance Record </h1>
        <div className="flex-container">
          <div className="child col-4 mx-auto">
            Today's Date <Datetime />
          </div>
          <div className="child col-6 mx-auto ">
            <AttendanceButton
              userHasPutAttendance={userHasPutAttendance}
              setuserHasPutAttendance={setuserHasPutAttendance}
            />
          </div>
          <div className="child col-4 row-6 mx-auto">
            <AttendanceLogger userHasPutAttendance={userHasPutAttendance} />
          </div>
          <div className="child col-6 mx-auto">
            <AttendanceResult userHasPutAttendance={userHasPutAttendance} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
