import React from 'react';


var Datetime =() => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    return (
        <div>
            <p>{displaytodaysdate}</p>
        </div>
    )
    }

export default Datetime;


