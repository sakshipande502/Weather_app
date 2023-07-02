// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=67d57393250315be0f379c3ed96a07a1
import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./card";
const Temp=()=>{
    const [searchval,setval]=useState("pune");
    const [tempinfo,settemp] =useState({});
    const weatherinfo = async()=>{
      try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q= ${searchval}&
        units=metric&appid=67d57393250315be0f379c3ed96a07a1`;
        const res = await fetch(url);
        const data = await res.json();
         const{temp,humidity,pressure} = data.main;
         const{main:mood} =data.weather[0];
          const{name} =data;
          const{speed} = data. wind;
          const{country,sunset}=data.sys;

          const mynewinfo ={
            temp,
            humidity,
            pressure,
            mood,
            name,
            speed,
            country,
            sunset
          };
          settemp( mynewinfo);

          
      }catch(error){
        console.log(error);
      }
    }
      useEffect(()=>{
         weatherinfo();
      },[]);  
    
    return<>
        <div className="wrap">
          <div className="search">
             <input type="search"
                placeholder="search city"
                autoFocus
                id="search"
                className="searchTerm"
                value={searchval}
                onChange={(e)=> setval(e.target.value)}
                />
                <button className="searchButton" type="button" onClick={weatherinfo}>
                    search
                </button>
          </div>
          </div>
         <Card tempinfo={tempinfo}></Card>
        
    </>

}

export default Temp;