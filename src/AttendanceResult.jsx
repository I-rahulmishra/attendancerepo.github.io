import moment from "moment";
import { useEffect, useState } from "react";

const AttendanceResult = ({ userHasPutAttendance }) => {
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [totalTimePresent, setTotalTimePresent] = useState(0);
  useEffect(() => {
    setAttendanceDetails(
      JSON.parse(localStorage.getItem("AttendanceDetails")) || []
    );
  }, [userHasPutAttendance]);

  useEffect(() => {
    if (attendanceDetails !== 0) {
      let totalTime = 0;
      if (attendanceDetails.length === 1) {
        const date1 = moment(attendanceDetails[0].moment);
        const date2 = moment();
        setTotalTimePresent(date2.diff(date1));
      } else if (attendanceDetails.length % 2 !== 0) {
        // Odd scenerio
        let date1 = moment(
          attendanceDetails[attendanceDetails.length - 1].moment
        );
        let date2 = moment();
        totalTime = date2.diff(date1);
        for (let i = 0; i <= attendanceDetails.length - 2; i = i + 2) {
          date1 = moment(attendanceDetails[i].moment);
          date2 = moment(attendanceDetails[i + 1].moment);
          totalTime = totalTime + date2.diff(date1);
        }
        setTotalTimePresent(totalTime);
      } else {
        //Even scenerio
        for (let i = 0; i < attendanceDetails.length; i = i + 2) {
          let date1 = moment(attendanceDetails[i].moment);
          let date2 = moment(attendanceDetails[i + 1].moment);
          totalTime = totalTime + date2.diff(date1);
        }
        setTotalTimePresent(totalTime);
      }
    }
  }, [attendanceDetails]);

  return (
    <div>
      {Math.floor(totalTimePresent / 1000 / 60 / 60) > 8
        ? "You are marked present"
        : `You have not completed 8 hours yet. You have completed ${moment
            .utc(totalTimePresent)
            .format("HH:mm")} hours`}
    </div>
  );
};

export default AttendanceResult;
