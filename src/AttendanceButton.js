import React, { useEffect, useState } from "react";

const AttendanceButton = ({
  userHasPutAttendance,
  setuserHasPutAttendance,
}) => {
  const [dateTime, setDateTime] = useState(0);
  const handleClick = () => {
    setDateTime(new Date().valueOf());
    userHasPutAttendance
      ? setuserHasPutAttendance(false)
      : setuserHasPutAttendance(true);
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("AttendanceDetails")) || [];
    if (data[data.length - 1]?.action === "In") {
      setuserHasPutAttendance(true);
    }
  }, []);

  useEffect(() => {
    if (dateTime !== 0) {
      //Store all the click details
      let data = JSON.parse(localStorage.getItem("AttendanceDetails")) || [];
      let newData = JSON.stringify([
        ...data,
        { moment: dateTime, action: userHasPutAttendance ? "In" : "Out" },
      ]);
      localStorage.setItem("AttendanceDetails", newData);
    }
  }, [dateTime]);

  return (
    <>
      <button onClick={handleClick}>
        {userHasPutAttendance ? "ClockOut" : "ClockIn"}
      </button>
      <p>
        {dateTime !== 0 &&
          `${new Date(dateTime).getHours()}:${new Date(
            dateTime
          ).getMinutes()}:${new Date(dateTime).getSeconds()}`}
      </p>
    </>
  );
};

export default AttendanceButton;
