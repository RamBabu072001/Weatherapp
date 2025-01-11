import React from 'react'


const TimeandLocation = (
  {weather:{ formattedLocaltime, name , country , dt,timezone}}
) => {
  return (
    <div className='mx-4 flex flex-col justify-center items-center'>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          
          {formattedLocaltime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{name}, {country}</p>
      </div>
    </div>
  )
}

export default TimeandLocation