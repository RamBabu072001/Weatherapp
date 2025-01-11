import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaThermometerEmpty } from "react-icons/fa";


import React from 'react'

const TempandDetail = ({ weather: { temp, details, feels_like, humidity, temp_max, temp_min, speed, icon, sunrise, sunset } }) => {

    const verticalDetail = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like}°`
        },
        {
            id: 2,
            Icon: FiWind,
            title: "Wind",
            value: `${speed} km/h`
        },
        {
            id: 3,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity}%`
        }

    ]

    const HorizontalDetail = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max}°`

        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min}°`
        }

    ]


    return (
        <>
            <div className=" text-white flex flex-col my-4 p-10 justify-center mx-4 rounded-lg md:flex-row" style={{border:"0.5px solid gray"}}>
                <div className=" px-24 py-6  border-neutral-600 md:border-r "  >
                    <img src={icon} className=""></img>
                    <p className="font-light my-3 text-4xl">{details}</p>
                    <p className="font-light  text-6xl">{`${temp.toFixed()}°`}</p>
                </div>
                <div className="p-16  flex  justify-center items-start rounded-lg space-x-10 " >
                

                <div>
                {verticalDetail.map((item) => {
                    return (<div key={item.id} className="flex  text-xl justify-start my-4 gap-2 items-center ">
                        <item.Icon size={30 } />
                        {item.title} : 
                        {item.value}


                    </div>)
                })}
                </div>

                <div>
                {HorizontalDetail.map((items) => {
                    return (<div key={items.id} className="flex text-xl items-center gap-2  my-4 justify-start">
                        <items.Icon size={30} />
                        {items.title} : 
                        {items.value}
                        {items.day}
                    </div>)
                })}
                </div>
        
            </div>


        </div >
  </>
  )
}

export default TempandDetail