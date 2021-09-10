import { useEffect, useState } from "react";

const AttendanceLogger = ({ userHasPutAttendance }) => {
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  useEffect(() => {
    setAttendanceDetails(
      JSON.parse(localStorage.getItem("AttendanceDetails")) || []
    );
  }, [userHasPutAttendance]);
  return (
    <div>
      {attendanceDetails.map((detail, index) => {
        let detailDate = new Date(detail.moment);
        return (
          <p key={index}>
            {`${detailDate.getDate()}/${
              detailDate.getMonth() + 1
            }/${detailDate.getFullYear()} - ${detailDate.getHours()}:${detailDate.getMinutes()}:${detailDate.getSeconds()}`}
            : {detail.action}
          </p>
        );
      })}
    </div>
  );
};

export default AttendanceLogger;
