import React from 'react'

function TopButtons({setquery}) {

    const cities = [
        {
            id:1,
            city:"Tokyo"
        },
        {
            id:2,
            city:"Berlin"
        },
        {
             id:3,
            city:"New York"
        },
        {
            id:4,
            city:"Japan"
        },
        {
            id:5,
            city:"Toronto"
        },
        {
            id:6,
            city:"Australia"
        }

    ];

    
  return (
    <>
        
        <div className='bg-black container mx-auto text-white flex flex-col justify-start py-3 md:justify-center'>
            <div className='ms-4 my-4 text-lg font-bold border-white'>
                <p>WeatherForcast </p>
            </div>
            
            <div className='   md:flex justify-between'>
            {cities.map((item)=>{
                return (<button key={item.id} className=' mx-4 hover:bg-gray-800 rounded-sm text-lg p-2 transition ease-in'
                onClick={()=>setquery({q:item.city})}>{item.city}</button>)
            })}
            </div>
        </div>
  
    </>
  )
}

export default TopButtons