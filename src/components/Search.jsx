import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BiCurrentLocation } from "react-icons/bi";


function Search({ setquery, setunits }) {
  const [city, setCity] = useState("");
  const handleClick = () => {
    if (city !== "") { setquery({ q: city }) };
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setquery({ lat: latitude, lon: longitude })
      })
    }
  }
  return (
    <div className='text-white flex flex-row justify-center  items-center bg-black'>
      <div className='flex  items-center space-x-4'>
        <input type="text" value={city} placeholder="Search city" className='  bg-white py-2 px-3  my-4 focus:outline-none text-gray-800 rounded-lg'
          onChange={(e) => { setCity(e.currentTarget.value) }}  style={{width:"17rem"}}></input>

        <CiSearch size={30} className='cursor-pointer hover:scale-125 transition ease-out' onClick={handleClick} />
        <BiCurrentLocation size={30} className='cursor-pointer hover:scale-125 transition ease-out' onClick={handleLocationClick} />
      </div>

      <div className='ms-8  hidden justify-center items-center md:flex md:w-96 '>
        <button className='text-2xl font-medium hover:scale-125 transition ease-out' onClick={() => setunits('metric')}>°C</button>
        <p className='text-2xl mx-2'>|</p>
        <button className='text-2xl font-medium hover:scale-125 transition ease-out' onClick={() => setunits('imperial')} >°F</button>
      </div>

    </div>
  )
}

export default Search