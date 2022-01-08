import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Searchbar() {
  useEffect(() => {
    async function getData() {
      let res = await axios.get("https://www.gov.uk/bank-holidays.json");
      let objectArray = res.data.scotland.events;
      //  console.log(objectArray);
      setShowData(objectArray);
    }
    getData();
  }, []);

  function handleChange(){
   console.log(showData);
   
  }

  const [dateValue, setDateValue] = useState(null);
  // console.log(dateValue);
   const[showData,setShowData] = useState(null);
  return (
    <div className="App">
      <h1>SELECT DATE HERE</h1>
      {/* Date picker div */}
      <div className="date_picker_div">
        <DatePicker
          dateFormat="mm/dd/yyyy"
          showYearDropdown
          scrollableMonthYearDropdown
          selected={dateValue}
          onChange={(date) => {
            setDateValue(date);
          }}
        />
        <button onClick={handleChange}>Find Holiday</button>
      </div>
      {/* Div for showcase our data */}
      <div className="show_data_div">

      </div>
    </div>
  );
}

export default Searchbar;