import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Searchbar.css"
//import ShowData from "./ShowData";

function Searchbar() {

    const [dateValue, setDateValue] = useState(null);
    const[showData,setShowData] = useState([]);

    //fetching an api
    const getData = ()=>{
        axios.get("https://www.gov.uk/bank-holidays.json")
        .then((res)=>{
            const realData = res.data.scotland.events;
            setShowData(realData);
        })
    }

    useEffect(()=> getData(),[])

    //filter data by onclick
  function handleChange(){
  console.log(dateValue)
    const update = showData.filter((e)=>{
        return e.date===dateValue
        
    })
    console.log(update)
    setShowData(update)
  }


  return (
   <>
   <div className="parent_container">
     <div className="dateSelectorDiv">
     <input type="date" className="inputField" onChange={(e)=>setDateValue(e.target.value)} />
     <button className="btn"onClick={handleChange}>Find</button>
     </div>
     <div className="DataDispalyDiv">
         {
             showData.map((e)=>{
                 return (
                     <>
                     <h1 className="text_style">{e.title}</h1>
                     </>
                 )
             })
         }
     </div>
   </div>
   
   </>
    
  );
}

export default Searchbar;