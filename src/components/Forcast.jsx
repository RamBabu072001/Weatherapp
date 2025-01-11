import React from 'react'

function Forcast({ data }) {

  return (
    <div className='text-white my-4 flex flex-col p-4'>
      <div className='flex items-center justify-center my-4 mt-2'>
        <p className='uppercase font-medium text-xl'> 3 hour step Forcast</p>
      </div>

      <div className='flex  flex-col items-center justify-center md:space-x-10 md:flex-row '>
        {data.map((items, index) => {
          return (<div key={index} className='flex flex-col my-3 p-4 justify-center rounded-sm items-center '
            style={{ border: "0.5px solid gray" }}>

            <img src={items.icon} alt="image"></img>
            <p>{items.title}</p>
            <p>{items.date}</p>
            <p>{items.temp.toFixed()}°</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Forcast