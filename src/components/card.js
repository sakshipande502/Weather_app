import React, { useState,useEffect } from "react";

const Card=({tempinfo})=>{
   
    const {
        temp,
            humidity,
            pressure,
            mood,
            name,
            speed,
            country,
            sunset

    } = tempinfo;
    const [weatherState, setWeatheState] = useState("");
    useEffect(() => {
        if (mood) {
          switch (mood) {
            case "Clouds":
              setWeatheState("wi-day-cloudy");
              break;
            case "Haze":
              setWeatheState("wi-fog");
              break;
            case "Clear":
              setWeatheState("wi-day-sunny");
              break;
            case "Mist":
              setWeatheState("wi-dust");
              break;
    
            default:
              setWeatheState("wi-day-sunny");
              break;
          }
        }
      }, [mood]);
    
    let sec = sunset;
    let date = new Date(sec*1000);
    let times =`${date.getHours()}:${date.getMinutes()}`
    var fToCel = `${Math.round(temp-273.15)}`;
    return(
    <>
           <article className="widget">
             <div className="weatherIcon">
              <i className={`wi ${weatherState}`}></i>
              </div>
              <div className="weatherInfo">
                <div className="temperature">
                  <span>{ fToCel}&deg;</span>
                </div>
                <div className="description">
                   <div className="weatherCondition">
                       {mood}
                   </div>
                   <div className="place">
                      {name},{country}
                   </div>
                </div>
                
             </div>
             <div className="date">{new Date().toLocaleString()}</div>

             <div className="extra-temp">
                   <div className="temp-info-minmax">
                      <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside">
                           
                           {times}
                        </p>
                      </div>
                      <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">
                           
                           {humidity}
                        </p>
                      </div>
                 </div>
                   <div className="weather-extra-info">
                   <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside">
                          
                           {pressure}
                        </p>
                      </div>
                      <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">
                           
                           {speed}
                        </p>
                      </div>
                   </div>        
                      
                      
                 
                   
             </div>
          </article>
    </>
    )
}

export default Card;